/**
 * Created by ASUS on 2017/8/22.
 */
define(["jquery"],function($){
    function Carousel(settings){
        this.$container = $('<div class="carousel-container"></div> ');
        this.$tabs = $('<ul class="carousel-tabs" ></ul>  ');
        this.$img = $('<div class="carousel-imgs"  ></div>');
        this.$arrows = $('<div class="carousel-arrows"  ></div>');
        this.$prev = $('<div class="carouser-prev"  >&lt;</div>');
        this.$next = $('<div class="carouser-next"  >&gt;</div>');
        this.defaultSettings = {
            selector : document.body,
            imgArr:[],
            speed: 1000,
            btnStyle:"square",
            arrowPos:"bottom"
        };
        $.extend(this.defaultSetting, setting);



    }
});