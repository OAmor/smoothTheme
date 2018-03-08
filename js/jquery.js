/*global $ , alert , console , URL*/
$(function () {
    
    'use strict';
    
    /* Header */
    
    $('.header').height($(window).height());
    
    $(window).resize(function () {
       
        $('.header').height($(window).height());
        
        
        $('.bxslider').eq(0).css('paddingTop', (($(window).height() - $('.bxslider li').height()) / 2) - 75);
  
        
    });
    
    /* Add Classes */
    
    $('.navbar ul li').click(function () {
       
        $(this).addClass('active').siblings().removeClass();
        
    });
    
    /* Adjuste Slider In Center*/

    $('.bxslider').each(function () {
        
        $(this).css('paddingTop', (($(window).height() - $('.bxslider li').height()) / 2) - 75);
        
    });
    
    /* Trigger Bx Slider */
    
    $('.bxslider').bxSlider({
        pager : false
    });
    
    /* Move Scrool Top */
    
    $('.navbar li a').click(function () {
        
        $('html , body').animate({
           
            scrollTop: $('#' + $(this).data('value')).offset().top
           
        }, 500); 
        
    });
    
    /* To Do The Slide In Team */
    
    $('.box').mouseenter(function () {
        
        $('.overlay' + $(this).data('value')).slideDown(500); 
        
    });
    
    $('.box').mouseleave(function () {
        
        $('.overlay' + $(this).data('value')).slideUp(500); 
        
    });
    
    $('.testim .bxslider li').height($('.testim .bx-wrapper .bx-viewport').height());
    
    /* Slide In Projects */
    
    $('.project .container div').mouseenter(function () {
        
        $('.over' + $(this).data('value')).fadeIn(500);
         
    });
    
    $('.project .container div').mouseleave(function () {
        
        $('.over' + $(this).data('value')).fadeOut(500);
         
    });
    
    /* Trigger The Mixitup */
    
    $('#Container').mixItUp();
    
    /* Adjust Links */
    
    
    $('.project li').click(function () {
        
        $(this).addClass('select').siblings().removeClass();
        
    });
    
    /* Trigger The Nice Scroll */
    
    $('html').niceScroll({
        
        cursorcolor : '#51b4ee',
        
        cursorborder : 'none',
        
        scrollspeed : '100',
        
        cursorwidth : '8px'
        
    });
    
    
});



