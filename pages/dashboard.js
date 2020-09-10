var element = require('../classes/element');

module.exports = async () => {
    var dashboardMenuIcon = await element('#dashboard-menu-icon');
    return {
        dashboardMenuIcon,
        async isDashboardMenuIconDisplayed() {
            return await dashboardMenuIcon.waitForDisplayed();
        },
        async getUrl() {
            return await browser.getUrl();
        }
    };
};