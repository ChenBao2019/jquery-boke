$(function(){
    function callback(result){
        var p1=result[0];
        var {aid,title,uptime,simple}=p1;
        $("#p1").html(`
            <div class="w-100 p-2 article mt-2">
                <div class="my-1 clearfix">
                    <h5 class="font-weight-bold float-left">标题：</h5>
                    <a href="details.html?${aid}">
                        <span id="title" style="color:black;font-size:18px;font-weight:800">${title}</span>
                    </a>                    
                </div>
                <div class="my-1 clearfix">
                    <h5 class="font-weight-bold float-left">时间：</h5>
                    <div id="c_time">${uptime}</div>
                </div>
                <div class="my-1 clearfix">
                    <h5 class="font-weight-bold float-left">简介：</h5>
                    <div id="jianjie">${simple}</div>
                </div>
            </div>
        `);
        var p2=result[1];
        var {aid,title,uptime,simple}=p2;
        $("#p2").html(`
            <div class="w-100 p-2 article mt-2">
                <div class="my-1 clearfix">
                    <h5 class="font-weight-bold float-left">标题：</h5>
                    <a href="details.html?${aid}">
                        <span id="title" style="color:black;font-size:18px;font-weight:800">${title}</span>
                    </a>                    
                </div>
                <div class="my-1 clearfix">
                    <h5 class="font-weight-bold float-left">时间：</h5>
                    <div id="c_time">${uptime}</div>
                </div>
                <div class="my-1 clearfix">
                    <h5 class="font-weight-bold float-left">简介：</h5>
                    <div id="jianjie">${simple}</div>
                </div>
            </div>
        `);
        var p3=result[2];
        var {aid,title,uptime,simple}=p3;
        $("#p3").html(`
            <div class="w-100 p-2 article mt-2">
                <div class="my-1 clearfix">
                    <h5 class="font-weight-bold float-left">标题：</h5>
                    <a href="details.html?${aid}">
                        <span id="title" style="color:black;font-size:18px;font-weight:800">${title}</span>
                    </a>                    
                </div>
                <div class="my-1 clearfix">
                    <h5 class="font-weight-bold float-left">时间：</h5>
                    <div id="c_time">${uptime}</div>
                </div>
                <div class="my-1 clearfix">
                    <h5 class="font-weight-bold float-left">简介：</h5>
                    <div id="jianjie">${simple}</div>
                </div>
            </div>
        `);
    }
    fun.getIndex(callback);
})