const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    excludeSpecPattern: ["**/2-advanced-examples/*", "**/1-getting-started/*"],
    //excludes tests of the specified path can be string or array
  },
});
