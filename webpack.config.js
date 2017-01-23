var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = [
    {
        name: 'client',
        entry: [
            'babel-polyfill',
            './src/client/app.js'
        ],
        output: {
            path: __dirname,
            publicPath: '/',
            filename: 'bundle.js'
        },
        externals: {
            'cheerio': 'window',
            'react/lib/ExecutionEnvironment': true,
            'react/lib/ReactContext': true,
        },
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                }
            ]
        },
        resolve: {
            root: [path.resolve('./src/client')],
            extensions: ['', '.js', '.jsx']
        },
        devServer: {
            historyApiFallback: true,
            contentBase: './',
            hot: true,
            color: true
        }
    },
    {
        name: 'server',
        entry: [
            'babel-polyfill',
            './src/server/app.js'
        ],
        output: {
            path: __dirname,
            publicPath: '/',
            filename: 'server.bundle.js'
        },
        externals: nodeModules,
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                }
            ]
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        }
    }
];
