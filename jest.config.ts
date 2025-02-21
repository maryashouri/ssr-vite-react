// jest.config.ts

export default {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    // process `*.tsx` files with `ts-jest`
    "\\.scss$": "jest-transform-stub",
    "\\.css$": "jest-transform-stub", // CSS files
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__ mocks __/fileMock.js",
    "^../../hooks/useInfiniteHotels$":
      "<rootDir>/src/__mocks__/hooks/useInfiniteHotels.ts",
  },
};
