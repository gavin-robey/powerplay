import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    // TODO: Remove the eslint-ignore comment and implement node event listeners
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    specPattern: 'cypress/e2e/**/*.ts',
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
  },
});
