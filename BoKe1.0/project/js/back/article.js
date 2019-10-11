$(function(){
    function callback(result){
        $(result).replaceAll("article");
    }
    bfun.getArticle(callback);
})