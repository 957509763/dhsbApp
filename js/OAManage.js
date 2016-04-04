/**
 * Created by 周荥马 on 2016/03/15.
 */
/*

$('.gridly').gridly({
    base:15, // px
    gutter: 2, // px
    columns: 20
});
*/
/*设置一个长按的计时器，如果点击这个图层超过2秒则触发，mydiv里面的文字从out变in的动作*/

var moveClassName=".col-xs-6.col-sm-3.col-md-2.col-lg-1.brick.small"

$("#sortable").on("taphold",function() {
        $(".layoutTopbar").css("display","block");
        $(".circle_message").css("display","none");
        $(".removeself_message").css("display","block");
        $("#sortable").sortable({
            revert: true,
            disabled:false
        });
        $(".index_icon").ShakeBorder();
});
$(".layoutTopbar").on("tap",function(){
    $(".layoutTopbar").css("display","none");
    $(".circle_message").css("display","block");
    $(".removeself_message").css("display","none");
    $(".index_icon").parent().children().remove("style");
    $("#sortable").sortable({
        disabled:true
    });
});

$(".removeself_message").click(function(){
    var removeObj=$(this).parent().parent().parent();
    removeObj.remove();
});

$(".removeself_message").click(function(){
    var removeObj=$(this).parent().parent().parent();
    removeObj.remove();
});
$(function(){
    $("#select-choice").change(function(e){
        var work_type=$("#select-choice").val();
        if(work_type=="recent_work"){
            $("#orderTaskTable tr[remindType][remindType!='recent']").remove();
            if($("#orderTaskTable tr[remindType='recent']").length<=0){
                insertRemindType("recent");
            }
        }
        if(work_type=="daily_work"){
            $("#orderTaskTable tr[remindType][remindType!='daily']").remove();
            if($("#orderTaskTable tr[remindType='dialog']").length<=0){
                insertRemindType("daily");
            }
        }
    });

});
function insertRemindType(typeRemind){
    var textAhead =  document.createTextNode("提前");
    var textAheadDom = document.createTextNode("天提醒");
    var textEvery = document.createTextNode("以后每隔");
    var textEveryDom = document.createTextNode("小时提醒");
    var divType = document.createElement("div");
    var divEveryType = document.createElement("div");
    divType.className="ui-block";
    divEveryType.className="ui-block";

    var trTX=document.createElement("tr");
    var tdTx=document.createElement("td");
    var tdTXDom = document.createElement("td");
    var tdTXType = document.createElement("td");
    tdTx.appendChild(textAhead);
    tdTXDom.appendChild(textAheadDom);
    var tdTXTypeModule = document.createElement("input");
    if(typeRemind=="daily"){
        tdTXTypeModule.setAttribute("type","number");
    }
    divType.appendChild(tdTXTypeModule);
    tdTXType.appendChild(divType);

    trTX.appendChild(tdTx);
    trTX.appendChild(tdTXType);
    trTX.appendChild(tdTXDom);

    var trJG=document.createElement("tr");
    var tdJG=document.createElement("td");
    var tdJGDom = document.createElement("td");
    var tdJGType = document.createElement("td");
    tdJG.appendChild(textEvery);
    tdJGDom.appendChild(textEveryDom);
    var tdJGTypeModule = document.createElement("input");
    if(typeRemind=="daily"){
        tdJGTypeModule.setAttribute("type","number");
    }
    divEveryType.appendChild(tdJGTypeModule);
    tdJGType.appendChild(divEveryType);
    trJG.appendChild(tdJG);
    trJG.appendChild(tdJGType);
    trJG.appendChild(tdJGDom);
    $("#orderTaskTable").append(trTX);
    $("#orderTaskTable").append(trJG);

}
