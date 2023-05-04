(function($) {
  'use strict';

    /*---------------------------------------------------------------------
      Pre loader init
    ----------------------------------------------------------------------*/
    $(window).load(function() {
      $(".st-preloader-wave").delay(1000).fadeOut("slow");
      $("#st-preloader").delay(1000).fadeOut("slow").remove();
    });
    /*---------------------------------------------------------------------
      Wow init
    ----------------------------------------------------------------------*/
    if (typeof WOW == "function")
        new WOW().init();
    /*---------------------------------------------------------------------
     Mobile Menu
    ----------------------------------------------------------------------*/
    if($(window).width() < 991){
      jQuery('.menu-icon').on("click", function() {
        jQuery(this).toggleClass('active');
        jQuery('body').toggleClass('menu-open');
        jQuery('nav ul li a').on("click", function(){
          jQuery('.menu-icon').removeClass('active');
          jQuery('body').removeClass('menu-open');
        });
      });
    }
    /*---------------------------------------------------------------------
      Slider
    ----------------------------------------------------------------------*/
    $('.testimonial-slider').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:6000,
        margin:0,
        items:1,
        nav: true,
        dots: false,
        animateIn: 'fadeIn',
        responsiveClass:true,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    });
    $('.innovative-slider').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:6000,
        margin:0,
        items:1,
        nav: true,
        dots: false,
        responsiveClass:true,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    });
    $('.gallery-slider').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:6000,
        margin:30,
        items:3,
        scrollPerPage:1,
        nav: false,
        dots: true,
        responsiveClass:true,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1,
                dotsEach: 1
            },
            1025:{
                items:3,
                dotsEach: 1
            }
        }
    });
    
    $('.video-slider').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:6000,
        margin:30,
        video:true,
        lazyLoad:true,
        nav: true,
        dots: false,
        animateIn: 'fadeIn',
        responsiveClass:true,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2,
            },
            1350:{
                items:2
            }
        }
    });
    $('.variation-slider').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:6000,
        margin:0,
        items : 1,
        nav: true,
        dots: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsiveClass:true,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        //dotsContainer: '#variation-carousel-custom-dots',
    });
    $('.variation-slider .owl-item:not(.cloned)').each(function(e){
        var colorCode = $(this).find('.item').data('color');
        $('.variation-slider .owl-dots .owl-dot').eq(e).addClass(colorCode);
    });
    
    /*$('#variation-carousel-custom-dots .owl-dot').click(function () {
      $('.variation-slider').trigger('to.owl.carousel', [$(this).index(), 300]);
    });*/

    /*---------------------------------------------------------------------
      Index -2 Slider
    ----------------------------------------------------------------------*/
    $('.capability-slider').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:6000,
        margin:10,
        nav: true,
        dots: false,
        animateIn: 'fadeIn',
        responsiveClass:true,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        responsive:{
            0:{
                items:1,
                nav: false,
                dots: true
            },
            600:{
                items:2,
                nav: false,
                dots: true
            },
            1000:{
                items:3,
                nav: true,
                dots: false
            },
            1350:{
                items:3
            }
        }
    });
    $('.color-variation-slider').owlCarousel({
        loop:true,
        autoplay:false,
        autoplayTimeout:6000,
        margin:0,
        items : 1,
        nav: false,
        dots: true,
        animateIn: 'fadeIn',
        responsiveClass:true
    });
    $('.color-variation-slider .owl-item:not(.cloned)').each(function(e){
        var colorCode = $(this).find('.item').data('color');
        $('.color-variation-slider .owl-dots .owl-dot').eq(e).addClass(colorCode);
    });
    $('.morevideo-slider').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        video:true,
        lazyLoad:true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    });
    $('.features-slider').owlCarousel({
        loop:true,
        autoplay:false,
        autoplayTimeout:6000,
        margin:0,
        items : 1,
        nav: false,
        dots: true,
        animateIn: 'fadeIn',
        responsiveClass:true,
    });
     /*---------------------------------------------------------------------
      Index -3 Slider
    ----------------------------------------------------------------------*/
    $('.design-video-slider').owlCarousel({
        items:1,
        loop:true,
        margin:0,
        video:true,
        lazyLoad:true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
    });
     /*---------------------------------------------------------------------
      Index-2 feature Section
    ----------------------------------------------------------------------*/
    jQuery(window).on('scroll', function() {
      if ($('.feature-section').length){
        var distance = $('.feature-section').offset().top - $(window).height() / 2;
        if ($(window).scrollTop() >= distance) {
          $('.feature-section').addClass('active');
        }
      }
    });
    $(document).ready(function(){

        var topMenuHeight = $("header").height();
        $(document).on('click', 'a[href^="#"]', function(e) {
            e.preventDefault();
            var Link = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(Link).offset().top - topMenuHeight+1
            }, 1000);
        });

        $(document).click(function(e){
            if (!$(event.target).closest(".ft-point").length) {
                $('.ft-col').removeClass('active');
            }
        });
        $(document).keydown(function(e) {
            // ESCAPE key pressed
            if (e.keyCode === 27) {
                if ($(".ft-col").hasClass('active')){
                    $('.ft-col').removeClass('active');
                }
            }
        });
        $(".ft-point").on("click", function(e){
            $('.ft-col').removeClass('active');
            $(this).parent('.ft-col').addClass('active');
        });


        $(".start-engine").on("click", function(e){
            var sound = document.getElementById("audio");
            sound.play();
            $('.engine-ico').addClass("start-humming");
            setTimeout(function(){
                $('.engine-ico').removeClass("start-humming")
            }, 2500);
        });


    });
    // mobile dropdown coad
      if(jQuery(window).width() < 767 ){
          jQuery('.select-filter').click(function() {
            jQuery(this).next('ul').slideToggle('600');
          });
          jQuery('.tab-section ul.nav span').click(function() {
            var text = jQuery(this).text();
            jQuery(this).parents('ul').prev('.select-filter').text(text);
            jQuery(".tab-section ul.nav").hide();
          });
      }

})(jQuery);