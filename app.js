import API from './api/index';
import CONFIG from './config/index';
import TOOL from './utils/tool';

App({
    API: API,
    CONFIG: CONFIG,
    TOOL: TOOL,
    async onShow() {
        // const res = await this.api.user.info.get()
        // console.log(res);
    }
});
