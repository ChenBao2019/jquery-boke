//后台路由器模块

//连接模块
//连接express模块
const express=require('express');
//连接数据库连接池模块
const pool=require('../pool.js');
//创建路由对象
var router=express.Router();

//登录
router.post('/login',function(req,res){
	//获取提交的数据
	var $sname=req.body.sname;
	var $spwd=req.body.spwd;
	//执行sql语句
	pool.query('select * from super_user where sname=? and spwd=?',[$sname,$spwd],
		function(err,result){
			if(err) throw err;
			if (result.length > 0) {
				res.send('1');
			}else{
				res.send('0');
			}
		}
	);
});

//添加
router.post('/addcont',function(req,res){
	//获取提交时间
	var time=new Date();
	var $uptime=time.toLocaleString();
	var $title=req.body.title;
	var $simple=req.body.simple;
	var $cont=req.body.content;
	pool.query('insert into  bk_article values(?,?,?,?,?)',
		[null,$title,$simple,$uptime,$cont],function(err,result){
			if(err) throw err;
			if (result.affectedRows > 0) {
				res.send('1');
			}else{
				res.send('0');
			}
		});
});

//列表
router.get('/list',function(req,res){
	pool.query('select * from bk_article',function(err,result){
		if(err) throw err;
		if(result.length > 0){
			res.send(result);
			return;
		}
	});
});

//根据id查询
router.get('/select',function(req,res){
	var $aid=req.query.aid;
	pool.query('select * from bk_article where aid=?',[$aid],
	function(err,result){
		if(err) throw err;
		if(result.length >0){
			res.send(result);
		}else{
			res.send('0');
		}
	});
});

//删除
router.get('/delete',function(req,res){
	var $aid=req.query.aid;
	pool.query('delete from bk_article where aid=?',[$aid],
		function(err,result){
			if(err) throw err;
			if (result.affectedRows > 0) {
				res.send('1')
			}else{
				res.send('0');
			}
		});
});

//修改
//1.查询
router.get('/update/select',function(req,res){
	var $aid=req.query.aid;
	pool.query('select * from bk_article where aid=?',[$aid],
		function(err,result){
			if(err) throw err;
			if (result.length >0) {
				res.send(result);
			}else{
				res.send('0');
			}
		});
});
//2.修改
router.get('/update/updates',function(req,res){
	//创建提交事件
	var time=new Date();
	var $uptime=time.toLocaleString();
	//获取提交的数据
	var $aid=req.query.aid;
	var $title=req.query.title;
	var $simple=req.query.simple;
	var $cont=req.query.cont;
	//执行sql语句
	pool.query('update bk_article set title=?,simple=?,uptime=?,cont=? where aid=?',[$title,$simple,$uptime,$cont,$aid],
		function(err,result){
			console.log(result);
			if(err) throw err;
			if (result.affectedRows>0) {
				res.send('1');
			}else{
				res.send('0');
			}
		});
});


//修改密码
//先查询
router.post('/update/selpass',function(req,res){
	pool.query('select * from super_user',function(err,result){
		if(err) throw err;
		if(result.length>0){
			res.send(result);
		}
	});
});
//再修改
router.post('/update/updpass',function(req,res){
	//获取提交的数据
	var $sname=req.body.sname;
	var $spwd=req.body.spwd;
	//执行sql语句
	pool.query('update super_user set spwd=? where sname=?',[$spwd,$sname],
	function(err,result){
		if(err) throw err;
		if(result.affectedRows>0){
			res.send('1');
		}else{
			res.send('0');
		}
	});
});

//导出路由对象
module.exports=router;


