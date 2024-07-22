$(document).ready(function () {



    const new_list = new Swiper('.new_list', {
        /*   autoplay: {
              delay: 3000,
              disableOnInteraction: false,
          }, */
        loop: true,
        speed: 1500,
        slidesPerView: 2,
        spaceBetween: 15,
        scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            dragSize: 200,
        },

        breakpoints: {

            768: {
                slidesPerView: 3,
                spaceBetween: 10,

            },
            1200: {
                slidesPerView: 3.5,
                spaceBetween: 8,

            }
        },
    });

    $(".new_list li a img:nth-child(2)").hide();
    $(".new_list li ").hover(function () {
        $(this).find("img:nth-child(2)").stop().fadeToggle();
    });

    $(".tab_list li:nth-child(1)").addClass("on");
    $(".tab_img li:nth-child(1)").show().siblings().hide();
    $(".tab_list li").click(function () {
        let idx = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".tab_img li").eq(idx).fadeIn().siblings().fadeOut();
    });


    $(".service_list li:nth-child(1)").addClass("active");
    $(".service_list li").mouseenter(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });





});/* 문서준비 이벤트 */