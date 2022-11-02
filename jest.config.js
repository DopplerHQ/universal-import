/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  verbose: true,
  testEnvironment: "node",
  projects: [
    {
      transform: {
        "^.+\\.(t|j)sx?$": ["@swc/jest"],
      },
      testMatch: ["<rootDir>/core/**/*.test.ts"],
    },
  ],
  collectCoverage: true,
  coverageThreshold: { global: { branches: 100, functions: 100, lines: 100, statements: 100 } },
};
