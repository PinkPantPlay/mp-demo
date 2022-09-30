const DEFAULT_CONFIG = {

    API_URL: '/api',

    // 请求超时
    TIMEOUT: 10000,

    // TokenName
    TOKEN_NAME: 'Authorization',

    // Token前缀
    TOKEN_PREFIX: "Bearer ",

    // 追加其他头
    HEADERS: {},

    //是否加密localStorage, 为空不加密，可填写AES(模式ECB,移位Pkcs7)加密
    LS_ENCRYPTION: 'AES',

    //localStorageAES加密秘钥，位数建议填写8的倍数
    LS_ENCRYPTION_key: '2XNN4K8LC0ELVWN4',
};

module.exports = DEFAULT_CONFIG;