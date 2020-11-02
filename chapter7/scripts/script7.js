$(document).ready(function(){
    //Getting and setting css properties using the following methods
    // .css() -- .css('property', 'value') -- .css({ 'property': 'value' })

    var backgroundColor = $('li').css('background-color');
    $('ul').append('<p>Color was ' + backgroundColor + '</p>');
    $('li').css({
        'background-color': '#c5a996',
        'border': '1px solid #fff',
        'color': 'red',
        'font-family': 'Gorgia',
        'padding-left': '+=75'
    });
})