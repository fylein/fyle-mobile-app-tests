module.exports = async (selector) => {
    let element = await $(selector);

    return {
        element,
        async click () {
            return await element.click();
        },
        async clearInput() {
            var currentValue = await emailInput.getValue();
            var backspacesRequired = currentValue.split('').map(() => '\uE003');
            return await element.addValue(backspacesRequired);
        },
        async sendInput(text) {
            return await element.addValue([text]);
        },
        async isDisplayed() {
            return await element.isExisting();
        },
        async waitForDisplayed(timeout) {
            return await element.waitForExist({
                timeout: timeout || 3000
            });
        },
        async waitForIntereactable() {
            return await element.waitForEnabled({
                timeout: 3000
            });
        },
        async getText() {
            return await element.getText();
        },
        async getAttribute(attributeName) {
            return await element.getAttribute(attributeName);
        }
    };
};