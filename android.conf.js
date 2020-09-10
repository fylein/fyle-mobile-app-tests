exports.config = {
  user: process.env.BROWSERSTACKUSER,
  key: process.env.BROWSERSTACKACCESSKEY,
  updateJob: false,
  specs: [
    './tests/**/*.js'
  ],
  exclude: [],
  capabilities: [{
    name: 'Fyle Mobile App',
    build: 'Test1',
    device: 'Google Pixel 3',
    os_version: '9.0',
    browserName: 'android',
    app: process.env.ANDROID_URL,
    'browserstack.debug': true,
    'browserstack.appium_version': '1.17.0'
  }],
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
