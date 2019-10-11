set names utf8;
drop database if exists boke;
create database boke charset=utf8;
use boke;
/*管理员用户表*/
create table super_user(
	sid smallint not null primary key,  /*用户编号*/
	sname char(20) not null,            /*用户名*/
	spwd char(20) not null              /*用户密码*/
);
/*插入超级管理员用户*/
insert into super_user values(1,'BoKe','123456');
/*文章表*/
create table bk_article(
	aid int not null primary key AUTO_INCREMENT, /*文章编号*/
	title char(50) not null,                     /*文章标题*/
	simple varchar(300) not null,                /*文章简介*/
	uptime char(20),							 /*更新时间*/
	cont text	                                 /*内容*/
);
/*我的足迹表*/
create table bk_footprint(
	fid int not null primary key,
	title char(50) not null,/*足迹标题*/
	img char(20) not null,/*足迹图片*/
	ftime char(20) not null,/*提交时间*/
	cont varchar(200) not null/*内容*/
);
insert into bk_footprint values(1,"河南省南阳市桐柏县水帘洞","tb_sld.jpg","2019-10-9 14:20:11","2010年我与家人一起来到了水帘洞游玩。桐柏山水帘洞它位于河南省南阳市桐柏县城西5公里处，是国家级风景名胜区桐柏山淮源风景名胜区著名景点之一。水帘洞距地高约20余米，洞内有泥塑猕猴一尊，猴身上有泉水流出，洒在石钵中叮当有声。");
insert into bk_footprint values(2,"河南省南阳市桐柏县佛教学院","tb_fjxy.jpg","2019-10-9 14:20:11","2013年我与家人一起来到了佛教学院游玩。中国佛教发源地河南省，首所现代僧伽教育佛教高等院校成立。学院位于河南省桐柏县龙潭河景区。 2005年经国家宗教局批准开办，学制为全日制四年本科，面向佛教界和社会招生。");
insert into bk_footprint values(3,"河南省新密市伏羲山大峡谷","xm_fxs.jpg","2019-10-9 14:20:11","伏羲大峡谷位于河南省郑州新密市西北20公里的伏羲山旅游区内，是国家AAAA级景区，是一条以典型红岩嶂谷群地质地貌景观为主的峡谷景区，同时也是新密市首家AAAA级景区。");
insert into bk_footprint values(4,"美食之家电商网站","eating.png","2019-10-9 14:20:11","2018年，我的母校郑州信息科技职业学院举行了技术大赛。我们小组五个人经过两周的不懈奋斗，完成了网站2.0版本。在比赛中脱颖而出，取得了第二名的。");
/*学无止境表*/
create table bk_learn(
	lid int not null primary key,
	title char(50) not null,/*标题*/
	small_title char(30) not null,/*次标题*/
	img char(20) not null,/*图片*/
	ftime char(20),/*提交时间*/
	cont varchar(200) not null/*内容*/
);
insert into bk_learn values(1,"前端大全微信公众号","微信号：FrontDev","wei_qian.jpg","2019-10-9 14:20:11","简介：分享 Web 前端相关的技术文章、工具资源、精选课程、热点资讯");
insert into bk_learn values(2,"编程大拿","推荐关注人物：阮一峰","ruan.jpg","2019-10-9 14:20:11","主要作品：《ECMAScript 6入门》等");
insert into bk_learn values(3,"逻辑思维大拿","推荐关注人物：罗振宇","luo.jpg","2019-10-9 14:20:11","主要作品：得到App创始人,《罗辑思维》主讲人等");
insert into bk_learn values(4,"编程便捷托管工具","工具名称：github","git.png","2019-10-9 14:20:11","推荐缘由：是一个面向开源及私有软件项目的托管平台");