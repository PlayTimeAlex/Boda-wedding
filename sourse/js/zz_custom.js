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
            width: "100%",
            height:"100%",
            className: 'colorbox-yt-popup'
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

        $('.b-header__mobmenubtn').on('click', function(){
            var $menu = $('.b-tnav');
            if($menu.hasClass('open')){
                $menu.slideUp(150, function(){
                    $menu.removeClass('open');
                });
                return false;
            }
            $menu.slideDown(150, function(){
                $menu.addClass('open');
            });
            return false;
        });

        $( ".b-form__datepicker" ).datepicker();
        $(".b-form__slider").each(function () {
            var max = $(this).data("max");
            var min = $(this).data("min");
            var el = $(this).data("el");
            $(this).slider({
                min: min,
                max: max,
                slide: function( event, ui ) {
                    console.log(ui)
                    $('.'+el).html(ui.value);
                    $('#'+el).val(ui.value);
                }
            });
        });

        /* Russian (UTF-8) initialisation for the jQuery UI date picker plugin. */
        /* Written by Andrew Stromnov (stromnov@gmail.com). */
        (function( factory ) {
            if ( typeof define === "function" && define.amd ) {

                // AMD. Register as an anonymous module.
                define([ "../datepicker" ], factory );
            } else {

                // Browser globals
                factory( jQuery.datepicker );
            }
        }(function( datepicker ) {

            datepicker.regional['ru'] = {
                closeText: 'Закрыть',
                prevText: '&#x3C;Пред',
                nextText: 'След&#x3E;',
                currentText: 'Сегодня',
                monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
                    'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
                monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
                    'Июл','Авг','Сен','Окт','Ноя','Дек'],
                dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
                dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
                dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
                weekHeader: 'Нед',
                dateFormat: 'dd.mm.yy',
                firstDay: 1,
                isRTL: false,
                showMonthAfterYear: false,
                yearSuffix: ''};
            datepicker.setDefaults(datepicker.regional['ru']);

            return datepicker.regional['ru'];

        }));

        $('.b-form__select, .b-header__lng').styler();

        $('.b-header__lng').on('change', function () {
            var url = $(this).val();
            if (url) {
                window.location = url;
            }
            return false;
        });

        if($('.b-header__video-video').length){
            objectFit.polyfill({
                selector: '.b-header__video-video',
                fittype: 'cover',
                disableCrossDomain: 'true'
            });
        }
    });

    $(window).load(function() {
        $('.b-slider__slider').flexslider({
            prevText: "<<",
            nextText: ">>",
            controlNav: false,
            smoothHeight: true,
            pauseOnHover: true
        });
    });
}(jQuery));
