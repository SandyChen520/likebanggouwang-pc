$(function(){
	$("#headtop").load("headtop.html");
	$("#header").load("header.html");
	$("#bottom").load("bottom.html");
	$("#footer").load("footer.html");
	checkCollect();
	//鼠标划过半透明
	$(".bantouming").hover(function(){
		$(this).fadeTo(30, 0.7);
	}, function(){
		$(this).fadeTo(30, 1);
	})
	//点击删除
	$("#MemberCollector").on("click", function(){
		$(".mbshop_userCenterListTabBoxFrame").remove();
		$(".mbshop_userCenterListTabBoxFrame1").show();
		var myProductName1 = "myProductName1";
		var myProductPrice1 = "myProductPrice1";
		var myProductImg1 = "myProductImg1";
		updateCookie(myProductName1,"");
		updateCookie(myProductPrice1, "");
		updateCookie(myProductImg1, "");
	})
	//推荐收藏滑动
	$(".mbshop_userCenterPdRecBtn_fr").on("click", function(){
		$(".mbshop_userCenterPdRecAreaCon").animate({
			"left": "-1000px"
		}, 500, function(){
			$(".mbshop_userCenterPdRecBtn_fl").removeClass("mbshop_disabled");
			$(".mbshop_userCenterPdRecBtn_fr").addClass("mbshop_disabled");
		})
	})
	$(".mbshop_userCenterPdRecBtn_fl").on("click", function(){
		$(".mbshop_userCenterPdRecAreaCon").animate({
			"left": "0px"
		}, 500, function(){
			$(".mbshop_userCenterPdRecBtn_fr").removeClass("mbshop_disabled");
			$(".mbshop_userCenterPdRecBtn_fl").addClass("mbshop_disabled");
		})
	})
	//check是否有收藏函数
	function checkCollect(){
		var myProductName = "myProductName1";
		var myProductPrice = "myProductPrice1";
		var myProductImg = "myProductImg1";
		if(checkCookie(myProductName)&& checkCookie(myProductPrice)&& checkCookie(myProductImg)){
			$(".mbshop_userCenterListTabBoxFrame1").hide();
			$(".mbshop_userCenterListTabBoxFrame").show();
			$(".mbshop_userCenter_favpd_name a").html(getCookie(myProductName));
			$(".mbshop_userCenter_favpd_price b").html(getCookie(myProductPrice));
			$(".mbshop_userCenter_favpd_box a img").attr({
				"src": getCookie(myProductImg)
			})
		} else{
			$(".mbshop_userCenterListTabBoxFrame").hide();
			$(".mbshop_userCenterListTabBoxFrame1").show();
		}
	}
})
