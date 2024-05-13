const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '8hc65f',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl": "https://craft-ma-dev.web.app",
    "viewportWidth": 1920,
    "viewportHeight": 1080
  },
});
