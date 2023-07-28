$(document).ready(function() {
    $(window).scroll(function() {
        var top_of_element = $("#content").offset().top - 300; // Adjust this value to trigger the animation earlier
        var bottom_of_element = $("#content").offset().top + $("#content").outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var middle_of_screen = bottom_of_screen - (($(window).height())/2);

        if((middle_of_screen > top_of_element) && (middle_of_screen < bottom_of_element)){
            $("#content").css("opacity", "1");
        }
    });
});
