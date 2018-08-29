const path = require("path")
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports ={
    mode: "development",
    entry: "./src/client/init.js",
    output:{
        path: path.resolve("./src/client/dist"),
        filename: "main.js"
    },
    module:{
        rules:[
            {   
                test: /\.vue$/,
                loader: "vue-loader"
            }
        ]
    },
    plugins:[
        new VueLoaderPlugin()
    ]
}
