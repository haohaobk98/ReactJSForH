var path = require('path');
var webpack = require('webpack');
module.exports= {
    mode: "none",
    entry: [
        "script!jquery/dist/jquery.min.js",
        "script!foundation-sites/dist/js/foundation.min.js",
        "./app/app.js"],
    output: {
        path: path.resolve(__dirname,'public'),
        filename: "bundle.js"
    },
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new wepack.ProvidePlugin({
            '$': 'jquery'
        })
    ],
    module: {
        rules: [
           {
            use: {
                loader: "babel-loader"
            },
            test: /.\js$/,
            exclude: /node_modules/
           }
        ]
    }
}