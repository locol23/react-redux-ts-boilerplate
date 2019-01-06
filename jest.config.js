module.exports = {
  globals: {
    "ts-jest": {
      "tsConfig": "tsconfig.json"
    }
  },
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js"
  ],
  // setupTestFrameworkScriptFile: null,
  testMatch: [
    "**/src/**/*.test.(ts|tsx|js)"
  ],
  testURL: "http://localhost",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
};
