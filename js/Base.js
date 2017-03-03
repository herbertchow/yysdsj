
var img_list = ["../img/preload/2016.png","../img/preload/20161.png","../img/preload/20162.png","../img/preload/20163.png","../img/preload/20164.png","../img/preload/20165.png","../img/preload/20166.png","../img/preload/20167.png","../img/preload/20168.png","../img/preload/arrow.png","../img/preload/arrowRight.png","../img/preload/bg1.jpg","../img/preload/musicC.png","../img/preload/musicO.png","../img/preload/p0/bg0.jpg","../img/preload/p0/p02016.png","../img/preload/p0/p0role1.png","../img/preload/p0/p0role2.png","../img/preload/p0/p0role3.png","../img/preload/p0/p0role4.png","../img/preload/p0/p0text1.png","../img/preload/p0/p0yun1.png","../img/preload/p0/p0yun2.png","../img/preload/p0/p0yun3.png","../img/preload/p0/p0yys.png","../img/preload/p1/p1num.png","../img/preload/p1/p1role.png","../img/preload/p1/p1shan.png","../img/preload/p1/p1yun1.png","../img/preload/p1/p1yun2.png","../img/preload/p1/p1yun3.png"];
var pageIndex;
var isIos = /iphone os/i.test(navigator.userAgent.toLowerCase()) || /ipad/i.test(navigator.userAgent.toLowerCase());
var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
var PAGE = function () {
    var fn = {
            setSwiper: function () {
                var threeSp = new Swiper('#three-sp', {
                    followFinger: false,
                    speed: 500,
                    initialSlide: 0,
                    observeParents: true,
                    autoplay: 4000,
                    pagination: '.sp3 .swiper-pagination',
                    onSlideChangeStart: function (swiper) {
                    }
                });
                var fourSp = new Swiper('#four-sp', {
                    followFinger: false,
                    speed: 500,
                    initialSlide: 0,
                    observeParents: true,
                    autoplay: 4000,
                    pagination: '.sp4 .swiper-pagination',
                    onSlideChangeStart: function (swiper) {
                    }
                });
                var fiveSp = new Swiper('#five-sp', {
                    followFinger: false,
                    speed: 500,
                    initialSlide: 0,
                    observeParents: true,
                    autoplay: 4000,
                    pagination: '.sp5 .swiper-pagination',
                    onSlideChangeStart: function (swiper) {
                        $('.sp5 .arrowRight').hide();
                    },
                    onSlideChangeEnd: function (swiper) {
                        var index = swiper.realIndex;
                        if (index == 0) {
                            $('.sp5 .arrowRight').show();
                        }
                    }
                });
                var sevenSp = new Swiper('#seven-sp', {
                    followFinger: false,
                    speed: 500,
                    initialSlide: 0,
                    observeParents: true,
                    autoplay: 4000,
                    pagination: '.sp7 .swiper-pagination',
                    onSlideChangeStart: function (swiper) {
                    }
                });
                var mySwiper = new Swiper('#main-swiper', {
                    direction: 'vertical',
                    followFinger: false,
                    speed: 500,
                    initialSlide: 0,
                    nextButton: '.arrow',
                    observeParents: true,
                    preloadImages: false,
                    lazyLoading: true,
                    lazyLoadingInPrevNext: true,
                    lazyLoadingClass: 'lazy',
                    lazyLoadingInPrevNextAmount: 2,
                    onLazyImageLoad: function (swiper, slide, image) {
                        //console.log(swiper);//Swiper实例
                        //console.log(slide);//哪个slide里面的图片在加载
                        //console.log(image);//哪个图片在加载
                    }, onSlideChangeStart: function (swiper) {
                        var index = swiper.realIndex,
                            $tpa = $('.tpage');
                        $tpa.removeClass('flipFn');
                        threeSp.stopAutoplay();
                        fourSp.stopAutoplay();
                        fiveSp.stopAutoplay();
                        if (index == 3) {
                            threeSp.startAutoplay();
                        } else if (index == 4) {
                            fourSp.startAutoplay();
                        } else if (index == 5) {
                            fiveSp.startAutoplay();
                        } else if (index == 7) {
                            sevenSp.startAutoplay();
                        }

                        setTimeout(function () {
                            if (index >= 1 && index <= 8) {
                                $tpa.addClass('flipFn');
                                var className = "tnow" + index;
                                var preClass = "tnow" + pageIndex;
                                $(".t2016").removeClass("hide");
                                $(".tpage").removeClass("hide");
                                $(".tpage").removeClass(preClass);
                                $(".tpage").addClass(className);
                                pageIndex = index;
                            } else if (index > 8 && index < 11) {
                                $(".t2016").removeClass("hide");
                                $(".tpage").removeClass("hide");
                                pageIndex = 8;
                            } else {
                                $(".t2016").addClass("hide");
                                $(".tpage").addClass("hide");
                                pageIndex = index;
                            }
                        }, 50);

                        $("#main-swiper .swiper-wrapper .swiper-slide-active").addClass("active").siblings().removeClass("active");
                        $("#main-swiper .swiper-wrapper .swiper-slide-active").css('visibility', 'visible');
                    },
                    onSlideChangeEnd: function (swiper) {
                    }
                });

                setTimeout(function () {
                    threeSp.stopAutoplay();
                    fourSp.stopAutoplay();
                    fiveSp.stopAutoplay();
                    sevenSp.stopAutoplay();
                }, 500);
            }, setClickFun: function () {
                $('body').css("background","#e6cd8d");

                var params = function(u, paras){
                    var url = u;
                    var paraString = url.substring(url.indexOf("?")+1,url.length).split("&");
                    var paraObj = {};
                    for (i=0; j=paraString[i]; i++){
                        paraObj[j.substring(0,j.indexOf("=")).toLowerCase()] = j.substring(j.indexOf("=")+1,j.length);
                    }
                    var ret = paraObj[paras.toLowerCase()];
                    if(typeof(ret)=="undefined"){
                        return "";
                    }else{
                        return ret;
                    }
                };

                $("#down").on("click",function () {
                    var app = params(location.search, "app_channel");
                    if(app == "netease"){
                        window.open("https://adl.netease.com/d/g/yys/c/gwm");
                    }else if(app == "app_store"){
                        window.open("https://adl.netease.com/d/g/yys/c/gwm");
                    }else if(app == "uc_platform"){
                        alert("请到九游游戏搜索《阴阳师》下载游戏");
                    }else if(app == "wandoujia"){
                        alert("请到豌豆荚平台搜索《阴阳师》下载游戏");
                    }else{
                        alert("请到应用商店搜索《阴阳师》下载游戏");
                    }
                });
            }
        },
        init = function () {
            fn.setSwiper();
            fn.setClickFun();

        };
    return {
        fn: fn,
        init: init
    }
}();

$(function(){
    function isWeiXin() {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true;
        } else {
            return false;
        }
    }

    if (isWeiXin()) {
        audioAutoPlay();
    } else {
        $(".music").addClass("muClose");
    }
    $(".music").on("click", function () {
        if ($(this).hasClass("muClose")) {
            // 处在暂停状态，点击播放
            $("#au1")[0].play();
            $(this).removeClass("muClose");
        } else {
            // 点击暂停
            $("#au1")[0].pause();
            $(this).addClass("muClose");
        }
    });
    PAGE.init();
    $('#main').css('opacity', '1');
    $(".sp0").addClass("active").siblings().removeClass("active");

});

function audioAutoPlay() {
    var audio = document.getElementById('au1'),
        play = function () {
            audio.play();
            document.removeEventListener("touchstart", play, false);
        };
    audio.play();
    document.addEventListener("touchstart", play, false);
}
