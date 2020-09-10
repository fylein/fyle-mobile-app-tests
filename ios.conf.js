exports.config = {
    user: process.env.BROWSERSTACKUSER,
    key: process.env.BROWSERSTACKACCESSKEY,
  
    updateJob: false,
    specs: [
      './tests/**/*.js'
    ],
    exclude: [],
  
    capabilities: [{
      name: 'single_appium_test',
      build: 'webdriver-browserstack',
      device: 'iPhone 11 Pro',
      os_version: '13.0',
      app: process.env.IOS_URL,
      'browserstack.debug': true,
      'browserstack.appium_version': '1.17.0',
      webviewConnectTimeout: 90000
    }],
  
    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
  
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      timeout: 20000
    }
  };
  