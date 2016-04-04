/**
 * Created by 周荥马 on 2016/03/23.
 */
$(function(){
    reset_pageContent();
    $(window).resize(function(){
        reset_pageContent();
    });
});
function reset_pageContent(){
    var sceanHeight=$(document).height();
    $("#left_menu").height(sceanHeight);
    $("#right_content").height(sceanHeight);
}