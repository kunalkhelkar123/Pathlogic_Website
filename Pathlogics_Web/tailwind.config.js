module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      animation: {
        'show-hide': 'showHide 1.5s ease-in-out infinite', // Show-hide effect
        fadeIn: 'fadeIn 0.5s ease-in-out',                // Fade-in effect
      },
      keyframes: {
        showHide: {
          '0%, 100%': { opacity: 1 },  // Fully visible at start and end
          '50%': { opacity: 0 },       // Invisible at midpoint
        },
        fadeIn: {
          from: { opacity: 0 },        // Start invisible
          to: { opacity: 1 },          // Fully visible
        },
      },
      
    },
  },
  plugins: [],
};
