var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
var dirPath = path.resolve(__dirname, '../views');

var appModulesArr = [];

//解析页面模块
var list = fs.readdirSync(dirPath)
list.forEach(function (file) {
    var fileFullPath = dirPath + '/' + file
    var stat = fs.statSync(fileFullPath)
    if (stat && stat.isDirectory()) {
        appModulesArr.push(file)
    }
});

//模块静态资源、映射暴露
appModulesArr.forEach(function (moduleName) {
    var staticPath = '/static';
    var staticSource = dirPath + '/' + moduleName + '/www/static';
    var routerUrl = '/' + moduleName;
    var routerSource = dirPath + '/' + moduleName + '/www/index.html';

    app.use(staticPath, express.static(staticSource));

    //页面响应
    app.get(routerUrl, function (req, res, next) {
        res.sendFile(path.join(routerSource));
    })
});


//设置监控
if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
    console.log('Relate Modules : ' + appModulesArr)
}





