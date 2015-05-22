(function($) {
    $(document).ready(function(){
        var $body = $('body');
        var $reclameTest = $('.js-reclametest');
        var reclameTestOText = $reclameTest.data('otext');
        $reclameTest.data('stext', $reclameTest.html());

        $('.js-reclametest').click(function(){
            if($body.hasClass('reclame')) {
                $body.removeClass('reclame');
                $reclameTest.html($reclameTest.data('stext'));
                return;
            }
            $('body').addClass('reclame');
            $reclameTest.html(reclameTestOText);
        });

        $('input, textarea').placeholder();

        $(".colorbox-yt").colorbox({
            iframe:true,
            width:640,
            height:390,
            maxWidth: "90%",
            maxheight:"90%"
        });


        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            $('.b-tnav__open-sub').on('click', function(e){
                e.preventDefault();

                var $parent = $(this).closest('.b-tnav__list-item_parent'),
                    $menu = $parent.children('.b-tnav__submenu');
                if($parent.hasClass('open')){
                    $menu.stop().slideUp(150, function(){
                        $parent.removeClass('open');
                    });
                    return false;
                }

                $menu.stop().slideDown(150, function(){
                    $parent.addClass('open');
                });
            });
        } else {
            $('.b-tnav__list-item_parent').hover(function(e){
                var $parent = $(this).closest('.b-tnav__list-item_parent'),
                    $menu = $parent.children('.b-tnav__submenu');

                $menu.stop().slideDown(150, function(){
                    $parent.addClass('open');
                });
            }, function(){
                var $parent = $(this).closest('.b-tnav__list-item_parent'),
                    $menu = $parent.children('.b-tnav__submenu');

                $menu.stop().slideUp(150, function(){
                    $parent.removeClass('open');
                });
            });
        }
    });

    $(window).load(function() {
        $('.b-slider__slider').flexslider({
            prevText: "Следующий",
            nextText: "Предыдущий",
            controlNav: false,
            smoothHeight: false,
            pauseOnHover: true
        });
    });
}(jQuery));