//session判断是否登录
if(!sessionStorage.getItem('key')){
    alert('请登录');
    location.href="http://127.0.0.1:5050/back/login.html";
}
//退出登录
function logout(){
    //清空session的值
    sessionStorage.removeItem('key');
    alert('已退出登录');
    location.href="http://127.0.0.1:5050/back/login.html";
}




//将导航栏头部的管理员名称改为登录者名称
//1.将session值中的用户名取出来
var admin_name=((sessionStorage.getItem('key').split(','))[0]);
$("header>.admin>ul>li:first-child>a").html(admin_name);
