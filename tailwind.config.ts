import { nextui } from '@nextui-org/react';
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        black: {
          light: '#252429',
          DEFAULT: '#161618',
          dark: '#0E0D12',
        },
        purple: '#672CB7',
        pink: '#A00799',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '0.25rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
        },
      },
    },
  },
  plugins: [nextui()],
};

export default config;
