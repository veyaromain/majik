/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fef7f0',
          100: '#fdeee0',
          200: '#fad9c1',
          300: '#f6be97',
          400: '#f19a6b',
          500: '#ed7c4a',
          600: '#de6330',
          700: '#b84d26',
          800: '#933f25',
          900: '#763522',
        },
        tomato: {
          50: '#fef4f2',
          100: '#fee7e2',
          200: '#fed4ca',
          300: '#fcb5a5',
          400: '#f88b71',
          500: '#e32929',
          600: '#c92424',
          700: '#bb3b20',
          800: '#9a331e',
          900: '#802f1f',
        },
        basil: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#648813',
          600: '#5a7a11',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        curry: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#D8BE07',
          500: '#D8BE07',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        cream: {
          50: '#EBD489',
          100: '#fdfcf7',
          200: '#fbf8ef',
          300: '#f8f3e3',
          400: '#f4ecd1',
          500: '#ede0b8',
          600: '#e0cc94',
          700: '#d0b46f',
          800: '#b8954d',
          900: '#9a7a3e',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'sparkle': 'sparkle 1.5s ease-in-out infinite',
        'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(241, 101, 72, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(241, 101, 72, 0.6)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        'bounce-gentle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}