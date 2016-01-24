/**
 * @fileOverview 开发环境配置
 * @author Max
 **/

module.exports = {
    PORT: 80,
    APP: '',
    DIST_PATH: 'dist',
    JS_LIB_PATH: '/dist/lib/',
    JS_STATIC_PATH: '/dist/js/',
    IMAGE_STATIC_PATH: '/dist/images/',
    STYLE_STATIC_PATH: '/dist/style/',
    STUB_SERVER: {
        AJAX_HOSTNAME: '127.0.0.1',
        AJAX_PORT: 80,
        HTTP_HOSTNAME: 'localhost',
        HTTP_PORT: 8080,
        FILE_DIR: 'stub'
    },
    API_SERVER: {
        AJAX_HOSTNAME: 'localhost',
        AJAX_PORT: 8080,
        HTTP_HOSTNAME: 'localhost',
        HTTP_PORT: 8080
    },
    IMAGE_UPLOAD: {
        ADD_PATH: '/image/upload',
        DELETE_PATH: '/image/delete',
        MAX_SIZE: 2097152
    },
    ALIYUN: {
        ACCESS_KEY_ID: 'troDIDnP6lguSWDV',
        ACCESS_KEY_SECRET: 'YoCsBasrrdmmpZzoAroBazsEkWqrg6',
        OSS_ENDPOINT: 'http://oss-cn-qingdao.aliyuncs.com',
        BUCKET: 'xnl-project',
        DIRECTORY: 'template'
    },
    WECHAT: {
        SERVER: 'http://template.com:9999',
        AUTH: 'https://open.weixin.qq.com/connect/oauth2/authorize',
        GET_ACCESS_TOKEN: 'https://api.weixin.qq.com/sns/oauth2/access_token',
        GET_GLOBAL_ACCESS_TOKEN: 'https://api.weixin.qq.com/cgi-bin/token',
        GET_JS_API_TICKET: 'https://api.weixin.qq.com/cgi-bin/ticket/getticket',
        APP_ID: '',
        APP_SECRET: ''
    },
    CROSSDOMAIN: '*'
};
