const app = getApp();

Component({
    properties: {},
    data: {
        hasUserInfo: false,
        show_authorize: false,
        userInfo: {}
    },
    lifetimes: {
        attached() {
            const token = app.TOOL.data.get('TOKEN');
            if (!token) {
                this.setData({
                    show_authorize: true
                })
            }
        }
    },
    methods: {
        getUserProfile() {
            wx.getUserProfile({
                desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
                success: (res) => {
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true,
                        show_authorize: false
                    })
                    // 登录接口
                    // 缓存token
                    app.TOOL.data.set('TOKEN', res.userInfo.nickName)
                }
            })
        },
        hideAuthorize() {
            this.setData({
                show_authorize: false
            })
        }
    }
});
