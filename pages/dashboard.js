var element = require('../classes/element');

module.exports = async () => {
    var dashboardMenuIcon = await element('#main-content > app-dashboard > ion-header > ion-toolbar > ion-title');
    return {
        dashboardMenuIcon,
        async isDashboardHeaderLoaded() {
            return await dashboardMenuIcon.waitForDisplayed(6000);
        },
        async getUrl() {
            return await browser.getUrl();
        }
    };
};