const { defineConfig } = require('cypress');

module.exports = defineConfig({
  // Reporte: cada spec genera un .json; después `npm run report` los une en un HTML
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/json',
    reportFilename: '[name]',
    overwrite: true,
    html: false,
    json: true,
  },
  e2e: {
    baseUrl: 'https://app.bookdb.online',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    video: true,
    defaultCommandTimeout: 8000,
    viewportWidth: 1280,
    viewportHeight: 800,
  },
});
