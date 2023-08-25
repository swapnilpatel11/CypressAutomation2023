const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //provide path of testcases
    specPattern: 'cypress/integration/'
  },
});
