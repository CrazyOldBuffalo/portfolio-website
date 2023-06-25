/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'background': '#292D3E',
      'accent' : '#AB47BC',
      'variables' : '#EEFFFF',
      'strings' : '#C3E88D',
      'parameters' : '#F78C6C',
      'border': '#A6ACCD'
    },

    extend: {
      fontFamily: {
        sans: ['var(--font-sans)','Roboto', '-apple-system', 'ui-sans-serif'],
        serif: ['var(--font-serif)', 'ui-serif', 'Georgia'],
        mono: ['monospace', 'Consolas'],
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
