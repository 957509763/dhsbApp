/**
 * Created by zhouxingma on 16/3/21.
 */
var moveXWidth=0;//左滑的距离
$(function() {
    //alert("Hello");
    setHeight_Width();
		//zxm备注
    // 获取所有行，对每一行设置监听
    var lines = $(".list_context");
    var len = lines.length;
    var startXForMobile,startX;

    // 用于记录被按下的对象
    var pressedObj;  // 当前左滑的对象
    var lastLeftObj; // 上一个左滑的对象

    // 用于记录按下的点
    var start;
    //在手机客户端
    for(var i=0;i<len;i++){
        //当手按下的时候
        lines[i].addEventListener("touchstart",function(e){
            startXForMobile = e.changedTouches[0].pageX;
            pressedObj = this;
            var touches = e.touches[0];
            start={
                x:touches.pageX,
                y:touches.pageY
            };
        });
        //当手移动的时候
        lines[i].addEventListener("touchmove",function(e){
            var touches = e.touches[0];
            var delta = {//左右滑动和垂直滑动的偏移量
                x:touches.pageX-start.x,
                y:touches.pageY-start.y
            };
            if(Math.abs(delta.x)>Math.abs(delta.y)){
                e.preventDefault;
            }
        });
        //当手离开的时候
        lines[i].addEventListener('touchend', function(e){
            var diffX = e.changedTouches[0].pageX - startXForMobile;
            if (diffX < -80) {
                $(pressedObj).animate({marginLeft:"-"+moveXWidth+"px"}, 200); // 左滑
                if(lastLeftObj && lastLeftObj != pressedObj) {
                    $(lastLeftObj).animate({marginLeft: "0"}, 200); // 已经左滑状态的按钮右滑
                }
                lastLeftObj = pressedObj; // 记录上一个左滑的对象
            } else if (diffX > 80) {
                $(pressedObj).animate({marginLeft:"0"}, 200); //右滑
                lastLeftObj = null; //清空上一个左滑的对象
            }
        });

    }

    //在电脑客户端
    for(var i=0;i<len;i++){
        $(lines[i]).bind("mousedown",function(e){
            startX = e.clientX;
            pressedObj=this;
        });
        $(lines[i]).bind("mouseup",function(e){
            var diffX = e.clientX-startX;
            if(diffX<-80){
                $(pressedObj).animate({marginLeft:"-"+moveXWidth+"px"}, 200); // 左滑
                if(lastLeftObj && lastLeftObj != pressedObj) {//如果最后滑动的对象存在而且不是当前滑动的这个对象
                    $(lastLeftObj).animate({marginLeft: "0"}, 200); // 已经左滑状态的按钮右滑
                }
                lastLeftObj = pressedObj; // 记录上一个左滑的对象
            }else if(diffX>80){
                $(pressedObj).animate({marginLeft:"0px"}, 200); // 右滑
                lastLeftObj=null;
            }
        });

    }
    $(".list_delete").click(function(){
        var obj = $(this).parent().parent();
        $(obj).slideUp("500",function(){
            $(obj).remove();
        });

    });

});
//设置宽度和高度
function setHeight_Width(){
    var list_contextheight=$(".list_wrapper").height();
    var list_contextwidth=$(".list_wrapper").width();
    $(".list_context").height(list_contextheight+"px");
    $(".list_context").width(list_contextwidth+3*6+"px");
    $(".list_icon").height($(".list_context").height());
    $(".list_icon").width($(".list_context").height());
    $(".list_message").height($(".list_context").height());
    $(".list_message").width($(".list_wrapper").width()-$(".list_icon").width()+2*6);
    if($(".list_change")[0]) {
        $(".list_change").height(list_contextheight);
        $(".list_change").width(list_contextheight);
        $(".list_change").css("line-height", $(".list_change").height() + "px");
        $(".list_context").width($(".list_message").width()+$(".list_icon").width()+$(".list_change").width()+2*6);
        moveXWidth=$(".list_change").width();
    }
    if($(".list_delete")[0]) {
        $(".list_delete").height(list_contextheight);
        $(".list_delete").width(list_contextheight);
        $(".list_delete").css("line-height", $(".list_delete").height() + "px");
        $(".list_context").width($(".list_message").width()+$(".list_icon").width()+$(".list_delete").width()+2*6);
        moveXWidth=$(".list_delete").width();
    }
    if($(".list_change")[0]&&$(".list_delete")[0]){
        $(".list_context").width($(".list_message").width()+$(".list_icon").width()+$(".list_change").width()+$(".list_delete").width()+2*8);
        moveXWidth=$(".list_change").width()+$(".list_delete").width();
    }
    

}
