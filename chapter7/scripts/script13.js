$(document).ready(function(){
    var $window = $(window);
    var $slideAd = $("#slideAd");
    var endZone = $("#footer").offset().top - $window.height()-500;

    $window.on('scroll', function(){
        endZone = $("#footer").offset().top - $window.height()-500;
        if( (endZone) < $window.scrollTop()){
            console.log("here");
            $slideAd.animate({
                'right':'0px'
            }, 1000);
        }else{
            console.log("not here");
            $slideAd.stop(true).animate({
                'right':'-360px'
            },1000 );
        }
    })
})