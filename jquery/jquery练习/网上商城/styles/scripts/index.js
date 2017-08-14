/**
 * Created by ASUS on 2017/8/14.
 */
$(function(){
    //搜索框
    $("#inputSearch").on("focus", function(){
        if(this.value == this.defaultValue){
            this.value ="";
        }
    }).on("blur", function(){
        if(this.value ==""){
       this.value = this.defaultValue;
        }

    });
    //导航菜单
    $("#nav li").hover(function(){
        $(this).children(".jnNav").show();
    }, function(){
        $(this).children(".jnNav").hide();
    });
    // $("#nav li a").hover(function(){
    //     $(this).next().show();
    // },function(){
    //     $(this).next().hide();
    // })
    // $("#nav li a").on("mouseover", function(){
    //     $(this).next().show();
    // }).on("mouseout", function(){
    //     $(this).next().hide();
    // });
    //hot
    $("#jnCatalog.promoted").append("<span class='hot'> </span>");
    // //轮播图
    // //调整图片的层级关系：z-index
        $("#jnImageroll div a").on("mouseover", function(){
            $(this).addClass("chos").siblings().removeClass("chos");
            $("#JS_imgWrap img").eq($(this).index()).fadeIn().siblings().fadeOut();
        });
});
