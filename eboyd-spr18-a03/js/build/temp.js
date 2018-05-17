/* global $ */

$(document).ready(function () {
    let menu = $('nav > ul'),
        link = $('#mobileMenu a');

    link.on('click', function () {
        if (menu.hasClass('closed')) {
            menu.removeClass('closed');
            menu.addClass('open');
        } else {
            menu.removeClass('open');
            menu.addClass('closed');
        }
    });

    let subMenu = $('.subMenu'),
        subMenuLink = $('.subMenuLink');

    subMenuLink.on('click', function () {
        $(this).parent().find('.subMenu').toggle();
    });
});
