$(function(){
    initSwip();
});

function initSwip(){
    var list_messageContentObjs = $(".list_messageContent");
    var startXForMobile,startX;
    var pressedObj;  // 当前左滑的对象
    var lastLeftObj; // 上一个左滑的对象
    var start;//记录手指开始时候的位置
    for(var i=0;i<list_messageContentObjs.length;i++){
        var swipObj=list_messageContentObjs[i];
        swipObj.addEventListener("touchstart",function(e){
            startXForMobile = e.touches[0].pageX;
            pressedObj = this;
            var touches = e.touches[0];
            start={
                x:touches.pageX,
                y:touches.pageY
            };
        });
        swipObj.addEventListener("touchmove",function(e){
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
        swipObj.addEventListener('touchend', function(e){
            //alert(e.changedTouches[0].pageX );
            var diffX = e.changedTouches[0].pageX - startXForMobile;
            var objItemNum = $(pressedObj).prev().children(".menu_Item").length;
            var moveCount = objItemNum*65;
            if (diffX < -80) {
                $(pressedObj).animate({marginLeft:"-"+moveCount+"px"}, 300); // 左滑
                if(lastLeftObj && lastLeftObj != pressedObj) {
                    $(lastLeftObj).animate({marginLeft: "0"}, 300); // 已经左滑状态的按钮右滑
                }
                lastLeftObj = pressedObj; // 记录上一个左滑的对象
            } else if (diffX > 80) {
                $(pressedObj).animate({marginLeft:"0"}, 300); //右滑
                lastLeftObj = null; //清空上一个左滑的对象
                pressedObj=null;
            }
        });

    }
    //电脑客户端
    for(var i=0;i<list_messageContentObjs.length;i++){
        var swipObj=list_messageContentObjs[i];

        $(swipObj).bind("mousedown",function(e){

            startX = e.clientX;
            pressedObj=this;
        });

        $(swipObj).bind("mouseup",function(e){
            var diffX = e.clientX-startX;
            var objItemNum = $(pressedObj).prev().children(".menu_Item").length;
            var moveCount = objItemNum*65;
            if(diffX<-80){
                $(pressedObj).animate({marginLeft:"-"+moveCount+"px"}, 300); // 左滑
                if(lastLeftObj && lastLeftObj != pressedObj) {//如果最后滑动的对象存在而且不是当前滑动的这个对象
                    $(lastLeftObj).animate({marginLeft: "0"}, 300); // 已经左滑状态的按钮右滑
                }
                lastLeftObj = pressedObj; // 记录上一个左滑的对象
            }else if(diffX>80){
                $(pressedObj).animate({marginLeft:"0px"}, 300); // 右滑
                lastLeftObj=null;
                pressedObj=null;
            }
        });
    }
    $(".delete_Item").click(function(){
        var obj = $(this).parent().parent();
        $(obj).slideUp("500",function(){
            $(obj).remove();
        });
    });
}