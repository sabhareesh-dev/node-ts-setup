export const preset = 'ts-jest';
export const testEnvironment = 'node';
export const rootDir = './src';
export const moduleDirectories = ['node_modules', 'src'];
export const testMatch = ['**/?(*.)+(spec|test).[tj]s?(x)'];
export const collectCoverage = true;
export const coverageDirectory = '../coverage';
export const coverageProvider = 'v8';
export const coveragePathIgnorePatterns = [
    '/node_modules/',
    '/tests/',
    '/config/',
    '/middleware/',
    '/utils/',
];
