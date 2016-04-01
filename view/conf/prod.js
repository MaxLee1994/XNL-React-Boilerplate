/**
 * @fileOverview 生产环境配置
 * @author Max
 **/

module.exports = {
    PORT: 9999,
    APP: '',
    DIST_PATH: 'dist',
    JS_LIB_PATH: '/dist/lib/',
    JS_STATIC_PATH: '/dist/js/',
    IMAGE_STATIC_PATH: 'http://onetalent2016.oss-cn-shanghai.aliyuncs.com/web/',
    STYLE_STATIC_PATH: '/dist/style/',
    RETINA_DEFAULT_RATIO: '',
    STUB_SERVER: {
        AJAX_HOSTNAME: 'localhost',
        AJAX_PORT: 8888,
        HTTP_HOSTNAME: 'localhost',
        HTTP_PORT: 8080,
        FILE_DIR: 'stub'
    },
    API_SERVER: {
        AJAX_HOSTNAME: 'localhost',
        AJAX_PORT: 80,
        HTTP_HOSTNAME: 'localhost',
        HTTP_PORT: 80
    },
    IMAGE_UPLOAD: {
        ADD_PATH: '/image/upload',
        DELETE_PATH: '/image/delete',
        MAX_SIZE: 2097152
    },
    ALIYUN: {
        ACCESS_KEY_ID: 'troDIDnP6lguSWDV',
        ACCESS_KEY_SECRET: 'YoCsBasrrdmmpZzoAroBazsEkWqrg6',
        OSS_ENDPOINT: 'http://oss-cn-shanghai.aliyuncs.com',
        BUCKET: 'onetalent2016',
        DIRECTORY: 'template',
        APP_IMG_DIRECTORY: 'web'
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
    CROSSDOMAIN: ''
};
