/* global $ */

class Pumpkin {
    constructor(pie) {
        console.log('You ate ' + pie + ' pie.');
    }
}

let pumpkin = new Pumpkin('banana cream');

$(document).ready(function() {
    let menu = $('nav > ul.closed'),
        menuLink = $('#mobile-menu a');
    
    menuLink.on('click', function() {
        if (menu.hasClass('closed')) {
            menu.removeClass('closed');
            menu.addClass('open');
//            alert('AWW Bitch! You clicked the clicky thing');
        } else {
            menu.removeClass('open');
            menu.addClass('closed');
        }
    });
});
