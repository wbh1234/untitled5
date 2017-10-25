/**
 * Created by ASUS on 2017/10/25.
 */
const path = require('path');
module.exports={
    entry:{
        entry: './src/index.js'
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[build].js'
    } ,

    module:{},
    plugins:[],
    devServer:{
        contentBase: path.resolve(__dirname, 'dist'),
        host: 'localhost',
        compress: true,
        port:8081
    }

}
