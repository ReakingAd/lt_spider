var webpack = require('webpack');

module.exports = {
    entry:['webpack/hot/dev-server',__dirname + '/app/main.js'],
    output:{
        path:__dirname + '/build',
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                loader:'babel-loader'
            }
        ]
    },
    devServer:{
        contentBase:'./build',
        port:8080,
        historyApiFallback:true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()//热模块替换插件
    ]
}