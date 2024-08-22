module.exports = {
  mode: "jit", // JIT (Just-In-Time) mode for faster build times and smaller output files
  content: [
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}", // Specifies the file paths to scan for class names
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}", // Another path specification (repeated by mistake?)
  ],
  darkMode: "class", // Enables dark mode based on a class instead of media query
  theme: {
    screens: { 
      md: { max: "1050px" }, // Defines a 'md' screen size with a maximum width of 1050px
      sm: { max: "550px" } // Defines a 'sm' screen size with a maximum width of 550px
    },
    extend: {
      colors: {
        gray: { 
          100: "#f2f2f2", // Light gray
          900: "#1c1c1c" // Dark gray
        },
        orange: { 
          a200: "#fc9b4e" // Custom orange color
        },
        white: { 
          a700: "#ffffff" // Pure white
        }
      },
      boxShadow: {}, // Placeholder for extending shadow properties if needed
      fontFamily: {
        smoochsans: "Smooch Sans", // Custom font family "Smooch Sans"
        poppins: "Poppins" // Custom font family "Poppins"
      }
    },
  },
  plugins: [require("@tailwindcss/forms")], // Adds Tailwind CSS forms plugin for better form styling
};

