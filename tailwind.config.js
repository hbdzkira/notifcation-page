/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-red": "hsl(1, 90%, 64%)",
        "primary-blue": "hsl(219, 85%, 26%)",
        "neutral-blue-1": "hsl(210, 60%, 98%)",
        "neutral-blue-2": "hsl(211, 68%, 94%)",
        "neutral-blue-3": "hsl(205, 33%, 90%)",
        "neutral-blue-4": "hsl(219, 14%, 63%)",
        "neutral-blue-5": "hsl(219, 12%, 42%)",
        "neutral-blue-6": "hsl(224, 21%, 14%)",
      }
    },
  },
  plugins: [],
}

