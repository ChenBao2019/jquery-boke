$(function(){
    function callback(result){
        $(result).replaceAll("header");
        $(`<script src="/session.js"></script>`).appendTo("body");
    }
    bfun.getHeader(callback);
})