const app = getApp();

Component({
    properties: {},
    data: {
        items: [
            {
                icon: {
                    normal: '/assets/static/images/icon/home.png',
                    active: '/assets/static/images/icon/home-filled.png'
                },
                label: '้ฆ้กต',
                path: '/pages/index/index'
            },
            {
                icon: {
                    normal: '/assets/static/images/icon/user.png',
                    active: '/assets/static/images/icon/user-filled.png'
                },
                label: 'ๆ็',
                path: '/pages/user/index/index'
            }
        ],
        active: 0
    },
    methods: {
        _setActive(event) {
            const index = event.currentTarget.dataset.index
            // app.TOOL.data.set('TAB_BAR_INDEX', index);
            if (index > 0) {
                app.TOOL.route.navigateTo(this.data.items[index].path)
            }
        }
    }
});
