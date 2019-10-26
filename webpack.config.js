const path = require('path')
module.exports = {
    entry: {
        app: './src/index.js'
    },
    //для дублювання назви вхідних файлів вказується в []
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './public'),
        publicPath: '/public'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            }
        ]
    },

    //для виводу помилок
    devServer: {
        overlay: true
    }
}