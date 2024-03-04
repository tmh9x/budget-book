const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  videoCompression: true,
  env: {
    jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoib25zLmJlbi15b3Vzc2VmQGRvY2MudGVjaHN0YXJ0ZXIuZGUiLCJpYXQiOjE3MDk1NjExMzgsImV4cCI6MTcwOTgyMDMzOH0.zerdTnvSpxs5lRQ0CrsHu5iXsI268xCirkVLHWih5WU'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
