import sysConfig from '../config/index';
import cryptoJs from 'crypto-js';

let tool = {};

/**
 * localStorage
 * 数据缓存
 */
tool.data = {
    set(key, data, datetime = 0) {
        if (sysConfig.LS_ENCRYPTION === 'AES') {
            data = tool.crypto.AES.encrypt(JSON.stringify(data), sysConfig.LS_ENCRYPTION_key)
        }
        let cacheValue = {
            content: data,
            datetime: parseInt(datetime) === 0 ? 0 : new Date().getTime() + parseInt(datetime) + 1000
        }
        try {
            wx.setStorageSync(key, cacheValue);
            return true;
        } catch (e) {
            return false;
        }
    },
    get(key) {
        try {
            const value = wx.getStorageSync(key);
            if (value) {
                let newTime = new Date().getTime();
                if (newTime > value.datetime && value.datetime !== 0) {
                    wx.removeStorageSync(key);
                    return null;
                }
                if (sysConfig.LS_ENCRYPTION === 'AES') {
                    value.content = JSON.parse(tool.crypto.AES.decrypt(value.content, sysConfig.LS_ENCRYPTION_key))
                }
                return value.content;
            }
            return null;
        } catch (e) {
            return null
        }
    },
    remove(key) {
        try {
            wx.removeStorageSync(key);
            return true;
        } catch (e) {
            return false;
        }
    },
    clear() {
        try {
            wx.clearStorageSync();
            return true;
        } catch (e) {
            return false;
        }
    }
}

/**
 * 加解密
 */
tool.crypto = {
    //MD5加密
    MD5(data){
        return cryptoJs.MD5(data).toString()
    },
    //BASE64加解密
    BASE64: {
        encrypt(data){
            return cryptoJs.enc.Base64.stringify(cryptoJs.enc.Utf8.parse(data))
        },
        decrypt(cipher){
            return cryptoJs.enc.Base64.parse(cipher).toString(cryptoJs.enc.Utf8)
        }
    },
    //AES加解密
    AES: {
        encrypt(data, secretKey, config={}){
            if(secretKey.length % 8 != 0){
                console.warn("[secretKey error]: 秘钥长度需为8的倍数，否则解密将会失败。")
            }
            const result = cryptoJs.AES.encrypt(data, cryptoJs.enc.Utf8.parse(secretKey), {
                iv: cryptoJs.enc.Utf8.parse(config.iv || ""),
                mode: cryptoJs.mode[config.mode || "ECB"],
                padding: cryptoJs.pad[config.padding || "Pkcs7"]
            })
            return result.toString()
        },
        decrypt(cipher, secretKey, config={}){
            const result = cryptoJs.AES.decrypt(cipher, cryptoJs.enc.Utf8.parse(secretKey), {
                iv: cryptoJs.enc.Utf8.parse(config.iv || ""),
                mode: cryptoJs.mode[config.mode || "ECB"],
                padding: cryptoJs.pad[config.padding || "Pkcs7"]
            })
            return cryptoJs.enc.Utf8.stringify(result);
        }
    }
}

/**
 * 跳转
 */
tool.route = {
    switchTab(url, options = {}) {wx.switchTab({url: url, ...options})},
    reLaunch(url, options = {}) {wx.reLaunch({url: url, ...options})},
    redirectTo(url, options = {}) {wx.redirectTo({url: url, ...options})},
    navigateTo(url, options = {}) {wx.navigateTo({url: url, ...options})},
    navigateBack(options = {}) {wx.navigateBack({...options})}
}

/**
 * 弹窗
 */
tool.ui = {
    toast(title, options = {}) {wx.showToast({title: title, ...options})},
    alert(content, title = '提示', options = {}) {
        wx.showModal({
            title: title
            , content: content
            , showCancel: false
            , ...options
        })
    },
    confirm(content, title = '提示', options = {}) {
        wx.showModal({
            title: title
            , content: content
            , ...options
        })
    }
}

module.exports = tool;