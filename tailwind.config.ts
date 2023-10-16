import type { Config } from 'tailwindcss'
import { blackA } from '@radix-ui/colors'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        125: '500px',
        50: '200px',
        23: '92px',
      },
      spacing: {
        '10px': '10px',
        '9px': '9px',
      },
      fontFamily: {
        sans: 'var(--font-roboto)',
      },
      lineHeight: {
        '160': '160%',
      },
      colors: {
        green: {
          dark: '#015F43',
          classic: '#00875F',
          light: '#00B37E',
        },

        red: {
          dark: '#AA2834',
          classic: '#F75A68',
        },

        gray: {
          1: '#121214',
          2: '#202024',
          3: '#29292E',
          4: '#323238',
          5: '#7C7C8A',
          6: '#C4C4CC',
          7: '#E1E1E6',
          pagination: '#8D8D99',
        },

        ...blackA,
      },
      fontSize: {
        32: '2rem',
      },
      gap: {
        card: '16.25rem',
      },
      padding: {
        14: '14px',
        in: '62.25px',
        out: '70px',
        mobileOut: '52px',
      },
      keyframes: {
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        contentShow: {
          from: {
            opacity: '0',
            transform: 'translate(-50%, -48%) scale(0.96)',
          },
          to: { opacity: '1', transform: 'translate(-50% , -50%) scale(1)' },
        },
        errorShow: {
          from: {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        mobileContentShow: {
          from: {
            opacity: '0',
            transform: 'translate(-50%, 100%) scale(0.96)',
          },
          to: {
            opacity: '1',
            transform: 'translate(-50%, 100%) scale(1)',
          },
        },
      },
      animation: {
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16 , 1 , 0.3 , 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16 , 1 , 0.3 , 1)',
        errorShow: 'errorShow 700ms',
        mobileContentShow: 'mobileContentShow 150ms ',
      },
    },
  },
  plugins: [],
}
export default config
