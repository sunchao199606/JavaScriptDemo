import $ from 'jquery'
let isMouseDown = false;
let draggable = $('.draggable');

draggable.on('mousedown', () => {
    isMouseDown = true;
})


draggable.on('mouseup', () => {
    isMouseDown = false;
})