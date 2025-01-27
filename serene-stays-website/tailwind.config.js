// tailwind.config.js
module.exports = {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}', // Adjust based on your project structure
    ],
    theme: {
        extend: {
            colors: {
                primary: '#fed6be',  // Primary color
                secondary: '#f4b29a', // Secondary color
                accent: '#82e8c9',    // Accent color
                background: '#0f2a29', // Background color
                text: '#ffffff',      // Text color
            },
            fontFamily: {
                header: ['Poppins', 'sans-serif'], // Font for headers
                body: ['Roboto', 'sans-serif'],   // Font for body text
                navigation: ['Inter', 'sans-serif'], // Font for navigation
            },
        },
    },
    plugins: [],
};
