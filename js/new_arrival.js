$(document).ready(function () {



    $(".prd_small li:nth-child(1)").addClass("on");
    $('.prd_small li').click(function () {
        let listNum = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $(this).addClass("on").siblings().removeClass("on");
        $('.prd_big li').eq(listNum).addClass('active').siblings().removeClass('active');
    });

    $(".data_list li:nth-child(1)").addClass("on");
    $(".data_txt li:nth-child(1)").show().siblings().hide();
    $(".data_list li").click(function () {
        let idx = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".data_txt li").eq(idx).fadeIn().siblings().fadeOut();
    });

    $(".like_list li a img:nth-child(2)").hide();
    $(".like_list li ").hover(function () {
        $(this).find("img:nth-child(2)").stop().fadeToggle();
    });

});
