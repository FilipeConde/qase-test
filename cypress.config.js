const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // projectId: 'o1i5zi',
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
      apiToken: 'f478efcd58cb0356ff129a0bc0ab60482a3cfd88f431bf4909e04b3503fa7484',
      projectCode: 'WUS',
      logging: true,
    },
  }
});
