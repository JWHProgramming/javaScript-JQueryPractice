$(document).ready(function(){
    //Practicing the event object and its methods and properties
    // Single note :  e.timeStamp does not work properly due to changes made to DOM by creators
    $('li').on('click', function(e){
        $('li span').remove();
        var date = new Date();
        var clicked = date.toDateString();
        $(this).append('<span class=date"> ' + clicked + ' ' + e.type + '</span>');
    });
})