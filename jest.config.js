module.exports = {
    preset: 'ts-jest', // Support TypeScript with Jest
    testEnvironment: 'node', // Required for SuperTest
    rootDir: './src', // Start tests from the 'src' directory
    moduleDirectories: ['node_modules', 'src'], // Resolve imports
    testMatch: ['**/tests/**/*.(spec|test).[tj]s?(x)'], // Match test files in 'tests' folder
    collectCoverage: true, // Enable code coverage
    coverageDirectory: '../coverage', // Store coverage reports outside 'src'
    coveragePathIgnorePatterns: ['/node_modules/', '/tests/'], // Exclude test files from coverage
};
