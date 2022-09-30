import sysConfig from '../config/index';
import tool from "./tool";

const request = (options = {}) => {
    options.header = Object.assign(sysConfig.HEADERS, options.header || {});
    const token = tool.data.get('TOKEN');
    if (token) {
        options.header[sysConfig.TOKEN_NAME] = sysConfig.TOKEN_PREFIX + token;
    }
    return new Promise((resolve, reject) => {
        wx.request({
            ...options,
            success: result => {
                if (result.statusCode !== 200) {
                    return reject();
                } else {
                    return resolve(result.data);
                }
            },
            fail: err => {
                console.warn(err);
                tool.ui.alert('网络请求错误');
            },
            complete: () => {
                
            }
        })
    })
}

const http = {
    get: function (url, data = {}, config = {}) {
        return request({
            url: url,
            data: data,
            method: 'GET',
            ...config
        })
    },
    post: function (url, data = {}, config = {}) {
        return request({
            url: url,
            data: data,
            method: 'POST',
            ...config
        })
    },
    options: function (url, data = {}, config = {}) {
        return request({
            url: url,
            data: data,
            method: 'OPTIONS',
            ...config
        })
    },
    head: function (url, data = {}, config = {}) {
        return request({
            url: url,
            data: data,
            method: 'HEAD',
            ...config
        })
    },
    put: function (url, data = {}, config = {}) {
        return request({
            url: url,
            data: data,
            method: 'PUT',
            ...config
        })
    },
    delete: function (url, data = {}, config = {}) {
        return request({
            url: url,
            data: data,
            method: 'DELETE',
            ...config
        })
    },
    trace: function (url, data = {}, config = {}) {
        return request({
            url: url,
            data: data,
            method: 'TRACE',
            ...config
        })
    },
    connect: function (url, data = {}, config = {}) {
        return request({
            url: url,
            data: data,
            method: 'CONNECT',
            ...config
        })
    }
};

module.exports = http;