$(document).ready(function(){
    var $h2 = $('h2');
    $('ul').hide();
    $h2.append('<a class="show">show</a>');

    $h2.on('click', function(){
        $h2.next().fadeIn(500);
        $h2.find('a').fadeOut();
    })

    var $listItems = $('li');
    $listItems.filter('.hot:last').removeClass('hot');
    $('li:not(.hot)').addClass('cool');
    $('li:first').removeClass('cool');
    $listItems.has('em').addClass('complete');

    $listItems.each(function(){
        var $this = $(this);
        if($this.is('.hot')){
            $this.prepend('Priority item: ');
        }
    })

    $('li:contains("Honey")').append('Local');
})