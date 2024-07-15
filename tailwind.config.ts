import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: 'rgba(255, 255, 255, 1)',
      neutral: 'rgba(248, 248, 248, 1)',
      'neutral-2': 'rgba(240, 240, 240, 1)',
      dark: 'rgba(1, 1, 1, 1)',
      'dark-75': 'rgba(65, 65, 65, 1)',
      'dark-50': 'rgba(128, 128, 128, 1)',
      'dark-25': 'rgba(191, 191, 191, 1)',
      'blue-primary': 'rgba(6, 6, 68, 1)',
      'blue-light': 'rgba(83, 113, 255, 1)',
      'blue-lighter': 'rgba(204, 213, 255, 1)',
      'blue-disabled': 'rgba(161, 161, 247, 1)',
      'orange-primary': 'rgba(255, 130, 16, 1)',
      'orange-light': 'rgba(255, 202, 153, 1)',
      'orange-lighter': 'rgba(255, 228, 204, 1)',
      red: 'rgba(228, 67, 67, 1)',
      'red-light': 'rgba(161, 161, 247, 1)',
      green: 'rgba(204, 213, 255, 1)',
      'green-light': 'rgba(210, 249, 230, 1)',
    },

    extend: {
      spacing: {
        'sidebar-nav': '240px',
      },
      backgroundImage: {
        'gradient-purple':
          'linear-gradient(180deg, #ADB7F9 0%, rgba(177, 185, 248, 0) 100%)',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
