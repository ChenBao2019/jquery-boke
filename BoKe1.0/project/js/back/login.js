$(function(){
	// 用户名失焦判断
	$("#sname").blur(function(){
		if ($(this).val()=="") {
			$("#msg1").html(`请输入用户名`)
		}else{
			$("#islogin").val(`true`)
		}
	})
	//密码失焦判断
	$("#spwd").blur(function(){
		if ($(this).val()=="") {
			$("#msg2").html(`请输入密码`)
		}else{
			$("#islogin").val(`true`)
		}
	})
	//登录判断
	$("#islogin").next().click(function(){
		function callback(result){
			if (result==1) {
				alert('登录成功');
				//登录成功，给页面设置一个session值
		        //session值为：用户名+密码+登录时间
		        var $data=new Date();
		        var $sess=$("#sname").val()+","+$data.toLocaleString()+","+$("#spwd").val();
		        sessionStorage.setItem('key',$sess);
		        //登录成功，跳转到首页
		        location.href="http://127.0.0.1:5050/back/index.html";
			}else{
				alert("账号密码错误")
			}
			
		}
		bfun.getLogin(callback);
	})	
})