$(function() {

    $('#side-menu').metisMenu();

});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
$(function() {
    $(window).bind("load resize", function() {
        var topOffset = 50;
        var width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
        if (width < 1200) {
            $('div.navbar-collapse').addClass('collapse');
            $('#sidebar').removeClass('sidebar');
            $('#page-wrapper').css('margin', '0 0 0 0');
            if(!$('.nav a').is(':visible') && $('.navbar-toggle').is(':visible')) $('.nav a').show();
            topOffset = 100; // 2-row-menu
        } else {
            $('div.navbar-collapse').removeClass('collapse');
            $('#sidebar').addClass('sidebar');
            if($('.nav a').is(':visible') && !$('.navbar-toggle').is(':visible')) $('#page-wrapper').css('margin', '0 0 0 250px');
        }

        var height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
        height = height - topOffset;
        if (height < 1) height = 1;
        if (height > topOffset) {
            $("#page-wrapper").css("min-height", (height) + "px");
        }
    });

    var url = window.location;
    // var element = $('ul.nav a').filter(function() {
    //     return this.href == url;
    // }).addClass('active').parent().parent().addClass('in').parent();
    var element = $('ul.nav a').filter(function() {
        return this.href == url;
    }).addClass('active').parent();

    while (true) {
        if (element.is('li')) {
            element = element.parent().addClass('in').parent();
        } else {
            break;
        }
    }
});

//Loads the correct sidebar on window load,
//collapses the sidebar on window resize.
// Sets the min-height of #page-wrapper to window size
// $(function() {
//     $(window).bind("load resize", function() {
//         topOffset = 50;
//         width = (this.window.innerWidth > 0) ? this.window.innerWidth : this.screen.width;
//         if (width < 768) {
//             $('div.navbar-collapse').addClass('collapse');
//             topOffset = 100; // 2-row-menu
//         } else {
//             $('div.navbar-collapse').removeClass('collapse');
//         }
//
//         height = ((this.window.innerHeight > 0) ? this.window.innerHeight : this.screen.height) - 1;
//         height = height - topOffset;
//         if (height < 1) height = 1;
//         if (height > topOffset) {
//             $("#page-wrapper").css("min-height", (height) + "px");
//         }
//     });
//
//     var url = window.location;
//     var element = $('ul.nav a').filter(function() {
//         return this.href == url || url.href.indexOf(this.href) == 0;
//     }).addClass('active').parent().parent().addClass('in').parent();
//     if (element.is('li')) {
//         element.addClass('active');
//     }
// });
