var element = require('../classes/element');

module.exports = async () => {
    var emailElement = await element('#sign-in--email');
    var passwordElement = await element('#sign-in--password');
    var continueButton = await element('#sign-in--continue');
    var signInButton = await element('#sign-in--btn-sign-in');
    var signInMessage = await element('#sign-in--error-msg');
    var header = await element('#sign-in--header');
    var emailLabel = await element('#sign-in--email-label');
    var changeEmail = await element('#sign-in--change');

    return {
        async enterEmail(email) {
            await emailElement.waitForDisplayed();
            await emailElement.sendInput(email);
        },
        async isEmailDisplayed() {
            return await emailElement.isDisplayed();
        },
        async waitTillEmailLabelDisplayed() {
            return await emailLabel.waitForDisplayed();
        },
        async isEmailLabelDisplayed() {
            return await emailLabel.isDisplayed();
        },
        async getEmailLabelText() {
            return await emailLabel.getText();
        },
        async isChangeEmailLinkDisplayed() {
            return await changeEmail.isDisplayed();
        },
        async changeEmailClick() {
            return await changeEmail.click();
        },
        async enterLoginCreds(email, password) {
            await emailElement.waitForDisplayed();
            await emailElement.sendInput(email);
            await continueButton.click();
            await passwordElement.waitForDisplayed();
            await passwordElement.sendInput(password);
            await browser.hideKeyboard();
        },
        async enterPassword(password) {
            await passwordElement.waitForDisplayed();
            return passwordElement.sendInput(password);
        },
        async isPasswordInputDisplayed() {
            return await passwordElement.isDisplayed();
        },
        async clickOnContinueButton() {
            await continueButton.click();
        },
        async clickOnSignInButton() {
            await signInButton.waitForIntereactable();
            await signInButton.click();
        },
        async isSignInMessageDisplayed() {
            return (await signInMessage.waitForDisplayed()) === true;
        },
        async getMessageText() {
            return await signInMessage.getText();
        },
        async isHeaderLoaded() {
            return await header.waitForDisplayed();
        },
        async isSignInButtonDisabled() {
            return (await signInButton.getAttribute('disabled')) === 'true';
        },
        async isContinueButtonDisabled() {
            return (await continueButton.getAttribute('disabled')) === 'true';
        }
    };
};