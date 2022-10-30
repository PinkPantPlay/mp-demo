const app = getApp();
Component({
    properties: {
        bgColor: {type: String, value: '#fff'},
        type: {type: String, value: 'title'},
        titleIcon: {type: String, value: null},
        title: {type: String, value: ''}
    },
    data: {
        s: app.system.statusBarHeight, //状态栏高度
        n: (app.menu.top - app.system.statusBarHeight) * 2 + app.menu.height, //导航栏高度
        h: app.menu.height, //胶囊高度
        m: app.menu.top - app.system.statusBarHeight,
        sw: app.system.windowWidth,
        mw: app.menu.width,
        mr: app.menu.right
    },
    methods: {
    }
});
