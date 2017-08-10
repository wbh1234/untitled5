/**
 * Created by ASUS on 2017/8/9.
 */
$(function(){
    $(":input").focus(function(){
        $(this).addClass/*为每个匹配的元素添加指定的样式*/("focus");
    }).blur(function(){
        $(this).removeClass/*移除集合中每个匹配元素上一个，多个，或全部样式*/("focus");
    });
});
