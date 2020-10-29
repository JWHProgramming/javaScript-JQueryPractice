
/*
Receiving content using different jQquery
*/
$(document).ready(function(){

    //Retrieves the value of everything inside the first ul and appends it to itself
    var $listHTML = $('ul').html();
    $('ul').append($listHTML);

    //Retrieves all the text from each li inside ul and appends the text to the end of the ul
    var $listText = $('ul').text();
    $('ul').append('<p>' + $listText + '</p>');

    //Retrieves HTML from only first li and then appends it to each li with italics
    var $listItemHTML = $('li').html();
    $('li').append('<i>' + $listItemHTML + '</i>');

    //Retrieves text from every li in selection and appends it to each li with italics
    var $listItemText = $('li').text();
    $('li').append('<i>' + $listItemText + '</i>');
})