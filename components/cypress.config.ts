import { defineConfig } from 'cypress';

export default defineConfig({
  defaultCommandTimeout: 10000,
  video: false,

  waitForAnimations: true,
  e2e: {
    supportFile: false,
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
  },
});
