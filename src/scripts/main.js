//import $ from jQuery

$('li:odd').css('color', 'red');

jQuery('li:even').css('color', () => {
    return 'green';
})