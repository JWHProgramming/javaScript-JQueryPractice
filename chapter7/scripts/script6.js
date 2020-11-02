$(document).ready(function(){
// working with the following methods to retrieve and change values af Attributes
// .attr() --- .removeAttr() --- .addClass() --- .removeClass()
    $('li#three').removeClass('hot');
    $('li.hot').addClass('favorite');
    $('ul').attr('id', 'group');
})