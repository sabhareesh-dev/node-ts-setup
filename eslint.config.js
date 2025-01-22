const globals = require('globals');
const pluginJs = require('@eslint/js');
const tseslint = require('@typescript-eslint/eslint-plugin');
const parser = require('@typescript-eslint/parser'); // Add the parser for TypeScript

module.exports = [
    {
        files: ['**/*.{js,mjs,cjs,ts,tsx}'], // Include both JavaScript and TypeScript files
        languageOptions: {
            parser: parser,
            ecmaVersion: 2021,
            sourceType: 'module', // Enable ES Modules
            globals: {
                ...globals.node, // Add Node.js globals
                ...globals.browser, // Optionally include browser globals
            },
        },
        plugins: {
            '@eslint/js': pluginJs, // Define the plugin as an object
            '@typescript-eslint': tseslint, // Define the TypeScript plugin
        },
        rules: {},
    },
    {
        // Directly use the configuration for JavaScript (using pluginJs config)
        plugins: {
            '@eslint/js': pluginJs,
        },
        rules: {
            ...pluginJs.configs.recommended.rules, // Directly pull the recommended rules
        },
        files: ['**/*.{js,mjs,cjs}'], // Apply this config only to JS files
    },
    {
        // Directly use the configuration for TypeScript (using @typescript-eslint plugin)
        plugins: {
            '@typescript-eslint': tseslint,
        },
        rules: {
            ...tseslint.configs.recommended.rules, // Directly pull the recommended rules
        },
        files: ['**/*.{ts,tsx}'], // Apply this config only to TS files
    },
];
