$(document).ready(function(){
// SETUP

var $list, $newItemForm, $newItemButton;
var item = '';

$list = $('ul');
$newItemForm = $('#newItemForm');
$newItemButton = $('newItemButton');

$('li').hide().each(function(index){
    $(this).delay(450 * index).fadeIn(1600);
});

})