/**
 * Created by Administrator on 2016/5/25.
 */
$(function(){
    //ajaxȫ���¼�����½����ʱ����ʾ
    $("#tip").ajaxStart(function(){
        $(this).show();
    });
    //ajaxȫ���¼�����½�ɹ������ʾ
    $("#tip").ajaxStop(function(){
        $(this).html("��½�ɹ���").hide();
    });
    $("#Button1").click(function(){
        var $name = $("#txtName");
        var $pass = $("#txtPass");
        if ($name.val() != "" && $pass.val() != "") {
            UserLogin($name.val(),$pass.val());
        } else {
            if ($name.val() == "") {
                alert ("�û����ǿյ�Ŷ��");
                $name.focus();
                return false;
            } else {
                alert ("��û��������Ŷ��");
                $pass.focus();
                return false;
            }
        }
    })
});

function UserLogin(name,pass){
    $.ajax({
        type: "post",
        url: "DealData.aspx",
        data: "action=Login&d=" + new Date() + "&name=" + name + "&pass=" + pass,
        success: function(data){
            if (data == "1") {
                window.location = "Chat.html";
            } else {
                alert ("�û������������");
                return false;
            }
        }
    })
}