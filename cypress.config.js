const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  projectId: "4fua5j",
  defaultCommandTimeout:5000,
  env: {
    url : "https://rahulshettyacademy.com"
  },
  e2e: {
    setupNodeEvents,
    //provide path of testcases
    specPattern: 'cypress/integration/examples/BDD/*.feature'
  },
});
