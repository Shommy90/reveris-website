$('#toggle').click(function() {
    $('ul.mobile-nav').slideToggle(200, function() {
        // Animation complete.
    });

    // Animate burger btn
    $(this).toggleClass("open");
});