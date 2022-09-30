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
                label: '首页',
                path: '/pages/index/index'
            },
            {
                icon: {
                    normal: '/assets/static/images/icon/user.png',
                    active: '/assets/static/images/icon/user-filled.png'
                },
                label: '我的',
                path: '/pages/user/index/index'
            }
        ],
        active: 0
    },
    methods: {
        _setActive(event) {
            const index = event.currentTarget.dataset.index
            // app.TOOL.route.switchTab(this.data.items[index].path)
            this.setData({
                active: parseInt(index)
            })
        }
    },
    lifetimes: {
        attached() {
            console.log(111)
        }
    }
});
