$(function(){
	//修改密码(两步)
	//1.先查询
	function sel_pass(result){
		if (result.length>0) {
			var {sname,spwd}=result[0];
			$("#sname").val(sname);
			$("#spwd").val(spwd);
		}
	}
	bfun.selPass(sel_pass);
	//2.再修改
	$("#uppass").click(function(){
			function upd_pass(result){
			if (result==1) {
				alert('修改成功')
				location.href="http://127.0.0.1:5050/back/login.html";
			}else{
				alert('修改失败')
			}
		}
		bfun.updPass(upd_pass);
	})	
})