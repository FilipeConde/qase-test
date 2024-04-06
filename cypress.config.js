const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'o1i5zi',
  e2e: {
    baseUrl: 'http://webdriveruniversity.com/To-Do-List/',
    watchForFileChanges: false,
    video: false,
    screenshotOnRunFailure: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    reporter: 'cypress-qase-reporter',
    reporterOptions: {
      apiToken: '5578e5c67cba5da3d54e51c2b5194523a2801bf1443b7f79ebdcb03f999fa730',
      projectCode: 'WUS',
      logging: true,
    },
  }
});
