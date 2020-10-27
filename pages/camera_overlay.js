var element = require('../classes/element');

module.exports = async () => {
    // TODO: Change to proper stuff when camera overlay page is being tested
    var cameraOverlayHeader = await element('#main-content > app-camera-overlay > ion-header > ion-toolbar > ion-title');
    return {
        cameraOverlayHeader,
        async isCameraOverlayHeaderDisplayed() {
            return await cameraOverlayHeader.waitForDisplayed();
        },
        async getUrl() {
            return await browser.getUrl();
        }
    };
};