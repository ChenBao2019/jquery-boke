$(function(){
	//先查询
	function upsel(result){
		if (result.length>0) {
			var {aid,title,simple,cont}=result[0];
			$("#up_aid").val(aid);
			$("#up_title").val(title);
			$("#up_simple").val(simple);
			$("#up_cont").val(cont);
		}else{
			alert("查询失败")
		}
	}
	bfun.updaSelect(upsel);
	//标题
	$("#up_title").blur(function(){
		if ($(this).val()=="") {
			$("#up_tit").html(`标题不能为空`)
		}else if ($(this).val().length>50) {
			$("#up_tit").html(`标题最大长度为50位`)
		}else{
			$("#isupd").val(`true`)
		}
	})
	//简介
	$("#up_simple").blur(function(){
		if ($(this).val()=="") {
			$("#up_sim").html(`简介不能为空`)
		}else if ($(this).val().length>300) {
			$("#up_sim").html(`简介最大长度为300位`)
		}else{
			$("#isupd").val(`true`)
		}
	})
	//具体内容
	$("#up_cont").blur(function(){
		if ($(this).val()=="") {
			$("#up_con").html(`内容不能为空`)
		}else{
			$("#isupd").val(`true`)
		}
	})
	//再修改
	$("#updates").click(function(){
		function upup(result){
			console.log(result)
			if (result==1) {
				alert("修改成功");
				location.href="http://127.0.0.1:5050/back/operation.html"
			}else{
				alert('修改失败')
			}
		}
		bfun.updaUpdate(upup);
	})	
})