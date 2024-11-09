// tailwind.config.js
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // Make sure your pages folder is included
    './components/**/*.{js,ts,jsx,tsx}', // Include your components folder
    './app/**/*.{js,ts,jsx,tsx}', // If you're using the `app` directory in Next.js 13+
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};