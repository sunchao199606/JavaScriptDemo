import $ from 'jquery'
let isMouseDown = false;
let draggable = $('.draggable');

draggable.on('mousedown', () => {
    isMouseDown = true;
})

$(document).on('mousemove', (e) => {
    if (isMouseDown) {
        draggable.css('left', e.pageX + 'px');
        draggable.css('top', e.pageY + 'px');
    }
})

draggable.on('mouseup', () => {
    isMouseDown = false;
})