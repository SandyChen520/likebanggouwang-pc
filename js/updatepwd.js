$(function(){
	$("#headtop").load("headtop.html");
	$("#header").load("header.html");
	$("#bottom").load("bottom.html");
	$("#footer").load("footer.html");
	$("#opassword").blur(function(){
		var opwd = getCookie("myPwd");
		if($("#opassword").val()!=opwd){
			$("#result_error").html("密码错误！！");
		}else{
			$("#result_error").html("");
		}
	});

	$("#password_formModifyPwd").blur(function(){
		if($("#password_formModifyPwd").val().length<6 || $("#password_formModifyPwd").val().length>16){
			$("#newpwdresult_error").html("密码长度只能为6-16个字节！");
		}else if($("#password_formModifyPwd").val()==$("#opassword").val()){
			$("#newpwdresult_error").html("不能与旧密码一致！！");
		}else{
			$("#newpwdresult_error").html("");
		}
	});


	$("#repassword").blur(function(){
		var newpwd = $("#password_formModifyPwd").val();
		if($("#repassword").val()!=newpwd){
			$("#renewpwdresult_error").html("两次输入密码不一致！");
		}else{
			$("#renewpwdresult_error").html("");
		}
	});

	$("#sub").on("click",function(){
		if($("#result_error").html()=="" && $("#newpwdresult_error").html() =="" && $("#renewpwdresult_error").html()==""){
			var newp = $("#password_formModifyPwd").val();
			updateCookie("myPwd",newp);
			alert(getCookie("myPwd"));
			alert("修改成功！");
		}else{
			alert("相关信息不正确！！");
		}
	});
});