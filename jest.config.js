module.exports = {
  collectCoverage: true,

  coverageDirectory: "coverage",

  coverageReporters: [
    "json",
    "text",
    "lcov",
    "clover"
  ],

  collectCoverageFrom: [
    "**/*.{js,jsx}",
    "!**/node_modules/**",
    "!**/coverage/**",
    "!jest.config.js"
  ],

  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
