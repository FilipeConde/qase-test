const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'o1i5zi',
  e2e: {
    baseUrl: 'http://webdriveruniversity.com/To-Do-List/',
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
