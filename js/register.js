
$(function(){
	var inputValue;
	var yFlag = false;
	var pFlag = false;
	var vFlag = false;
	//手机注册第一步
	//用户名验证
	$("#mobileusertext").blur(function(){
		inputValue = $("#mobileusertext").val();
		var $ele = "#mobile-user-message";
		checkUserName($ele, inputValue);
	})
	//手机号验证
	$("#mobilephonetext").blur(function(){
		inputValue = $("#mobilephonetext").val();
		if(inputValue == ""){
			$("#mobile-phone-message").html("手机号不能为空");
			$("#mobile-phone-message").css({
					"color": "red"
			});
			pFlag = false;
		} else {
			var flag = /^[1-3]\d{10}$/.test(inputValue);
			if(!flag){
				$("#mobile-phone-message").html("手机号码不合法");
				$("#mobile-phone-message").css({
						"color": "red"
					});
				pFlag = false;
			} else{
				$("#mobile-phone-message").html("")
				pFlag = true;
			}
		}
	})
	//验证码验证
	
	//获取验证码
	var imgArr = ["loginCode.do","loginCode1.do","loginCode2.do","loginCode3.do","loginCode4.do","loginCode5.do","loginCode6.do","loginCode7.do","loginCode8.do","loginCode9.do","loginCode10.do"]
	var textArr = ["U88C", "ZH8T", "FPVG","QHTS", "QHTS","M7YS","M7YS","KAEJ","KO54","LHBO","QEDU"];
	var yan;
	getVcode(imgArr,textArr);
	$("#mySpan a").on("click",function(){
	
		getVcode(imgArr,textArr);
	})
	function getVcode(imgArr, textArr){
		yan = Math.round(Math.random()*10);
		var yanPath = "img/usercenterImg/" + imgArr[yan];
		$("#img1").attr("src",yanPath);
	}
	//check验证码
	function checkVcode(yanValue){
		var check = new RegExp(textArr[yan], "i");
		var a = check.test(yanValue);
		if(!a){
			$("#mobile-code-message").html("验证码错误");
			$("#mobile-phone-message").css({
				"color": "red"
			});
			vFlag = false;
		} else{
			$("#mobile-code-message").html("");
			vFlag = true;
		}
	}
	$("#vcode").blur(function(){
		var yanValue = $("#vcode").val();
		if(yanValue == ""){
			$("#mobile-code-message").html("验证码不能为空");
			$("#mobile-phone-message").css({
				"color": "red"
			});
			vFlag = false;
		} else {
			if(yanValue.length>4){
				$("#mobile-code-message").html("验证码错误");
				$("#mobile-phone-message").css({
					"color": "red"
				});
				vFlag = false;
			}else{
				checkVcode(yanValue);
			}
		}
	});
	//点击发送激活码，鼠标划过时更换背景
	$(".btn-sendjihuoma").hover(function(){
		$(".btn-sendjihuoma").css({
			"backgroundPosition": "-226px -210px"
		});
	},function(){
		$(".btn-sendjihuoma").css({
			"backgroundPosition": "-226px -168px"
		});
	})
	$(".btn-sendjihuoma").on("click",function(){
		if(yFlag && pFlag && vFlag){
			alert("激活码为：123456");
			$(".mobile1").hide();
			$("#mobileusertext2").val($("#mobileusertext").val());
			$("#mobilephonetext2").val($("#mobilephonetext").val());
			//设置用户名和手机号为只读
			$("#mobileusertext2").attr("readonly","readonly");
			$("#mobilephonetext2").attr("readonly","readonly");
			$(".mobile2").show();
			
		} else{
			alert("请正确填写表单")
		}
	})
	//手机注册第二步
	//登录密码验证
	$("#mobilepwdtext").blur(function(){
		inputValue = $("#mobilepwdtext").val();
		var $ele = "#mobile-pwd-message";
		
		checkPwd($ele, inputValue);
	});
	//确认密码验证
	$("#mobilerpwdtext").blur(function(){
		inputValue = $("#mobilepwdtext").val();
		var rinputValue = $("#mobilerpwdtext").val();
		var $ele = "#mobile-rpwd-message";
		checkRpwd($ele, inputValue, rinputValue);
	});
	//激活码验证
	$("#mobilejihuotext").blur(function(){
		inputValue = $("#mobilejihuotext").val();
		if(inputValue == ""){
			$("#mobile-jihuo-message").html("激活码不能为空");
			$("#mobile-jihuo-message").css({
					"color": "red"
			});
		} else{
			if(inputValue != 123456){
				$("#mobile-jihuo-message").html("激活码不正确");
				$("#mobile-jihuo-message").css({
					"color": "red"
			});
			}else{
				$("#mobile-jihuo-message").html("");
			}
			
		}
	});
	$(".btn-acceptandregister").hover(function(){
		$(".btn-acceptandregister").css({
			"backgroundPosition": "0px -126px"
		})
	}, function(){
		$(".btn-acceptandregister").css({
			"backgroundPosition": "0px -84px"
		});
	});
	
	//点击手机注册、卡注册之间切换
	$(".register-top a").on("click",function(){
		$(".register-top a").removeClass("actyle");
		console.log($(this).attr("id"))
		$(this).addClass("actyle");
		var $thisId = $(this).attr("id");
		if($thisId == "card"){
			$(".card1").show();
			$(".mobile1").hide();
			$(".mobile2").hide();
		} else if($thisId == "mobile"){
			$(".mobile1").show();
			$(".card1").hide();
			$(".mobile2").hide();
		}
	})
	//卡注册验证
	//卡号验证
	$("#cardmvpnametext1").blur(function(){
		inputValue = $("#cardmvpnametext1").val();
		if(inputValue == ""){
			$("#card-mvpname-message").html("请输入你的mvp卡号");
				$("#card-mvpname-message").css({
					"color": "red"
			});
		} else if(inputValue.length != 13){
			$("#card-mvpname-message").html("卡号非法");
				$("#card-mvpname-message").css({
					"color": "red"
			});
		} else {
			$("#card-mvpname-message").html("");
		}
	});
	//用户名验证
	$("#cardusertext1").blur(function(){
		inputValue = $("#cardusertext1").val();
		var $ele = "#card-user-message";
		checkUserName($ele, inputValue);
	})
	//登录密码验证
	$("#cardpwdtext1").blur(function(){
		inputValue = $("#cardpwdtext1").val();
		var $ele = "#card-pwd-message";
		
		checkPwd($ele, inputValue);
	});
	//确认密码验证
	$("#cardrpwdtext1").blur(function(){
		inputValue = $("#cardpwdtext1").val();
		var rinputValue = $("#cardrpwdtext1").val();
		var $ele = "#card-rpwd-message";
		checkRpwd($ele, inputValue, rinputValue);
	});
	
	
	//点击同意并注册按钮
	var myUserName = "myUserName";
	var myPwd = "myPwd";
	var isLogin = "isLogin";
	$(".btn-acceptandregister").on("click", function(){
		var userName = $(".user-text input").val();
		var pwd = $(".pwd-text input").val();
		register(userName,pwd);
		$(".Lfwb").html(userName);
	})
	//点击马上去登录按钮
	$(".btn_goShopping").hover(function(){
		$(this).css({
			"backgroundPosition": "-226px -42px"
		});
	},function(){
		$(this).css({
			"backgroundPosition": "-226px 0"
		})
	})
	$(".btn_goShopping").on("click", function(){
		updateCookie(isLogin,"1");
	});
	
//注册按钮
function register(userName,pwd){
	
		if(getCookie(myUserName) == userName){
			alert("此用户已经注册，请直接登录")
		}else{
			addCookie(myUserName,userName,5);
			addCookie(myPwd,pwd,5);
			addCookie(isLogin,"0",5);
			$(".register").hide();
			$(".RG_mbox").show();
		}
	}
	
	
	
	
	
//用户名验证函数
function checkUserName($ele, str){
	if(str == ""){
			$($ele).html("用户名不能为空");
			yFlag = false;
		} else {
			var flag = /\w{4}/.test(str) || /[\u2E80-\u9FFF]{2}/.test(str) || /[\u2E80-\u9FFF]{1}\w{2}/.test(str) || /\w{1}[\u2E80-\u9FFF]{1}\w{1}/.test(str)||/\w{2}[\u2E80-\u9FFF]{1}/.test(str);
			if(!flag){
				$($ele).html("用户名只能为4~20个字符,一个汉字为两个字符");
				$($ele).css({
						"color": "red"
					});
				yFlag = false;
			} else{
				flag = /^[a-zA-Z\u2E80-\u9FFF][A-Za-z0-9_\u2E80-\u9FFF]{1,19}$/.test(str);
				if(!flag){
					$($ele).html("以中、英文开头，与数字、下划线组成");
					$($ele).css({
						"color": "red"
					});
					yFlag = false;
				} else{
					$($ele).html("用户名合法");
					$($ele).css({
						"color": "green"
					});
					yFlag = true;
				}
			}
		}
}
//登录密码验证函数
function checkPwd($ele, str){
	if(str == ""){
			$($ele).html("密码不能为空");
			$($ele).css({
					"color": "red"
			});
		} else{
			if(str.length >16 || str.length <6 ){
				$($ele).html("密码长度只能为6~16");
				$($ele).css({
						"color": "red"
				});
			} else {
				$($ele).html("");
			}
		}
}
//确认密码验证函数
function checkRpwd($ele, str1, str2){
	if(str1 !== str2){
			$($ele).html("两次密码不相同");
			$($ele).css({
					"color": "red"
			});
		} else{
			$($ele).html("");
		}
}
});
