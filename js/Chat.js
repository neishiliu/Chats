/**
 * Created by Administrator on 2016/5/25.
 */
//���Ͱ�ť�¼�
$("#Button1").click(function() {
    var $content = $("#txtContent");
    if ($content.val() != "") {
        SendContent($content.val());
    } else {
        alert ("�������ݲ���Ϊ�գ�");
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
                alert ("����ʧ��!");
                return false;
            }
        }
    })
}
//��ʾ����ͼ��
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
//���ͼ���¼�
$("table tr td img").click(function(){
    var strContent = $("#txtContent").val() + "<:" + this.id + ":>";
    $("#txtContent").val(strContent);
});
//��ʱ��ʾ������Ա������������Ϣ
function AutoUpdContent() {
    setTimeout(GetMessageList, 5000); //��ʱ��ȡ
    setTimeout(GetOnLineList, 5000); //��ʱ��ȡ
}
//�����������ݺ���
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
//��ȡ������Ա��Ϣ����
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