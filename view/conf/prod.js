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
    IMAGE_STATIC_PATH: '/dist/images/',
    STUB_SERVER: {
        HOSTNAME: 'localhost',
        PORT: 8888,
        FILE_DIR: 'stub'
    },
    API_SERVER: {
        HOSTNAME: 'localhost',
        PORT: 80
    },
    IMAGE_UPLOAD: {
        PATH: '/image/upload',
        MAX_SIZE: 2097152
    },
    ALIYUN: {
        ACCESS_KEY_ID: 'troDIDnP6lguSWDV',
        ACCESS_KEY_SECRET: 'YoCsBasrrdmmpZzoAroBazsEkWqrg6',
        OSS_ENDPOINT: 'http://oss-cn-qingdao-internal.aliyuncs.com',
        BUCKET: 'xnl-project',
        DIRECTORY: 'template'
    },
    CROSSDOMAIN: ''
};
