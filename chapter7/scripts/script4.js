$(document).ready(function(){
    $('li:contains("pine")').text('Nuts');
    $('li.hot').html(function(){
        return '<em>' + $(this).text() + '</em>';
    });
    $('li#one').remove();
})