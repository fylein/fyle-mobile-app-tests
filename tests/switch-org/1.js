var expect = require('chai').expect;
var LoginPage = require('../../pages/login');
var SignUpPage = require('../../pages/sign_up');
var CameraOverlayPage = require('../../pages/camera_overlay');

describe('user with 1 org', () => {
    let loginPage;
    let signUpPage;
    let cameraOverlay;
    beforeEach(async () => {
        await browser.switchContext((await browser.getContexts())[1]);
        loginPage = await LoginPage();
        signUpPage = await SignUpPage();
        cameraOverlay = await CameraOverlayPage();
    });

    it('one click action enabled in primary org', async () => {
        await signUpPage.gotoLoginPage();
        await loginPage.isHeaderLoaded();
        await loginPage.enterEmail(process.env.ONECLICKINSTAFYLE); // any random string which is not '' and not a valid email
        await loginPage.clickOnContinueButton();
        await loginPage.waitTillEmailLabelDisplayed();
        await loginPage.enterPassword(process.env.PASSWORD);
        await loginPage.clickOnSignInButton();
        expect(await cameraOverlay.isCameraOverlayHeaderDisplayed()).to.be.equal(true);
    });
});