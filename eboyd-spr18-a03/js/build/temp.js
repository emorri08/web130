/* global $ */

$(document).ready(function () {
    let menu = $('nav > ul'),
        menuLink = $('#mobile-menu a');

    menuLink.on('click', function () {
        if (menu.hasClass('closed')) {
            menu.removeClass('closed');
            menu.addClass('open');
        } else {
            menu.removeClass('open');
            menu.addClass('closed');
        }
    });

    let subMenu = $('.submenu'),
        subMenuLink = $('.submenu-link');

    subMenuLink.on('click', function () {
        $(this).parent().find('.submenu').toggle();
    });
});
