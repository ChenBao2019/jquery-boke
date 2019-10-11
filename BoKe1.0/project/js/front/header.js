$(function(){
    function callback(result){
        $(result).replaceAll("header");
        $(`<link rel="stylesheet" href="/front/header.css">`).appendTo("head");
    }
    fun.getHeader(callback);
})