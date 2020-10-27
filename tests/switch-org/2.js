var expect = require('chai').expect;
var LoginPage = require('../../pages/login');
var SignUpPage = require('../../pages/sign_up');
var DashboardPage = require('../../pages/dashboard');

describe('user with 1 org', () => {
    let loginPage;
    let signUpPage;
    let dashboard;
    beforeEach(async () => {
        await browser.switchContext((await browser.getContexts())[1]);
        loginPage = await LoginPage();
        signUpPage = await SignUpPage();
        dashboard = await DashboardPage();
    });

    it('normal login opens up dashboard', async () => {
        await signUpPage.gotoLoginPage();
        await loginPage.isHeaderLoaded();
        await loginPage.enterEmail(process.env.ONEORGWONDER); // any random string which is not '' and not a valid email
        await loginPage.clickOnContinueButton();
        await loginPage.waitTillEmailLabelDisplayed();
        await loginPage.enterPassword(process.env.PASSWORD);
        await loginPage.clickOnSignInButton();
        expect(await dashboard.isDashboardHeaderLoaded()).to.be.equal(true);
    });
});