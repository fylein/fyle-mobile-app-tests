var element = require('../classes/element');

module.exports = async () => {
    // var header = await element('body > ion-nav-view > ion-view > ion-content > div.scroll > div > div.item.item-divider.text-center');
    var searchInput = await element('#switch-org--search-input');
    return {
        // header,
        // async isHeaderDisplayed() {
        //     return await header.waitForDisplayed();
        // },
        // async getHeaderText() {
        //     return await header.getText();
        // }
        async isSearchInputDisplayed() {
            await searchInput.waitForDisplayed();
            return await searchInput.isDisplayed();
        }
    };
};