var expect = require('chai').expect;
var LoginPage = require('../../pages/login');
var SignUpPage = require('../../pages/sign_up');
var SwitchOrgPage = require('../../pages/switch_org');
var DashboardPage = require('../../pages/dashboard');

describe('user with > 1 org', () => {
    let loginPage;
    let signUpPage;
    let switchOrg;
    beforeEach(async () => {
        await browser.closeApp();
        await browser.launchApp();
        await browser.switchContext((await browser.getContexts())[1]);
        loginPage = await LoginPage();
        signUpPage = await SignUpPage();
        switchOrg = await SwitchOrgPage();
        await signUpPage.gotoLoginPage();
        await loginPage.isHeaderLoaded();
        await loginPage.enterEmail(process.env.ACTIVEFYLER); // any random string which is not '' and not a valid email
        await loginPage.clickOnContinueButton();
        await loginPage.waitTillEmailLabelDisplayed();
        await loginPage.enterPassword(process.env.PASSWORD);
        await loginPage.clickOnSignInButton();
    });

    it('switch org page loads up properly', async ()=> {
        expect(await switchOrg.checkFirstElementOfOrgList('AdminOnboardingTest')).to.be.equal(true);
    });

    it('simple search works properly', async () => {
        await switchOrg.searchFor('dhar');
        expect(await switchOrg.checkFirstElementOfOrgList('DharDhar')).to.be.equal(true);
    });
});