module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    ".(jsx?|tsx?)": "ts-jest"
  },
  testPathIgnorePatterns: [
    "/node_modules/(?!@dump247).+(ts|tsx|js|jsx)$",
    "/node_modules/",
    "/lib/",
    "/.storybook/"
  ],
  testRegex: "(/test/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  moduleFileExtensions: ["ts", "tsx", "js", "json"]
};
