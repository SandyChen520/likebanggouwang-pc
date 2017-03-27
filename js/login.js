$(function(){
	var isLogin = "isLogin";
	//账户登录、手机登录、卡登录切换
	$(".login-right-top h3").on("click",function(){
		$(".login-right-top h3").removeClass("logstyle");
		$(this).addClass(" logstyle");

		var $index = $(this).index();
		$(".form-user-text input").hide();
		$("#login_type_pwd").html("登录密码：");
		switch($index){
			case 0: $("#login_type_name").html("用户名：");
					$(".form-user-text input").eq(0).show();
					$(".form-user-text input")[0].focus();
					break;
			case 1: $("#login_type_name").html("手机号：");
					$(".form-user-text input").eq(1).show();
					$(".form-user-text input")[1].focus();
					break;
			case 2: $("#login_type_name").html("卡&nbsp;号：");
					$("#login_type_pwd").html("卡密码：");
					$(".form-user-text input").eq(2).show();
					$(".form-user-text input")[2].focus();
					break;
		}
		
	});
	//用户名提示信息
	tishi("#username","#id_info_username","请输入账户或邮箱地址");
	//手机号提示信息
	tishi("#phonename","#id_info_username","请输入手机号");
	//卡号提示信息
	tishi("#kaname","#id_info_username","请输入卡号");
	//密码提示信息
	tishi("#password","#id_info_password","请输入密码");
	tishi("#kapassword","#id_info_password","请输入密码");
	//验证码提示信息
	tishi("#vcode","#id_info_vcode","请输入验证码");
	function tishi($ele,$span,focusStr){
		$($ele).focus(function(){
			$($span).html(focusStr);
		});
		$($ele).blur(function(){
			$($span).html("");
		});
	}
	
	
	//获取验证码
	var imgArr = ["loginCode.do","loginCode1.do","loginCode2.do","loginCode3.do","loginCode4.do","loginCode5.do","loginCode6.do","loginCode7.do","loginCode8.do","loginCode9.do","loginCode10.do"]
	var textArr = ["U88C", "ZH8T", "FPVG","QHTS", "QHTS","M7YS","M7YS","KAEJ","KO54","LHBO","QEDU"];
	var yan;
	$("#mySpan a").on("click",function(){
	
		getVcode(imgArr,textArr);
	})
	function getVcode(imgArr, textArr){
		yan = Math.round(Math.random()*10);
		var yanPath = "img/usercenterImg/" + imgArr[yan];
		$("#img1").attr("src",yanPath);
	}
	//check验证码
	function checkVcode(){
		var yanValue = $("#vcode").val();
		var check = new RegExp(textArr[yan], "i");
		var a = check.test(yanValue);
		if(!a){
			$("#id_info_username").html("验证码错误");
			return false;
		} else{
			$("#id_info_username").html("");
			return true;
		}
	}
	//点击登录
	$(".btn-login").on("click", function(){
		var t = checkVcode();
		var userName = $(".form-user-text input").val();
		var pwd = $("#password").val();
		
		if(t){
			login(userName,pwd);
		}
	});
	$(".btn-login").hover(function(){
		$(".btn-login").css({
			"backgroundPosition": "0px -42px"
		})
	},function(){
		$(".btn-login").css({
			"backgroundPosition": "0px 0px"
		})
	})
	
	//登录函数
	function login(userName,pwd){
		var myUserName = "myUserName";
		var myPwd = "myPwd";
		if(getCookie(myUserName) != userName){
			alert("此用户不存在")
		}else{
			if(getCookie(myPwd) != pwd){
				alert("密码不正确")
			}else{
				updateCookie(isLogin,"1");
				window.location = "index.html";

			}
		}
	}
});



