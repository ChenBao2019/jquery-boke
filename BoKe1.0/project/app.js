//服务器

//连接模块
//连接express模块
const express=require('express');
//连接body-parser模块
const bodyParser=require('body-parser');
//连接前台路由器模块
const frontRouter=require('./routes/front.js');
//连接后台路由器模块
const backRouter=require('./routes/back.js');
const cors=require("cors");
//创建服务器
var app=express();
//设置端口号
app.listen(5050);
app.use(cors({
  origin:["http://localhost:8080","http://127.0.0.1:5500"]//不能用*
}));//从此所有响应，自动带Access-Control-Allow-Origin:http://127.0.0.1:5500
//万一客户端浏览器地址发生变化，只改这里origin一处即可！
//设置post接收数据的方式
//设置post接收数据的方式
app.use(bodyParser.urlencoded({
	extended:false
}));
//托管资源
app.use(express.static('./pro'));
app.use(express.static('./css'));
app.use(express.static('./js'));
app.use(express.static('./img'));
//挂载路由
app.use('/back',backRouter);
app.use('/front',frontRouter);