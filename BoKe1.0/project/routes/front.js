//前台路由器模块

//连接模块
//连接express模块
const express=require('express');
//连接数据库连接池模块
const pool=require('../pool.js');
//创建路由对象
var router=express.Router();

//最新发布列表路由
router.get('/list',function(req,res){
	//执行sql语句
	pool.query('select * from bk_article order by aid desc limit 3',function(err,result){
		if(err) throw err;
		if (result.length >0) {
			res.send(result);
		}
	});
});

//博文详情页
router.get('/details',function(req,res){
	// 1.获取要查看的博文的id
	var $id=req.query.id;
	// 2.执行sql语句
	var sql="select * from bk_article where aid=?";
	pool.query(sql,[$id],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}
	})
})

//导出路由对象
module.exports=router;
