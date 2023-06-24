/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['.src/pages/**/*.{ts,tsx}', '.src/components/**/*.{ts,tsx}', '.src/app/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#0A2130',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: '#0177B3',
          100: '#0ea5e9',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        tertiary: {
          DEFAULT: '#73450E',
          100: '#733410',
          200: '#592411',
          300: '#40170E',
          400: '#260A07',
        },
        light: '#EDEDED',
        dark: '#1a1a1a',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        'inner-lg': 'inset -1px 2px 3px 0 rgba(0, 0, 0, 0.2)',
        'inner-xl': 'inset -1px 2px 4px 0 rgba(0, 0, 0, 0.3)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0A2130',
          100: '#0C2736',
        },
        secondary: {
          DEFAULT: '#0177B3',
          100: '#0ea5e9',
        },
        dark: '#1a1a1a',
        tertiary: {
          DEFAULT: '#73450E',
          100: '#733410',
          200: '#592411',
          300: '#40170E',
          400: '#260A07',
        },
        light: '#EDEDED',
      },
      boxShadow: {
        'inner-lg': 'inset -1px 2px 3px 0 rgba(0, 0, 0, 0.2)',
        'inner-xl': 'inset -1px 2px 4px 0 rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
