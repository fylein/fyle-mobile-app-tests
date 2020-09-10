var expect = require('chai').expect;
var LoginPage = require('../pages/login');
var SignUpPage = require('../pages/sign_up');
var SwitchOrgPage = require('../pages/switch_org');

describe('Login page', function () {
  var loginPage;
  var signUpPage;
  var switchOrgPage;
  describe('when user is not signed up', () => {
    beforeEach(async () => {
      await browser.closeApp();
      await browser.launchApp();
      await browser.switchContext((await browser.getContexts())[1]);
      loginPage = await LoginPage();
      signUpPage = await SignUpPage();
      switchOrgPage = await SwitchOrgPage();

      await signUpPage.gotoLoginPage();
      await loginPage.isHeaderLoaded();
    });

    it('continue button is disabled by default', async () => {
      expect(await loginPage.isContinueButtonDisabled()).to.be.equal(true);
    });

    it('invalid email entry not accepted', async () => {
      expect(await loginPage.isContinueButtonDisabled()).to.be.equal(true);
      await loginPage.enterEmail('asdaddadsds'); // any random string which is not '' and not a valid email
      expect(await loginPage.isContinueButtonDisabled()).to.be.equal(true);
    });

    it('valid email entry shows proper error message', async () => {
      expect(await loginPage.isContinueButtonDisabled()).to.be.equal(true);
      await loginPage.enterEmail(process.env.UNREGISTERED_USER); // any random string which is not '' and not a valid email
      await loginPage.clickOnContinueButton();
      expect(await loginPage.isSignInMessageDisplayed()).to.be.equal(true);
      expect(await loginPage.getMessageText()).to.be.equal('Account doesn\'t exist');
    });
  });


  describe('If the user is signed up but unverified account', () => {
    beforeEach(async () => {
      await browser.closeApp();
      await browser.launchApp();
      await browser.switchContext((await browser.getContexts())[1]);
      loginPage = await LoginPage();
      signUpPage = await SignUpPage();
      switchOrgPage = await SwitchOrgPage();

      await signUpPage.gotoLoginPage();
      await loginPage.isHeaderLoaded();
    });

    it('continue button is disabled by default', async () => {
      expect(await loginPage.isContinueButtonDisabled()).to.be.equal(true);
    });

    it('invalid email entry not accepted', async () => {
      expect(await loginPage.isContinueButtonDisabled()).to.be.equal(true);
      await loginPage.enterEmail('asdaddadsds'); // any random string which is not '' and not a valid email
      expect(await loginPage.isContinueButtonDisabled()).to.be.equal(true);
    });

    it('valid email entry shows proper form changes', async () => {
      expect(await loginPage.isContinueButtonDisabled()).to.be.equal(true);

      await loginPage.enterEmail(process.env.UNVERIFIEDFYLER); // any random string which is not '' and not a valid email
      await loginPage.clickOnContinueButton();

      await loginPage.waitTillEmailLabelDisplayed();
      expect(await loginPage.isEmailDisplayed()).to.be.equal(false);
      expect(await loginPage.isEmailLabelDisplayed()).to.be.equal(true);
      expect(await loginPage.getEmailLabelText()).to.be.equal(process.env.UNVERIFIEDFYLER);
      expect(await loginPage.isChangeEmailLinkDisplayed()).to.be.equal(true);
      expect(await loginPage.isPasswordInputDisplayed()).to.be.equal(true);
      expect(await loginPage.isSignInButtonDisabled()).to.be.equal(true);

      await loginPage.changeEmailClick();

      expect(await loginPage.isEmailDisplayed()).to.be.equal(true);
      expect(await loginPage.isEmailLabelDisplayed()).to.be.equal(false);
      expect(await loginPage.isChangeEmailLinkDisplayed()).to.be.equal(false);
      expect(await loginPage.isPasswordInputDisplayed()).to.be.equal(false);
    });

    it('shows proper error message on valid email and invalid password', async () => {
      expect(await loginPage.isContinueButtonDisabled()).to.be.equal(true);

      await loginPage.enterEmail(process.env.UNVERIFIEDFYLER); 
      await loginPage.clickOnContinueButton();

      await loginPage.waitTillEmailLabelDisplayed();

      await loginPage.enterPassword('aloobhajakhao');

      await loginPage.clickOnSignInButton();

      expect(await loginPage.isSignInMessageDisplayed()).to.be.equal(true);

      expect(await loginPage.getMessageText()).to.be.equal('Account Not Verified!');
    });

    it('shows proper error message on valid email and password', async () => {
      expect(await loginPage.isContinueButtonDisabled()).to.be.equal(true);

      await loginPage.enterEmail(process.env.UNVERIFIEDFYLER); 
      await loginPage.clickOnContinueButton();

      await loginPage.waitTillEmailLabelDisplayed();

      await loginPage.enterPassword(process.env.PASSWORD);

      await loginPage.clickOnSignInButton();

      expect(await loginPage.isSignInMessageDisplayed()).to.be.equal(true);

      expect(await loginPage.getMessageText()).to.be.equal('Account Not Verified!');
    });
  });


  describe('If the user is signed up', () => {
    beforeEach(async () => {
      await browser.closeApp();
      await browser.launchApp();
      await browser.switchContext((await browser.getContexts())[1]);
      loginPage = await LoginPage();
      signUpPage = await SignUpPage();
      switchOrgPage = await SwitchOrgPage();

      await signUpPage.gotoLoginPage();
      await loginPage.isHeaderLoaded();
    });

    it('continue button is disabled by default', async () => {
      expect(await loginPage.isContinueButtonDisabled()).to.be.equal(true);
    });

    it('invalid email entry not accepted', async () => {
      expect(await loginPage.isContinueButtonDisabled()).to.be.equal(true);
      await loginPage.enterEmail('asdaddadsds'); // any random string which is not '' and not a valid email
      expect(await loginPage.isContinueButtonDisabled()).to.be.equal(true);
    });

    it('valid email entry shows proper form changes', async () => {
      expect(await loginPage.isContinueButtonDisabled()).to.be.equal(true);

      await loginPage.enterEmail(process.env.ACTIVEFYLER);
      await loginPage.clickOnContinueButton();

      await loginPage.waitTillEmailLabelDisplayed();
      expect(await loginPage.isEmailDisplayed()).to.be.equal(false);
      expect(await loginPage.isEmailLabelDisplayed()).to.be.equal(true);
      expect(await loginPage.getEmailLabelText()).to.be.equal(process.env.ACTIVEFYLER);
      expect(await loginPage.isChangeEmailLinkDisplayed()).to.be.equal(true);
      expect(await loginPage.isPasswordInputDisplayed()).to.be.equal(true);
      expect(await loginPage.isSignInButtonDisabled()).to.be.equal(true);

      await loginPage.changeEmailClick();

      expect(await loginPage.isEmailDisplayed()).to.be.equal(true);
      expect(await loginPage.isEmailLabelDisplayed()).to.be.equal(false);
      expect(await loginPage.isChangeEmailLinkDisplayed()).to.be.equal(false);
      expect(await loginPage.isPasswordInputDisplayed()).to.be.equal(false);
    });

    it('shows proper error message on valid email and invalid password', async () => {
      expect(await loginPage.isContinueButtonDisabled()).to.be.equal(true);

      await loginPage.enterEmail(process.env.ACTIVEFYLER); // any random string which is not '' and not a valid email
      await loginPage.clickOnContinueButton();

      await loginPage.waitTillEmailLabelDisplayed();

      await loginPage.enterPassword('aloobhajakhao');

      await loginPage.clickOnSignInButton();

      expect(await loginPage.isSignInMessageDisplayed()).to.be.equal(true);

      expect(await loginPage.getMessageText()).to.be.equal('Unauthorized');
    });

    it('shows proper error message on valid email and password', async () => {
      expect(await loginPage.isContinueButtonDisabled()).to.be.equal(true);

      await loginPage.enterEmail(process.env.ACTIVEFYLER); // any random string which is not '' and not a valid email
      await loginPage.clickOnContinueButton();

      await loginPage.waitTillEmailLabelDisplayed();

      await loginPage.enterPassword(process.env.PASSWORD);

      await loginPage.clickOnSignInButton();

      expect(await switchOrgPage.isSearchInputDisplayed()).to.be.equal(true);
    });
  });
});
