$(document).ready(function(){
    //Using .each() method and also practicing the difference between "this" and "$(this)"
    $('li').each(function(){
        var ids = this.id;
        $(this).append('<span class="order"> ' + ids + '</span>');
    });
})