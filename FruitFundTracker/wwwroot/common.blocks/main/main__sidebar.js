$(function() {

    let sidebarHiddenManually;

    //sidebar manual retract and expand
    $('.sidebar__button').on("click", function () {
        if ($('.main__sidebar-nav').is(":hidden")) {
            let sideBarWidth = $('.main__sidebar-nav').width();

            $('.main__content').animate({ marginLeft: sideBarWidth }, 600);
            sidebarHiddenManually = false;
        }
        
        if ($('.main__sidebar-nav').is(":visible")) {
            $('.main__content').animate({ marginLeft: "0px" }, 600);
            sidebarHiddenManually = true;
        }

        $('.main__sidebar-nav').toggle("slow", function () {
        });

    });

    //sidebar auto retract and expand
    let isRetracted = false;
  
    $(window).on("resize", function () {

        let screenWidth = $(window).width();

        if (screenWidth < 900 && !sidebarHiddenManually && !isRetracted) {
            isRetracted = true;
            $('.main__content').stop().animate({ marginLeft: 0 }, { duration: 220 , queue: false });
            $('.main__sidebar-nav').stop().hide("fast");

        }

        if (screenWidth > 900 && isRetracted && !sidebarHiddenManually) {
            isRetracted = false;

            let sideBarWidth = $('.main__sidebar-nav').width();

            $('.main__content').animate({ marginLeft: sideBarWidth }, { duration: 220, queue: false });
            $('.main__sidebar-nav').stop().show("fast");
        }

    });

    //auto retract on small screens
    let screenWidth = $(window).width();
    if (screenWidth < 900 && !sidebarHiddenManually && !isRetracted) {
        isRetracted = true;
        $('.main__content').stop().animate({ marginLeft: 0 }, { duration: 220 , queue: false });
        $('.main__sidebar-nav').stop().hide("fast");
    }


});

