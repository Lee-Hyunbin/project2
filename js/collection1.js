$(document).ready(function () {



    $(".video").hide();
    $(".btn_play").click(function () {
        $(".video").fadeIn()
    });
    $(".video_close").click(function () {
        $(".video").fadeOut()
    });
});