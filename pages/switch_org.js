var element = require('../classes/element');

module.exports = async (orgs) => {
    var searchInput = await element('#switch-org--search-input');
    var switchOrgElements = await element('.switch-org--org-element');
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
        },
        async checkFirstElementOfOrgList(orgName) {
            console.log(await switchOrgElements.getText());
            return (await switchOrgElements.getText()).toLowerCase().includes(orgName.toLowerCase());
        },
        async searchFor(searchText) {
            await searchInput.sendInput(searchText);
        }
    };
};