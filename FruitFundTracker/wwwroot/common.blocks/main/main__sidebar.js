$(function() {

    $('.sidebar__button').on("click", function () {

        if ($('.main__sidebar-nav').is(":hidden")) {
            let sideBarWidth = $('.main__sidebar-nav').width();
            $('.main__content').animate({left: sideBarWidth}, 600 );
        }
        
        if ($('.main__sidebar-nav').is(":visible")) {
            $('.main__content').animate({ left: "0px"}, 600 );
        }

        $('.main__sidebar-nav').toggle("slow", function () {

            
        });

        
    });

});

