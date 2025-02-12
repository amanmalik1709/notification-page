/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: 'hsl(1, 90%, 64%)',
          blue: 'hsl(219, 85%, 26%)',
        },
        neutral: {
          white: 'hsl(0, 0%, 100%)',
          'very-light-grayish-blue': 'hsl(210, 60%, 98%)',
          'light-grayish-blue-1': 'hsl(211, 68%, 94%)',
          'light-grayish-blue-2': 'hsl(205, 33%, 90%)',
          'grayish-blue': 'hsl(219, 14%, 63%)',
          'darkgrayishblue': 'hsl(219, 12%, 42%)',
          verydarkblue: 'hsl(224, 21%, 14%)',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      fontSize: {
        base: '16px',
      },
      fontWeight: {
        medium: 600,
        bold: 800,
      },
    },
  },
  plugins: [],
}
