# fyle mobile app tests

Automated tests for our mobile app on browserstack. Under development now, might be unstable for a while.

# Setup
* Clone the repo
* Install dependencies `npm install`
* get the setup.sh file from @Dhar
* source setup.sh

# to run android tests

* npm run test_android

# to run ios tests

* npm run test_ios

# Running your tests
- Upload your Native App (.apk file) to BrowserStack servers using upload API:

  ```
  curl -u "username:accesskey" -X POST "https://api.browserstack.com/app-automate/upload" -F "file=@/path/to/app/file/Application-debug.apk"
  ```

to the BrowserStack servers using the above API.

#### npm test

## Notes
* You can view your test results on the [BrowserStack App Automate dashboard](https://www.browserstack.com/app-automate)
