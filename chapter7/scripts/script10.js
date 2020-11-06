$(document).ready(function(){
    //Practicing the event object and its methods and properties
    // Single note :  e.timeStamp does not work properly due to changes made to DOM by creators
    $('li').on('click', function(e){
        $('li span').remove();
        var date = new Date();
        var clicked = date.toDateString();
        $(this).append('<span class=date"> ' + clicked + ' ' + e.type + '</span>');
    });

    // Delegating Events using additional parameters for event handlers
    // .on(events,[selector],[data], function(e))

    var listItem, itemStatus, eventType;

    $('ul').on('mouseover',
    ':not(#four)',
    {status: 'important'},
    function(e){
        listItem = 'Item: ' + e.target.textContent + '<br />';
        itemStatus = 'Status: ' + e.data.status + '<br />';
        eventType = 'Event: ' + e.type;
        $('#notes').html(listItem + itemStatus + eventType);
    })

    // Basic effects

    $('h2').hide().slideDown();
    var $li = $('li');
    $li.hide().each(function(index){
        $(this).delay(700*index).fadeIn(700);
    });
    $li.on('click', function(){
        $(this).fadeOut(700);
    });


    //Using animations on CSS properties with .animate()
    // .animate({[speed],[easing], [complete]})

    $('li').on('click', function(){
        $(this).animate({
            opacity: 0.0,
            paddingLeft: '+=180'
        }, 500, function(){
            $(this).remove();
        });
    });


})