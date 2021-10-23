// jest.config.ts
import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  setupFiles: ['setupTests.js'],
};
export default config;
