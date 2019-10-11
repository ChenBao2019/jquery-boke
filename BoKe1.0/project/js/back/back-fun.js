var bfun={
	//登录
	getLogin:function(callback){
        //获取提交的数据
        var $sname=$("#sname").val().trim();
        var $spwd=$("#spwd").val().trim();
        if ($sname!=="" || $spwd!=="") {
            $.ajax({
                url:"http://127.0.0.1:5050/back/login",
                type:"post",
                data:`sname=${$sname}&spwd=${$spwd}`,
                success:function(result){
                    callback(result);
                    
                }
            })
        }else{
            alert("账号或密码为空");
        }		
	}, 
	//引入头部
    getHeader:function(callback){
        $.ajax({
            url:"header.html",
            type:"get",
            success:function(result){
                callback(result);
            }
        })
    },
    //引入侧栏
    getArticle:function(callback){
    	$.ajax({
    		url:"article.html",
    		type:"get",
    		success:function(result){
    			callback(result)
    		}
    	})
    },
    // 博文列表
    getList:function(a){
    	$.ajax({
    		url:"http://127.0.0.1:5050/back/list",
    		type:"get",
            dataType:"json",
    		success:function(result){
    			a(result);
    		}
    	})
    },
    //添加博文
    getAdd:function(callback){
        //获取提交的数据
        $title=$("#title").val().trim();
        $simple=$("#simple").val().trim();
        $content=$("#cont").val().trim();
        if ($title!=="" && $simple!=="" && $content!==""){
            $.ajax({
                url:"http://127.0.0.1:5050/back/addcont",
                type:"post",
                data:`title=${$title}&simple=${$simple}&content=${$content}`,
                dataType:"json",
                success:function(result){
                    callback(result);
                }
            })
        }else{
            alert('提交的内容不能有空的')
        }
    	
    },
    //查询博文
    getSelect:function(callback){
        //获取提交的数据
        var $aid=$("#aid").val().trim();
        if ($aid!=="") {
            $.ajax({
                url:"http://127.0.0.1:5050/back/select",
                type:"get",
                data:`aid=${$aid}`,
                dataType:"json",
                success:function(result){
                    callback(result);
                }
            })
        }
    },
    //删除博文
    getDelete:function(callback){
        //获取要删除的id
        var $aid=window.location.href.split("?")[1];
        $.ajax({
            url:"http://127.0.0.1:5050/back/delete",
            type:"get",
            data:`aid=${$aid}`,
            dataType:"json",
            success:function(result){
              callback(result);
            }
        })
    },
    //修改博文(两步，查询修改)
    //查询
    updaSelect:function(callback){
        //获取要修改的id
        var $aid=window.location.href.split("=")[1];
        $.ajax({
            url:"http://127.0.0.1:5050/back/update/select",
            type:"get",
            data:`aid=${$aid}`,
            dataType:"json",
            success:function(result){
              callback(result);
            }
        })
    },
    //载修改
    updaUpdate:function(callback){
        //获取要修改的值
        var $aid=$("#up_aid").val();
        var $title=$("#up_title").val().trim();
        var $simple=$("#up_simple").val().trim();
        var $cont=$("#up_cont").val().trim();
        if ($title!=="" || $simple!=="" || $content!==""){
            $.ajax({
                url:"http://127.0.0.1:5050/back/update/updates",
                type:"get",
                data:`aid=${$aid}&title=${$title}&simple=${$simple}&cont=${$cont}`,
                dataType:"json",
                success:function(result){
                  callback(result);
                }
            })
        }else{
            alert("信息格式错误")
        }
    },
    //修改密码（两步）
    //1.先查询
    selPass:function(callback){
        $.ajax({
            url:"http://127.0.0.1:5050/back/update/selpass",
            type:"post",
            dataType:"json",
            success:function(result){
              callback(result);
            }
        })
    },
    //2.再修改
    updPass:function(callback){
        //获取要修改的数据
        var $sname=$("#sname").val();
        var $spwd=$("#spwd").val();
        //判断非空
        if ($sname !=="" && $spwd!=="") {
            $.ajax({
                url:"http://127.0.0.1:5050/back/update/updpass",
                type:"post",
                data:`sname=${$sname}&&spwd=${$spwd}`,
                dataType:"json",
                success:function(result){
                  callback(result);
                }
            })
        }
    }
}