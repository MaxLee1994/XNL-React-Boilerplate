/**
 * @fileOverview 生产环境配置
 * @author Max
 **/

module.exports = {
    PORT: 8889,
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
    }
};
