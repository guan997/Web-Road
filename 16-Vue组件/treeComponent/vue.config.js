module.exports = {
    publicPath:"./",
    devServer:{
        port:8080,
        proxy:{
            '/getTreeList':{
                target:"http://localhost:3333",
            }
        }
    }
}
