import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest", 
  testEnvironment: "jsdom", 
  collectCoverage: true, 
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}", 
    "!src/**/*.d.ts", 
  ],
  coverageDirectory: "coverage", 
  coverageReporters: ["text", "lcov"], 
};

export default config;