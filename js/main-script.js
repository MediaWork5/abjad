/*glopal $, alert, console*/

$(function(){
    'use strict';

    $("nav .inside-links > ul > li > a").on("click", function (e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop : $("#" + $(this).data('scroll')).offset().top - 50
        }, 300);
    });


    // mobile
    var menu = $("nav .inside-links");
    $("nav .bars i").on('click', function() {
        if($(menu).css("display") == "none"){
            $(menu).show(200);
            $(this).removeClass("fa fa-bars").addClass("fa fa-close");
        }
        else {
            $(menu).hide(200);
            $(this).removeClass("fa fa-close").addClass("fa fa-bars");
        }
    });
    /**************************************/
    /**************************************/
    var sw = $(window).innerWidth();
    $("nav .inside-links > ul > li > a").on("click", function() {
        if(sw <= 767) {
            $(menu).hide(100);
            $("nav .bars i").removeClass("fa fa-close").addClass("fa fa-bars");
        }
    });
    
    $(window).resize(function(){
        sw = $(window).innerWidth();
        $("nav .inside-links > ul > li > a").on("click", function() {
            if(sw <= 767) {
                $(menu).hide(100);
                $("nav .bars i").removeClass("fa fa-close").addClass("fa fa-bars");
            }
        });
        if(sw > 767) {
            $(menu).show();
        }
    });


    // large screen
    if(sw > 1366) {
        $(".intro > div").addClass("container");
    }
    $(window).resize(function(){
        sw = $(window).innerWidth();
        if(sw > 1366) {
            $(".intro > div").addClass("container");
        }
        else {
            $(".intro > div").removeClass("container");
        }
    });

    /*buttom-top*/ 
    var scrollButton = $("#button-top");
    $(window).scroll(function(){
        if ( $(this).scrollTop() >= 800){
            scrollButton.show();
        }
        else{
            scrollButton.hide();   
        }
    });
    
    scrollButton.click(function(){
        $("html, body").animate({ scrollTop: 0}, 500);
    });


    // magic carousel
    $('#cascade-slider').cascadeSlider({
      
    });
    /*************************/
    /*************************/
    // wow and wowjava
    if(sw >= 767) {
        new WOW().init();
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })
    }


    /************************************/
    /************************************/
    // whatup
    (function () {
        var options = {
            whatsapp: "+966596898889", // WhatsApp number
            call_to_action: "whatsapp", // Call to action
            position: "left", // Position may be 'right' or 'left'
        };
        var proto = document.location.protocol, host = "whatshelp.io", url = proto + "//static." + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();
    
    
});