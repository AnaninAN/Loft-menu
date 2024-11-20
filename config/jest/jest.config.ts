import path from 'path';

export default {
  globals: {
    __IS_DEV__: true,
    __API_URL__: '',
    __PROJECT__: 'jest',
  },
  clearMocks: true,
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  moduleDirectories: ['node_modules', 'src'],
  modulePaths: ['<rootDir>src'],
  testMatch: ['<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)'],
  rootDir: '../../',
  setupFilesAfterEnv: ['<rootDir>config/jest/setupTests.ts'],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    '@/(.*)': '<rootDir>src/$1',
  },
  resolver: undefined,
  preset: 'ts-jest',
};
