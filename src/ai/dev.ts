import { config } from 'dotenv';
// Ensure .env.local is loaded for Genkit CLI development scripts.
// Next.js handles .env.local loading automatically for the app itself.
config({ path: '.env.local' });

import '@/ai/flows/personalized-welcome.ts';
