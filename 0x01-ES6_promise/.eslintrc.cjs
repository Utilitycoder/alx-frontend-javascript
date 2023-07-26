module.exports = {
  // Use 'env' to specify the environments your code will run in
  env: {
    browser: true, // If your code runs in the browser
    node: true, // If your code runs in Node.js
    es6: true, // If you're using ES6+ features
  },
  
  // Use 'extends' to base your configuration on existing configurations
  extends: [
    'eslint:recommended', // Recommended ESLint rules
  ],
  
  // Use 'parserOptions' to specify the JavaScript language options
  parserOptions: {
    ecmaVersion: 2021, // Specify the ECMAScript version
    sourceType: 'module', // Use 'module' if you're using ES modules, 'script' for CommonJS
  },
  
  // Use 'plugins' to add ESLint plugins to your configuration
  plugins: [
    // Add additional plugins here, if needed
    // E.g., 'react', 'vue', etc.
  ],
  
  // Use 'rules' to customize the linting rules
  rules: {
    // Customize the rules based on your preferences
    // E.g., "semi": "error" to enforce semicolons
    //       "no-console": "warn" to show a warning for console statements
    //       "indent": ["error", 2] to enforce 2-space indentation
  },
  
  // Use 'overrides' for specific file or directory-specific configurations
  overrides: [
    {
      files: ['**/*.test.js'], // For test files (you can customize the pattern)
      env: {
        jest: true, // Enable Jest environment for test files
      },
    },
  ],
};
