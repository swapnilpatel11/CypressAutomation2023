const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "4fua5j",
  defaultCommandTimeout:5000,
  env: {
    url : "https://rahulshettyacademy.com"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //provide path of testcases
    specPattern: 'cypress/integration/'
  },
});
