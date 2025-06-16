import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Alegreya', 'serif'],
        headline: ['Belleza', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        'primary-glow': '0 0 15px 5px hsl(var(--primary) / 0.3), 0 0 5px 2px hsl(var(--primary) / 0.2)',
        'accent-glow': '0 0 15px 5px hsl(var(--accent) / 0.3), 0 0 5px 2px hsl(var(--accent) / 0.2)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(25px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-25px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-25px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(25px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'subtle-pulse-animation': { 
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 8px 2px hsl(var(--primary) / 0.2)' },
          '50%': { transform: 'scale(1.03)', boxShadow: '0 0 12px 4px hsl(var(--primary) / 0.3)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1'},
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'bounce-light': {
           '0%, 100%': { transform: 'translateY(-5%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
           '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
        },
        'pulse-glow-effect': {
          '0%, 100%': { opacity: '0.8', boxShadow: '0 0 10px 2px hsl(var(--accent) / 0.4)' },
          '50%': { opacity: '1', boxShadow: '0 0 20px 5px hsl(var(--accent) / 0.6)' },
        },
        slideInRight: {
           from: { transform: 'translateX(100%)', opacity: '0' },
           to: { transform: 'translateX(0)', opacity: '1' },
        },
        shimmer: {
           '0%': { backgroundPosition: '-1000px 0' },
           '100%': { backgroundPosition: '1000px 0' },
        },
        'subtle-float': { 
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'icon-sparkle-pop': {
          '0%': { transform: 'scale(1) rotate(0deg)', opacity: '0.7' },
          '50%': { transform: 'scale(1.3) rotate(15deg)', opacity: '1' },
          '100%': { transform: 'scale(1) rotate(0deg)', opacity: '0.7' },
        },
        'card-hover-lift': {
          '0%': { transform: 'translateY(0) scale(1)', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)' },
          '100%': { transform: 'translateY(-8px) scale(1.03)', boxShadow: '0 20px 25px -5px hsl(var(--primary)/0.3), 0 8px 10px -6px hsl(var(--primary)/0.2)' },
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fadeInUp': 'fadeInUp 0.8s ease-out', 
        'fadeInDown': 'fadeInDown 0.8s ease-out',
        'fadeInLeft': 'fadeInLeft 0.8s ease-out',
        'fadeInRight': 'fadeInRight 0.8s ease-out',
        'scaleIn': 'scaleIn 0.6s ease-out', 
        'subtle-pulse': 'subtle-pulse-animation 2s ease-in-out infinite', 
        'fadeIn': 'fadeIn 0.8s ease-out', 
        'wiggle': 'wiggle 0.5s ease-in-out infinite alternate',
        'bounce-light': 'bounce-light 1.5s infinite',
        'pulse-glow': 'pulse-glow-effect 2.5s infinite ease-in-out',
        'slideInRightCustom': 'slideInRight-effect 0.7s ease-out', /* Renamed to avoid conflict with Tailwind default */
        'shimmer': 'shimmer-effect 3s infinite linear',
        'subtle-float': 'subtle-float 3s ease-in-out infinite',
        'icon-sparkle-pop': 'icon-sparkle-pop 0.8s ease-in-out',
        'card-hover-lift': 'card-hover-lift 0.3s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
