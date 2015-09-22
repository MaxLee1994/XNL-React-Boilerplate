var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

module.exports = {
    entry: {
        entry: './src/framework/bootstrap/entry.babel'
    },
    output: {
        path: path.join(__dirname, 'dist', 'js/page'),
        filename: '[name].js'
    },
    externals: {
        '$': '$',
        'react': 'React',
        'immutable': 'Immutable'
    },
    module: {
        loaders: [
            {
                test: /\.less$/,
                loader: 'to-string!css!postcss-loader!less!less-import-loader'
            },
            {
                test: /\.babel$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel?optional[]=runtime!server-less-loader'
            }
        ]
    },
    postcss: function() {
        return [autoprefixer, cssnano];
    },
    serverLessLoader: {
        loader: '_importLess'
    },
    lessImportLoader: {
        base: process.cwd() + '/src/framework/style/base'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({ // prod
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            __WEBPACK_DEV__: false
        })
    ],
    resolve: {
        alias: {
        },
        extensions: ['', '.babel', '.js']
    }
};
