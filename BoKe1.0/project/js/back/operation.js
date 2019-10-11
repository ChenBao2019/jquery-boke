$(function(){
	//列表模块
	function list(result){		
		$(result).each(function(i,item){
			var {aid,title,simple,uptime}=item;
			$(`<tr>
	            	<td>${aid}</td>
	                <td>${title}</td>
	                <td>${simple}</td>
	                <td>${uptime}</td>
	                <td>
		                <a href="?${aid}" style="color:black">删除</a>
		                <a href="upda.html?aid=${aid}" style="color:black">修改</a>
	                </td>
	            </tr>`).appendTo("#list>table")
		})
	}
	bfun.getList(list);
	//删除模块
	function deletes(result){
		if (result==1) {
			alert("删除成功")
			location.href="http://127.0.0.1:5050/back/operation.html"
		}
	}
	bfun.getDelete(deletes);
	//查询模块
	$("#aid").next().click(function(){
		function callback(result){
			if (result !='0') {
				var {aid,title,simple,uptime}=result[0];
				$(`<table border="1">
                <tr>
	                <th>编号</th>
	                <th>标题</th>
	                <th>简介</th>
	                <th>时间</th>
                </tr>
                <tr>
	                <td>${aid}</td>
	                <td>${title}</td>
	                <td>${simple}</td>
	                <td>${uptime}</td>
                </tr>
                </table>`).appendTo("#selects");
			}else{
				alert('查无此编号');
			}
		}
		bfun.getSelect(callback);
	})
})