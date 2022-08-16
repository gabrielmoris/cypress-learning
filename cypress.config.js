const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    // experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern: ["**/2-advanced-examples/*", "**/1-getting-started/*"],
    //excludes tests of the specified path can be string or array
  },
});
