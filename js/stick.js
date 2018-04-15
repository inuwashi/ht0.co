$(window).on("scroll", function() {
    if($(window).scrollTop() < 150) {
        $('#custom_sticky').addClass("nodisplay");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
       $('#custom_sticky').removeClass("nodisplay");
    }
});
