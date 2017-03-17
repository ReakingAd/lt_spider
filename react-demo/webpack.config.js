var webpack = require('webpack');

module.exports = {
    devtool:'eval-source-map',
    entry:['webpack/hot/dev-server',__dirname + '/app/main.jsx'],
    output:{
        path:__dirname + '/build',
        filename:'bundle.js'
    },
    watch:true,
    module:{
        loaders:[
            {
                test:/\.jsx?$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        contentBase:'./build',
        // colors:true,
        historyApiFallback:true,
        inline:true,
        port:8080,
        // process:true
    }
}