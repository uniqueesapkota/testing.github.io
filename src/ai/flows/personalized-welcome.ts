'use server';

/**
 * @fileOverview Generates personalized welcome messages for portfolio visitors.
 *
 * - generatePersonalizedWelcome - A function that generates a personalized welcome message.
 * - PersonalizedWelcomeInput - The input type for the generatePersonalizedWelcome function.
 * - PersonalizedWelcomeOutput - The return type for the generatePersonalizedWelcome function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedWelcomeInputSchema = z.object({
  visitorName: z.string().describe('The name of the visitor.'),
  portfolioOwnerName: z.string().describe('The name of the portfolio owner.'),
  portfolioOwnerSkills: z.array(z.string()).describe('The skills of the portfolio owner.'),
});
export type PersonalizedWelcomeInput = z.infer<typeof PersonalizedWelcomeInputSchema>;

const PersonalizedWelcomeOutputSchema = z.object({
  welcomeMessage: z.string().describe('The personalized welcome message.'),
});
export type PersonalizedWelcomeOutput = z.infer<typeof PersonalizedWelcomeOutputSchema>;

export async function generatePersonalizedWelcome(input: PersonalizedWelcomeInput): Promise<PersonalizedWelcomeOutput> {
  return personalizedWelcomeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedWelcomePrompt',
  input: {schema: PersonalizedWelcomeInputSchema},
  output: {schema: PersonalizedWelcomeOutputSchema},
  prompt: `You are an AI assistant tasked with generating personalized welcome messages for visitors to a portfolio website.

  The visitor's name is: {{{visitorName}}}
  The portfolio owner's name is: {{{portfolioOwnerName}}}
  The portfolio owner's skills are: {{#each portfolioOwnerSkills}}{{{this}}}{{#unless @last}}, {{/unless}}{{/each}}

  Generate a warm and engaging welcome message that makes the visitor feel welcome and highlights the portfolio owner's skills.
  The welcome message should be no more than 50 words.
  `,
});

const personalizedWelcomeFlow = ai.defineFlow(
  {
    name: 'personalizedWelcomeFlow',
    inputSchema: PersonalizedWelcomeInputSchema,
    outputSchema: PersonalizedWelcomeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
