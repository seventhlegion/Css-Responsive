/// <reference path="../typings/globals/jquery/index.d.ts" />
$(function() {
    $(".btn").click(function() {
        $(".submenu").slideToggle(1000);
    });
});
$(function(){
    $(".btn").click(function(){
        $(".btn").hide(1000);
    });
});
$(function(){
    $(".submenu").click(function(){
        $(".btn").show(1000);
        $(".submenu").slideUp(1000);
    });
});
$(function(){
    $(".feature").click(function(){
        $(".feature").fadeOut(1000);
        $(".feature").fadeIn(500);
    });
});