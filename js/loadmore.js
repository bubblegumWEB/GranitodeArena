/*
	Load more content with jQuery - May 21, 2013
	(c) 2013 @ElmahdiMahmoud
*/   

jQuery(function () {
    jQuery(".producto_box").slice(0, 12).show();
    jQuery("#loadMore").on('click', function (e) {
        e.preventDefault();
        jQuery(".producto_box:hidden").slice(0, 6).slideDown();
        if (jQuery(".producto_box:hidden").length == 0) {
            jQuery("#load").fadeOut('slow');
        }
    });
});

jQuery('a[href=#top]').click(function () {
    jQuery('body,html').animate({
        scrollTop: 0
    }, 600);
    return false;
});

jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 50) {
        jQuery('.totop a').fadeIn();
    } else {
        jQuery('.totop a').fadeOut();
    }
});