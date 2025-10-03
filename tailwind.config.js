/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // === BRAND COLORS ===
      colors: {
        // Primary - Revival Green
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#50C878', // Brand Emerald Green
          600: '#22c55e',
          700: '#16a34a',
          800: '#15803d',
          900: '#14532d',
        },
        // Secondary - Charcoal
        secondary: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#36454F', // Brand Charcoal Grey
          900: '#1f2937',
        },
        // Accent - Gold
        accent: {
          50: '#fefce8',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#FFD700', // Brand Gold
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        // Neutral Grays
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        // Semantic Colors
        success: {
          50: '#f0fdf4',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
        warning: {
          50: '#fefce8',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
        },
        info: {
          50: '#eff6ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },

      // === TYPOGRAPHY ===
      fontFamily: {
        'heading': ['var(--font-playfair-display)', 'Playfair Display', 'serif'],
        'body': ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        'serif': ['var(--font-playfair-display)', 'Playfair Display', 'serif'],
        'sans': ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],      // 12px
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],  // 14px
        'base': ['1rem', { lineHeight: '1.5rem' }],     // 16px
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],  // 18px
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],   // 20px
        '2xl': ['1.5rem', { lineHeight: '2rem' }],      // 24px
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
        '5xl': ['3rem', { lineHeight: '1.2' }],         // 48px
        '6xl': ['3.75rem', { lineHeight: '1.1' }],      // 60px
        '7xl': ['4.5rem', { lineHeight: '1.1' }],       // 72px
      },

      // === SPACING ===
      spacing: {
        '18': '4.5rem',   // 72px
        '88': '22rem',    // 352px
        '128': '32rem',   // 512px
      },

      // === BORDER RADIUS ===
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',   // 2px
        'md': '0.375rem',   // 6px
        'lg': '0.5rem',     // 8px
        'xl': '0.75rem',    // 12px
        '2xl': '1rem',      // 16px
        '3xl': '1.5rem',    // 24px
        'full': '9999px',
      },

      // === SHADOWS ===
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
      },

      // === Z-INDEX ===
      zIndex: {
        'background': '-1',
        'base': '0',
        'content': '10',
        'overlay': '20',
        'modal': '30',
        'popover': '40',
        'tooltip': '50',
      },

      // === ANIMATIONS ===
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)' 
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)' 
          },
        },
        slideDown: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-20px)' 
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)' 
          },
        },
        scaleIn: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.95)' 
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)' 
          },
        },
      },

      // === BACKGROUND IMAGES ===
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'revival-gradient': 'linear-gradient(135deg, #50C878 0%, #FFD700 100%)',
        'gradient-primary': 'linear-gradient(135deg, var(--primary-500) 0%, var(--accent-500) 100%)',
        'gradient-subtle': 'linear-gradient(135deg, var(--primary-50) 0%, var(--accent-50) 100%)',
      },

      // === TRANSITIONS ===
      transitionDuration: {
        'fast': '150ms',
        'normal': '300ms',
        'slow': '500ms',
      },

      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [
    // Custom plugin for design system utilities
    function({ addUtilities, theme }) {
      const newUtilities = {
        // Layout utilities
        '.container-fluid': {
          width: '100%',
          paddingLeft: theme('spacing.4'),
          paddingRight: theme('spacing.4'),
        },
        '.section-padding': {
          paddingTop: theme('spacing.20'),
          paddingBottom: theme('spacing.20'),
        },
        '.section-padding-sm': {
          paddingTop: theme('spacing.12'),
          paddingBottom: theme('spacing.12'),
        },
        '.section-padding-lg': {
          paddingTop: theme('spacing.32'),
          paddingBottom: theme('spacing.32'),
        },
        
        // Text utilities
        '.text-gradient': {
          background: 'linear-gradient(135deg, var(--primary-500) 0%, var(--accent-500) 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        
        // Focus utilities
        '.focus-ring:focus': {
          outline: '2px solid var(--primary-500)',
          'outline-offset': '2px',
        },
      }
      
      addUtilities(newUtilities)
    }
  ],
}