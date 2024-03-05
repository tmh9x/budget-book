const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  videoCompression: true,
  env: {
    jwt: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImVtYWlsIjoib25zLmJlbi15b3Vzc2VmQGRvY2MudGVjaHN0YXJ0ZXIuZGUiLCJpYXQiOjE3MDk2MzA1MTQsImV4cCI6MTcwOTg4OTcxNH0.V8zK0z42qCGxJAT4qppteFbfseSY9L_PdCpZ5rk90bc'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
