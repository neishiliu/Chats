/**
 * Created by Administrator on 2016/5/25.
 */
$(function(){
    //ajax全局事件，登陆发起时的提示
    $("#tip").ajaxStart(function(){
        $(this).show();
    });
    //ajax全局事件，登陆成功后的提示
    $("#tip").ajaxStop(function(){
        $(this).html("登陆成功！").hide();
    });
    $("#Button1").click(function(){
        var $name = $("#txtName");
        var $pass = $("#txtPass");
        if ($name.val() != "" && $pass.val() != "") {
            UserLogin($name.val(),$pass.val());
        } else {
            if ($name.val() == "") {
                alert ("用户名是空的哦！");
                $name.focus();
                return false;
            } else {
                alert ("还没有填密码哦！");
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
                alert ("用户名或密码错误！");
                return false;
            }
        }
    })
}