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
        'primary-glow': '0 0 15px 5px hsl(var(--primary) / 0.2), 0 0 5px 2px hsl(var(--primary) / 0.15)',
        'accent-glow': '0 0 15px 5px hsl(var(--accent) / 0.2), 0 0 5px 2px hsl(var(--accent) / 0.15)',
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
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'subtle-pulse-animation': { 
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 5px 1px hsl(var(--primary) / 0.2)' },
          '50%': { transform: 'scale(1.02)', boxShadow: '0 0 10px 3px hsl(var(--primary) / 0.3)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1'},
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg) scale(1.05)' },
          '50%': { transform: 'rotate(3deg) scale(1.05)' },
        },
        'bounce-light': {
           '0%, 100%': { transform: 'translateY(-3%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
           '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
        },
        'pulse-glow-effect': {
          '0%, 100%': { opacity: '0.7', boxShadow: '0 0 8px 1px hsl(var(--accent) / 0.3)' },
          '50%': { opacity: '1', boxShadow: '0 0 16px 4px hsl(var(--accent) / 0.5)' },
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
          '50%': { transform: 'translateY(-5px)' },
        },
        'icon-sparkle-pop': {
          '0%': { transform: 'scale(1) rotate(0deg) translateY(0px); opacity: 0.8; filter: brightness(1);' },
          '20%': { transform: 'scale(1.3) rotate(-5deg) translateY(-2px); opacity: 1; filter: brightness(1.15);' },
          '40%': { transform: 'scale(0.9) rotate(5deg) translateY(0px); opacity: 0.9; filter: brightness(1.05);' },
          '60%': { transform: 'scale(1.2) rotate(-3deg) translateY(-1px); opacity: 1; filter: brightness(1.1);' },
          '80%': { transform: 'scale(0.95) rotate(3deg) translateY(0px); opacity: 0.95; filter: brightness(1);' },
          '100%': { transform: 'scale(1.1) rotate(0deg) translateY(0px); opacity: 1; filter: brightness(1.05);' },
        },
        'card-hover-lift': {
          '0%': { transform: 'translateY(0) scale(1) rotateX(0) rotateY(0)', boxShadow: '0 8px 12px -3px rgba(0,0,0,0.08), 0 3px 5px -2px rgba(0,0,0,0.04)' },
          '100%': { transform: 'translateY(-8px) scale(1.03) rotateX(2deg) rotateY(1deg)', boxShadow: '0 18px 25px -5px hsl(var(--primary)/0.28), 0 8px 10px -6px hsl(var(--primary)/0.18)' },
        },
        'subtle-glow': {
          '0%, 100%': { boxShadow: '0 0 6px 0px hsl(var(--primary) / 0.25)' },
          '50%': { boxShadow: '0 0 12px 3px hsl(var(--primary) / 0.35)' },
        },
        'tag-hover-pop': {
          '0%': { transform: 'scale(1)', backgroundColor: 'hsl(var(--accent) / 0.2)' },
          '50%': { transform: 'scale(1.1)', backgroundColor: 'hsl(var(--accent) / 0.3)' },
          '100%': { transform: 'scale(1.05)', backgroundColor: 'hsl(var(--accent) / 0.25)' },
        },
        heroImageGlow: {
          '0%, 100%': {
            boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1), 0 0 15px 2px hsl(var(--primary) / 0.2)',
          },
          '50%': {
            boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1), 0 0 30px 8px hsl(var(--primary) / 0.3)',
          },
        },
        nameFallAndSettle: {
          '0%': { opacity: '0', transform: 'translateY(-120px) rotate(-12deg)' },
          '30%': { opacity: '1', transform: 'translateY(0) rotate(6deg)' },
          '50%': { transform: 'translateY(-15px) rotate(-3deg)' },
          '70%': { transform: 'translateY(0px) rotate(2deg)' },
          '85%': { transform: 'translateY(-5px) rotate(-1deg)' },
          '100%': { opacity: '1', transform: 'translateY(0) rotate(0deg)' },
        },
        fadeInHeaderName: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        heroNameScrollOut: {
          '0%': { opacity: '1', transform: 'scale(1) translateY(0)' },
          '100%': { opacity: '0', transform: 'scale(0.9) translateY(-20px)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fadeInUp': 'fadeInUp 0.7s ease-out forwards', 
        'fadeInDown': 'fadeInDown 0.7s ease-out forwards',
        'fadeInLeft': 'fadeInLeft 0.7s ease-out forwards',
        'fadeInRight': 'fadeInRight 0.7s ease-out forwards',
        'scaleIn': 'scaleIn 0.5s ease-out forwards', 
        'subtle-pulse': 'subtle-pulse-animation 2.5s ease-in-out infinite', 
        'fadeIn': 'fadeIn 0.7s ease-out forwards', 
        'wiggle': 'wiggle 0.4s ease-in-out infinite alternate',
        'bounce-light': 'bounce-light 1.8s infinite',
        'pulse-glow': 'pulse-glow-effect 2.2s infinite ease-in-out',
        'slideInRightCustom': 'slideInRight 0.7s ease-out forwards', 
        'shimmer': 'shimmer-effect 3s infinite linear',
        'subtle-float': 'subtle-float 2.5s ease-in-out infinite',
        'icon-sparkle-pop': 'icon-sparkle-pop 0.7s ease-in-out forwards',
        'card-hover-lift': 'card-hover-lift 0.35s ease-out forwards',
        'subtle-glow': 'subtle-glow 1.8s ease-in-out infinite alternate',
        'tag-hover-pop': 'tag-hover-pop 0.3s ease-out forwards',
        'heroImageGlow': 'heroImageGlow 2.5s ease-in-out infinite',
        'name-fall-settle': 'nameFallAndSettle 1.2s ease-out forwards',
        'fade-in-header-name': 'fadeInHeaderName 0.3s ease-out forwards',
        'hero-name-scroll-out': 'heroNameScrollOut 0.4s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
