// function mesg(){
//     //1.查找要修改的元素
//     var btn=document.getElementById("msg");
//     //2.获取要修改的内容
//     var text=btn.innerHTML.slice(2);
//     //3.修改内容
//     text=parseInt(text)+1;
//     //4.重新赋值
//     btn.innerHTML=btn.innerHTML.slice(0,2)+text;
// }
$(function(){
    //详情页内容
    function callback(result){
        var req=result;
        var {title,uptime,cont} = result[0];
        $("#p1 span")[0].innerHTML=title;
        $("#p2 span")[0].innerHTML=title;
        $("#p3")[0].innerHTML=$("#p3")[0].innerHTML.slice(0,5)+uptime;
        $("#p4")[0].innerHTML=cont;
    }
    fun.getDetails(callback);
    //点赞
    $("#fot").children().last().click(function(){
        var text=$("#giveCount")[0].innerHTML.slice(3);
        text=parseInt(text)+1;
        $("#giveCount")[0].innerHTML=$("#giveCount")[0].innerHTML.slice(0,3)+text;
    })
})