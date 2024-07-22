$(document).ready(function () {


    $(".depth2_wrap, .depth2_bg").hide();
    $(".gnb > li").mouseenter(function () {
        $("header").addClass("on");
        $(".depth2_bg").stop().fadeIn();
        $(this).find(".depth2_wrap").stop().fadeIn();
    });

    $(".gnb > li").mouseleave(function () {
        $("header").removeClass("on");
        $(".depth2_bg").stop().fadeOut();
        $(this).find(".depth2_wrap").stop().fadeOut();
    });




    $(".mgnb_back").hide();
    $(".mgnb_wrap").hide();

    $(".ham").click(function () {
        $(".mgnb_wrap").fadeIn();
        $(".mgnb_back").fadeIn();
        $(".search").fadeOut()

    });
    $(".mgnb_close").click(function () {
        $(".mgnb_wrap").fadeOut();
        $(".mgnb_back").fadeOut();
    });



    $(".mdepth2").hide();

    $(".mgnb > li").click(function () {
        $(this).addClass("on").siblings().removeClass("on");
        $(this).children(".mdepth2").slideDown();
        $(this).siblings().children(".mdepth2").slideUp();
    });







    $(".search").hide();

    $(".btn_search").click(function () {
        $(".search").fadeIn()
    });
    $(".search_close").click(function () {
        $(".search").fadeOut()
    });

});