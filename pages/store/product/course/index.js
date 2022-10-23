Page({
    data: {},
    onLoad: function (options) {

    },
    onTabsChange(event) {
        console.log(`Change tab, tab-panel value is ${event.detail.value}.`);
    },

    onTabsClick(event) {
        console.log(`Click tab, tab-panel value is ${event.detail.value}.`);
    },
});
