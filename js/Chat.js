/**
 * Created by Administrator on 2016/5/25.
 */
//发送按钮事件
$("#Button1").click(function() {
    var $content = $("#txtContent");
    if ($content.val() != "") {
        SendContent($content.val());
    } else {
        alert ("发送内容不能为空！");
        $content.focus();
        return false;
    }
});
function SendContent(content) {
    $.ajax({
        type: "get",
        url: "DealData.aspx",
        data: "action=SendContent&d=" + new Date() + "&content=" + content,
        success: function(data){
            if (data == "1") {
                GetMessageList();
                $("#txtContent").val("");
            } else {
                alert ("发送失败!");
                return false;
            }
        }
    })
}
//显示表情图标
//var $a = "<img src='url' />";
//$("#divFace").html($a);
InitFace();
function InitFace(){
    var strHTML = "";
    for (var i=1; i<=10; i++) {
        strHTML +="<img src='Face/" + i + ".gif' id='" + i + "'/>";
        $("#divFace").html(strHTML);
    }
}
//点击图标事件
$("table tr td img").click(function(){
    var strContent = $("#txtContent").val() + "<:" + this.id + ":>";
    $("#txtContent").val(strContent);
});
//定时显示在线人员和最新聊天信息
function AutoUpdContent() {
    setTimeout(GetMessageList, 5000); //定时获取
    setTimeout(GetOnLineList, 5000); //定时获取
}
//返回聊天内容函数
function GetMessageList(){
    $.ajax({
        type: "get",
        url: "index.php",
        data: "action=ChatList&d=" + new Date(),
        success: function(data){
            $("#divContent").html(data);
        }
    });
}
//获取在线人员信息函数
function GetOnLineList(){
    $.ajax({
        type: "get",
        url: "index.php",
        data: "action=OnLineList&d=" + new Date(),
        success: function(data){
            $("#divOnline").html(data);
        }
    });
}