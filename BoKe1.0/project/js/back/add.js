$(function(){
	//标题
	$("#title").blur(function(){
		if ($(this).val()=="") {
			$("#tit").html(`标题不能为空`)
		}else if ($(this).val().length>50) {
			$("#tit").html(`标题最大长度为50位`)
		}else{
			$("#isadd").val(`true`)
		}
	})
	//简介
	$("#simple").blur(function(){
		if ($(this).val()=="") {
			$("#sim").html(`简介不能为空`)
		}else if ($(this).val().length>300) {
			$("#sim").html(`简介最大长度为300位`)
		}else{
			$("#isadd").val(`true`)
		}
	})
	//具体内容
	$("#cont").blur(function(){
		if ($(this).val()=="") {
			$("#con").html(`内容不能为空`)
		}else{
			$("#isadd").val(`true`)
		}
	})
	//添加博文
	$("#add").click(function(){
		function callback(result){
			if (result==1) {
				alert('提交成功');
            	location.href="http://127.0.0.1:5050/back/operation.html";
			}else{
				alert("错误")
			}			
		}
		bfun.getAdd(callback);
	})
})