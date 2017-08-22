/**
 * Created by ASUS on 2017/8/22.
 */
require(["jquery", "carousel"], function($, Carousel){
    var settings1 = {
        selector:"#container1",
        imgArr : ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg"],
        speed: 1000,
        btnStyle:"square",//circle
        arrowPos:"botton"//center
    };
    var carousell = new Carousel(settings1);
    carousell.init();

    var setting2 = {
        selector : "container2",
        imArr : ["img/2.jpg","img/3.jpg","img/4.jpg"],
        speed: 500,
        btnStyle:"circle",
        arrowPos:"center"
    };
    var carouse12 = new Carousel(settings2);
    carouse12.init();


});