var element = require('../classes/element');

module.exports = async () => {
    var signInLink = await element('#sign-up--redirect-sign-in');
    // var emailInput = await element('body > ion-nav-view > ion-nav-view > ion-view > div > ion-content > div.scroll > div.block.block-content > div:nth-child(1) > form > input');
    // var signUpBtn = await element('body > ion-nav-view > ion-nav-view > ion-view > div > ion-content > div.scroll > div.block.block-content > div:nth-child(1) > form > button');
    // var userExistsMessage = await element('body > div.popup-container.fy-confirm-popups.heading-medium.popup-showing.active > div > div.popup-body > div > p');
    // var userExistsMessage = await element('/html/body/div[5]/div/div[2]/div/p');
    return {
        signInLink,
        // emailInput,
        // signUpBtn,
        // userExistsMessage,
        // async enterEmail(email) {
        //     await emailInput.waitForIntereactable();
        //     return await emailInput.sendInput(email);
        // },
        // async clickSignUp() {
        //     await signUpBtn.waitForIntereactable();
        //     return await signUpBtn.click();
        // },
        async gotoLoginPage() {
            return await signInLink.click();
        },
        // async checkIfSignUpButtonDisabled() {
        //     return (await signUpBtn.getAttribute('disabled')) === 'true';
        // },
        // async checkIfUserExistsMessageIsShown() {
        //     return (await userExistsMessage.getText()).trim() === 'If you already have a Fyle account, please try logging in.'.trim();
        // }
    };
};
