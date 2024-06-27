//导入express
const express = require('express')
// 导入compression压缩插件包
const compression = require('compression');
//创建web服务器
const app = express()
const path = require('path')

const os = require('os');
///获取本机ip///
const getIPAdress = () => {
    const interfaces = os.networkInterfaces();
    for (let devName in interfaces) {
        let iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            let alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}
 
// 启动compression压缩插件中间件
app.use(compression())
//在这里调用express.static()方法， 快速对外提供静态资源
//如果要对外提供多个静态资源目录，重复写更换文件目录即可
app.use(express.static(path.join(__dirname, '../aichisuan-admin/dist')))

app.get(/.*/,function(req,res){ 
  res.sendFile(__dirname,'../aichisuan-admin/dist/index.html')})
 
 
//启动web服务器
app.listen(5157,(req,res)=>{
    console.log(`express server running at http://${getIPAdress()}:5157`)
})