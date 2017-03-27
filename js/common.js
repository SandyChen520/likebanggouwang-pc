$(function(){
	var $sea;
	
	//每次进入页面时检测cookie中的myOrderState是否为0，如果为0，则购物车中有1件商品
	var myOrderState = "myOrderState";
	if(getCookie(myOrderState) == "0"){
		$(".shopping-bag span").html("1");
	} else{
		$(".shopping-bag span").html("0");
	}
	$(".headtopline li:not('.headtopline-userlogin')").hover(function(){
		$(this).children().css({
			"color" : "#000"
		});
	}, function(){
		$(this).children().css({
			"color" : "#999"
		});
	});
	//划过用户名改变样式
	$(".headtopline-userlogin a").hover(function(){
		
		$(this).css({
			"color" : "#000"
		});
	}, function(){
		$(this).css({
			"color" : "#999"
		});
	});
	//登录按钮的划过
	$(".headtopline-logo").hover(function(){
		$(this).addClass(" headtopline-logochange");
	}, function(){
		$(this).removeClass(" headtopline-logochange");
	});
	$(".headtopline-logo-hover a").hover(function(){
		
		$(this).css({
			"color" : "#999"
		});
	}, function(){
		$(this).css({
			"color" : "#000"
		});
	});
	
	//我的邦购按钮的划过
	$(".headtopline-toporder").hover(function(){
		$(this).addClass(" headorderchange");
	}, function(){
		$(this).removeClass(" headorderchange");
	});
	$(".headtopline-order-hover a").hover(function(){
		console.log("11");
		$(this).css({
			"color" : "#999"
		});
	}, function(){
		$(this).css({
			"color" : "#000"
		});
	});
	//下载APP
	$(".headtopline-download").hover(function(){
		$(this).addClass(" headloadchange");
	}, function(){
		$(this).removeClass(" headloadchange");
	});
	//weixin
	$(".headtopline-weixin a").hover(function(){
		$(".headtopline-weixin img").fadeIn("fast");
	}, function(){
		$(".headtopline-weixin img").fadeOut("fast");
	});
	//搜索框事件
	$sea = $(".search input").val();
	$(".search input").focus(function(){
		var $that = $(this).val();
		if($that !== $sea){
			$(this).val($that);
		} else{
			$(this).val("");
		}
		
	});
	$(".search input").blur(function(){
		var $that = $(this).val();
		if($that !== $sea && $that){
			$(this).val($that);
		} else{
			$(this).val($sea);
		}
		
	});
	
	//鼠标划过时图片半透明
//	<div class="shopnav">
//						<ul class="shopnav-left">
//							<li><a href="#"><img src="img/sy.png" alt="" /></a></li>
//							<li><a href="#"><img src="img/kids.png" alt="" /></a></li>
//							<li><a href="#"><img src="img/mm.png" alt="" /></a></li>
//							<li><a href="#"><img src="img/rl.png" alt="" /></a></li>
//							<li><a href="#"><img src="img/rmpp.png" alt="" /></a></li>
//							<li><a href="#"><img src="img/sg.gif" alt="" /></a></li>
//						</ul>
	$(".shopnav-left img").hover(function(){
		$(this).fadeTo(30,0.7);
	},function(){
		$(this).fadeTo(30,1);
	});
	
	//下载区鼠标划过半透明
	$("#bottom img").hover(function(){
		$(this).fadeTo(30,0.7);
	},function(){
		$(this).fadeTo(30,1);
	});

//商品分类划过效果

//二级导航出现
	$(".shopmenu-wrap-main li").hover(function(){
//		alert()
		var $that = $(this).attr("class")
		$("." + $that + " .shopmenu-wraphover").fadeIn(3);
	},function(){
		var $that = $(this).attr("class")
		$("." + $that + " .shopmenu-wraphover").fadeOut(3);
	});
	//导航字体半透明效果
	$(".shopmenu-wrap-main a").hover(function(){
		$(this).fadeTo(30,0.7);
	},function(){
		$(this).fadeTo(30,1);
	});
	$(".shopmenu-wrap-main img").hover(function(){
		$(this).fadeTo(30,0.7);
	},function(){
		$(this).fadeTo(30,1);
	});
	//购物袋
	$(".shopping-bag").on("click", function(){
		window.location = "shopbag.html";
	})
//回到顶部
	$(".shopleft-fixed-top").on("click",function(){
		$("body").animate({
			scrollTop:0
		},1000)
//		return false;
	});
//出现回到顶部
	$(window).scroll(function(){
		var $t = $(this).scrollTop();
		if($t > 700){
			$("#shopleft-fixed .shopleft-fixed-top").css({
				"display": "block"
			});
		}else{
			$(".shopleft-fixed-top").hide();
		}
	});
	
	//登录成功
	var myUserName = "myUserName";
	var myPwd = "myPwd"
	var isLogin = "isLogin";
	if(getCookie(isLogin) == 1){
		var userName = getCookie(myUserName);
		$(".headtopline-userlogin").show();
		$(".headtopline-logo").hide();
		$(".headtopline-con").hide();
		$(".yidenglu-username").html(userName);
	}else{
		$(".headtopline-userlogin").hide();
		$(".headtopline-logo").show();
		$(".headtopline-con").show();
	}
	//点击退出
	$(".yidenglu-cancel").on("click", function(){
		updateCookie(isLogin,"0");
		$(".headtopline-userlogin").hide();
		$(".headtopline-logo").show();
		$(".headtopline-con").show();
	})
	//我的邦购，点击时check是否登录
	$(".headtopline-order-hover a").on("click", function(){
		var $in = $(this).index;
		if(getCookie(isLogin) == 1){
			switch($in){
				case 0 : window.location = "myorder.html";
						break;
				case 2 : window.location = "collect.html";
						break;
				case 3 : window.location = "useraddress.html";
						break;	
				
			}
		}
	})
	
	
	
	
	
	
	
});



















