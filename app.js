import API from './api/index';
import CONFIG from './config/index';
import TOOL from './utils/tool';

App({
    API: API,
    CONFIG: CONFIG,
    TOOL: TOOL,
    globalData: {
        nvaHeight: 0
    },
    async onShow() {
        // const res = await this.api.user.info.get()
        // console.log(res);
    },
    onLaunch(options) {
        //获取系统信息
        wx.getSystemInfo({
            success: res => {
                this.system = res
            }
        })
        //获取胶囊信息
        this.menu = wx.getMenuButtonBoundingClientRect()
        console.log('系统信息', this.system)
        console.log('胶囊信息', this.menu)
    }
});
