var fun={
    //请求头部
    getHeader:function(callback){
        $.ajax({
            url:"header.html",
            type:"get",
            success:function(result){
                callback(result);
            }
        })
    },
    //最新发布
    getIndex:function(callback){
        $.ajax({
            url:"http://127.0.0.1:5050/front/list",
            type:"get",
            dataType:"json",
            success:function(result){
               callback(result);
            }
        })
    },
    //详情页
    getDetails:function(callback){
        // 1.获取地址栏中传入的id值
        var id=location.href.split("?")[1]
        // 2.发送ajax
        $.ajax({
            url:"http://127.0.0.1:5050/front/details",
            type:"get",
            data:`id=${id}`,
            dataType:"json",
            success:function(result){
                callback(result);
            }
        })
    }
}