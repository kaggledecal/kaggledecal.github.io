$(document).ready(function(){
    var audio = new Audio('https://raw.githubusercontent.com/rosstex/ff_tracklist/gh-pages/Castlevania%20Bloodlines%20-%20Classic%20Tunes%204%20%5BGenesis%5D%20Music.mp3');

    $('.photo1').mouseenter(function() {
        var parent2 = $(this).parent().find('.photo2');
        $(this).hide();
        parent2.show();
        parent2.mouseleave(function() {
            $(this).hide();
            $(this).parent().find('.photo1').show();
        })
    });

    $('.photo2').click(function() {
        var parent3 = $(this).parent().find('.photo3');
        if (parent3.length) {
            $(this).unbind('mouseleave');
            parent3.show();
            $(this).hide();
            parent3.mouseleave(function() {
                $(this).hide();
                $(this).parent().find('.photo1').show();
            })
        }
    });

    $('.photo3').contextmenu(function() {
        var parent4 = $(this).parent().find('.photo4');
        if (parent4.length) {
            $(this).unbind('mouseleave');
            $(this).hide();
            parent4.show();
        }
    });

    $('.photo4').mouseleave(function() {
        $(this).parent().find('.photo1').show();
        $(this).hide();
    });

    cheet('↑ ↑ ↓ ↓ ← → ← → b a', function () {
        audio.play();
});
    
});
