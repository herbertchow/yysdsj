var isAppInside=/micromessenger/i.test(navigator.userAgent.toLowerCase())||/yixin/i.test(navigator.userAgent.toLowerCase());
var isIos= /iphone os/i.test(navigator.userAgent.toLowerCase())||/ipad/i.test(navigator.userAgent.toLowerCase());
var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());

nie.define("Common",function(){

    var _alert=function(msg){//公用alert方法
        if($(".alertbox").length>0){
            $(".alertbox").remove();
        }
        $(document.body).append('<div class="alertbox" id="alertbox"><div class="alert_text"><a href="javascript:void(0)" class="btn_close"><em></em><i></i></a>'+msg+'</div></div>');
        var st= setTimeout(function(){
            $("#alertbox").addClass("show");
        },50)

        $("#alertbox .btn_close").unbind().bind("click",function(e){
            $("#alertbox").addClass("remove");
            var st= setTimeout(function(){
                $("#alertbox").remove();
            },600)
        })
    }
    var PopWindow=nie.require("PopWindow");

    //如果有需要暴露接口给外部使用，return就可以了
    return {
        alert:_alert,
        popWindow:function(param){
            return PopWindow.create(param);
        }
    }
});