$(function(){
	$("#headtop").load("headtop.html");
	$("#header").load("header.html");
	$("#bottom").load("bottom.html");
	$("#footer").load("footer.html");
	//检测此商品是否收藏
	checkCollect();
	//鼠标划过时边框变为红色
	$(".pD-con-ltsmall li").hover(function(){
		$(this).addClass("pD-con-ltsmall-hover");
	}, function(){
		$(this).removeClass("pD-con-ltsmall-hover");
	});
	$(".pD-con a").hover(function(){
		$(this).fadeTo(30, 0.7);
	}, function(){
		$(this).fadeTo(30, 1);
	});
	
	
	$(".mbshop_detail_colorSizeList a").hover(function(){
		$(this).addClass("changebordercolor");
	}, function(){
		$(this).removeClass("changebordercolor");
	});
	$(".mbshop_detail_rebateRule").hover(function(){
		$(".mbshop_detail_rebateRule_open").show();
	}, function(){
		$(".mbshop_detail_rebateRule_open").hide();
	});
	//鼠标点击小图时切换中图和大图
	$(".pD-con-ltsmall li").on("click", function(){
		$(this).addClass("pD-con-ltsmall-click").siblings().removeClass("pD-con-ltsmall-click");
		var $index = $(this).index();
		var zSrc = "img/usercenterImg/818819_0"+$index+"--w_498_h_498.jpg";
		var bSrc = "img/usercenterImg/818819_0"+$index+"--w_1000_h_1000.jpg";
		$(".pD-conltbig-zoom img").attr("src", zSrc);
		$(".pD-conltbig-pop img").attr("src", bSrc);
		console.log($index);
	});
	//鼠标点击时选择颜色和尺寸的边框及取值
		//设置标识，为a时表示未点击过，再次点击取消选中
	var cFlag = zFlag = 001; 
	
	$(".color a").on("click",function(){
		
		var $index = $(this).index();
		var str = $(this).find("img").attr("alt");
		if(cFlag != $index){
			$("#changeColorText").html(str);
			$(this).addClass("clickbordercolor").siblings().removeClass("clickbordercolor");
			cFlag = $index;
		} else {
			$("#changeColorText").html("请选择颜色");
			$(this).removeClass("clickbordercolor");
			cFlag =001;
		}
		
	});
	$(".size a").on("click",function(){
		var $index = $(this).index();
		var str = $(this).html();
		if(zFlag != $index){
			$("#changeSizeText").html(str);
			$(this).addClass("clickbordercolor").siblings().removeClass("clickbordercolor");
			zFlag = $index;
		} else {
			$("#changeSizeText").html("请选择尺码");
			$(this).removeClass("clickbordercolor");
			zFlag =001;
		}
	});
	//加减库存量
	var timer;
	var jishu = 5;
	$(".mbshop_detail_buyNum_less").on("click", function(){
		//如果数量为1，再点击-时会出现“对不起，数量至少为1件。”，显示5秒后消失
		var $num = parseInt($(".mbshop_detail_buyNum").val());
		clearInterval(timer);
		if($num == 1){
			timer = setInterval(function(){
				if(jishu<0){
					clearInterval(timer);
					$(".mbshop_detail_alertclass").hide();
					jishu = 5;
					return;
				}
				$(".mbshop_detail_alertclass").show();
				$(".mbshop_detail_alertclass").html("对不起，数量至少为1件。");
				jishu--;
				console.log(jishu);
			},1000)
		} else {
			$num-=1;
			$(".mbshop_detail_buyNum").val($num);
		}
	});
	$(".mbshop_detail_buyNum_add").on("click", function(){
		//如果数量为50，再点击-时会出现“对不起，数量至多为50件。”，显示5秒后消失
		var $num = parseInt($(".mbshop_detail_buyNum").val());
		clearInterval(timer);
		if($num == 50){
			timer = setInterval(function(){
				if(jishu<0){
					clearInterval(timer);
					$(".mbshop_detail_alertclass").hide();
					jishu = 5;
					return;
				}
				
				$(".mbshop_detail_alertclass").show();
				$(".mbshop_detail_alertclass").html("对不起，数量至多为50件。");
				jishu--;
				console.log(jishu);
			},1000);
		} else {
			$num+=1;
			$(".mbshop_detail_buyNum").val($num);
		}
	});
	
	//加入购物袋
	
	$(".mbshop_detail_btn_addcart").on("click", function(){
		var colorText = $("#changeColorText").html();
		var sizeText = $("#changeSizeText").html();
		var $num = parseInt($(".mbshop_detail_buyNum").val());
		//判断颜色或者尺寸是否选好
		if(colorText == "请选择颜色" || sizeText == "请选择尺码"){
			alert("加入购物袋前，请选择颜色和尺码");
		} else {
			if($num == 0){
				alert("少于单项最少购买数量（1件）！");
			} else {
				$(".mbshop_openpop_hide").show();
				addShop();
				console.log( $(".mbshop-detail-pdname").text())
			}
		}
	});
	//点击收藏
	$("#collector_button").on("click", function(){
		if($(this).html() == ""){
			
			alert("收藏成功");
			addCollect();
			$(this).html("取消收藏");
			$(this).addClass("mbshop_detail_btn_wish_click")
		} else{
			alert("取消收藏成功");
			removeCollect();
			$(this).html("");
			$(this).removeClass("mbshop_detail_btn_wish_click")
		};
		
	});
	//check此商品是否收藏
	function checkCollect(){
		var myProductName = "myProductName1";
		var myProductPrice = "myProductPrice1";
		var myProductImg = "myProductImg1";
		if(checkCookie(myProductName)&& checkCookie(myProductPrice)&& checkCookie(myProductImg)){
			$("#collector_button").html("取消收藏");
			$("#collector_button").addClass("mbshop_detail_btn_wish_click")
		} else{
			$("#collector_button").html("");
			$("#collector_button").removeClass("mbshop_detail_btn_wish_click")
		}
	}
	//取消收藏夹函数
	function removeCollect(){
		//清除cookie
			var myProductName1 = "myProductName1";
			var myProductPrice1 = "myProductPrice1";
			var myProductImg1 = "myProductImg1";
			updateCookie(myProductName1,"");
			updateCookie(myProductPrice1, "");
			updateCookie(myProductImg1, "");
	};
	//加入收藏夹函数
	function addCollect(){
		var myProductName1 = "myProductName1";
		var myProductPrice1 = "myProductPrice1";
		var myProductImg1 = "myProductImg1";
		var pId = $(".mbshop_detail_pdid").html();
		var productName = $(".mbshop-detail-pdname strong").html();
		var productPrice = $("#salePriceText").html();
		var productImg = $(".pD-conltbig-zoom img").attr("src");
		/*var jsonStr = "[{'pId':'" + pId + "',"+
		"'productName':'" + productName + "',"+
		"'productPrice':'" + productPrice + "',"+
		"'productImg':'" + productImg + "',"+
		"'productNum':'" + productNum + "',"+
		"'productColor':'" + productColor + "',"+
		"'productSize':'" + productSize +"'}]";*/
		
		addCookie(myProductName1,productName,5);
		addCookie(myProductPrice1,productPrice,5);
		addCookie(myProductImg1,productImg,5);
				/*window.location = "shopCar.html";*/
				//addCookie(pId,jsonStr,10);
		
	}
	//加入购物袋函数
	function addShop(){
		var myProductId = "myProductId";
		var myProductName = "myProductName";
		var myProductPrice = "myProductPrice";
		var myProductImg = "myProductImg";
		var myProductColor = "myProductColor";
		var myProductNum = "myProductNum";
		var myProductSize = "myProductSize";
		var myOrderState = "myOrderState";
		var pId = $(".mbshop_detail_pdid").html();
		var productName = $(".mbshop-detail-pdname strong").html();
		var productPrice = $("#salePriceText").html();
		var productImg = $(".pD-conltbig-zoom img").attr("src");
		var productNum = $(".mbshop_detail_buyNum").val();
		var productColor = $("#changeColorText").html();
		var productSize =  $("#changeSizeText").html();
		/*var jsonStr = "[{'pId':'" + pId + "',"+
		"'productName':'" + productName + "',"+
		"'productPrice':'" + productPrice + "',"+
		"'productImg':'" + productImg + "',"+
		"'productNum':'" + productNum + "',"+
		"'productColor':'" + productColor + "',"+
		"'productSize':'" + productSize +"'}]";*/
		
		addCookie(myProductId,pId,5);
		addCookie(myProductName,productName,5);
		addCookie(myProductPrice,productPrice,5);
		addCookie(myProductImg,productImg,5);
		addCookie(myProductColor,productColor,5);
		addCookie(myProductNum,productNum,5);
		addCookie(myProductSize,productSize,5);
		addCookie(myOrderState,"0",5);
				/*window.location = "shopCar.html";*/
				//addCookie(pId,jsonStr,10);
		
	}
	
	
	//关闭购物袋
	$(".mbshop_openpop_close").on("click",function(){
		$(".mbshop_openpop_hide").hide();
	});
	$(".mbshop_openpop_btnGoShop").on("click",function(){
		$(".mbshop_openpop_hide").hide();
	});
	
	
	//放大镜效果
	var smallImg = $(".pD-conltbig-zoom"); //小图
	var smallCursor = $(".pD-bigPicMark"); //小放大镜		
	var bigCursor = $(".pD-conltbig-pop"); //大放大镜
	var bigImg = $(".pD-conltbig-pop img"); //大图
	$(smallImg).mouseenter(function(evt){
		fangDaJing(smallImg, smallCursor, bigCursor, bigImg, evt);

	});
	$(smallImg).mouseout(function(){
		$(smallCursor).css({
				"display": "none"
		});
		$(bigCursor).css({
			"display": "none"
		});
	});
	
	//楼梯效果

	$(".pD-floor li:not(:last)").hover(function(){
		
		var $index = $(this).index();
		$(this).addClass("pD-floor-navhover");
		if($index == 0){
			$(this).css({
				"borderLeft": "1px solid #f8584f"
			});
		} else {
			$(".pD-floor li:first").css({
				"borderLeft": "1px solid #d8d8d8"
			});
		}
		$(this).fadeTo(30,0.7);
	},function(){
		var $index = $(this).index();
		$(this).removeClass("pD-floor-navhover");
		if($index == 0){
			$(this).css({
				"borderLeft": "1px solid #f8584f"
			});
		} else {
			$(".pD-floor li:first").css({
				"borderLeft": "1px solid #d8d8d8"
			});
		}
		$(this).fadeTo(30,1);
	});
	$(".pD-floor li:not(:last)").on("click", function(){
		var $index = $(this).index();
		$(this).addClass("pD-floor-navclick").siblings().removeClass("pD-floor-navclick");
		if($index == 0){
			$(this).css({
				"borderLeft": "1px solid #f8584f"
			});
		} else {
			$(".pD-floor li:first").css({
				"borderLeft": "1px solid #d8d8d8"
			});
		}
			//获取每一个楼层的offset().top
		var $top = $(".pD-louceng li").eq($index).offset().top-40;
		$("body,html").animate({
			scrollTop: $top
		}, 500, function() {
			mark = 1;
		}); //浏览器滚动的高度
	});
	//当楼层滚动超过其offset().top值时position：fixed
	
	var $Ftop = $(".pD-floor li").eq(0).offset().top;
	$(window).scroll(function(){
		//获取滚动条滚动的高度
		var $top = $(this).scrollTop(); 
		//获取楼层的offset().top值
		
//		console.log($Ftop);
		if($top > $Ftop){
//			console.log("1234");
			$(".pD-floor ul").addClass("pD-floor-fixed");
		} else{
//			console.log("4321")
			$(".pD-floor ul").removeClass("pD-floor-fixed");
		}
	})	
	
	
	
	
	//放大镜效果函数
	function fangDaJing(smallImg, smallCursor, bigCursor, bigImg, evt){
		$(bigCursor).css({
			"display": "block"
		})
	//记录小放大镜的宽度
		var sWidth = smallImg.innerWidth()*bigCursor.innerWidth()/bigImg.innerWidth() + "px";
		smallCursor.height(sWidth);
		smallCursor.width(sWidth);
		var _width = parseInt(smallCursor.width());//隐藏时offsetWidth取不到，因此先记录下来
		var count = bigCursor.innerWidth()/_width;//计算比例
		$(smallImg).mousemove(function(evt){
			$(bigCursor).css({
				"display": "block"
			})
			var e = evt || event;
			//鼠标相对小图坐标
			var resx = e.clientX-smallImg.offset().left - _width/2;
			resx = resx <0 ? 0 : (resx >=(smallImg.innerWidth() - _width) ? (smallImg.innerWidth() - _width) : resx);
			var resy = e.clientY-smallImg.offset().top + $(document).scrollTop() - _width/2;
			resy = resy<0 ? 0 : resy;
			resy = resy >=(smallImg.innerHeight() - _width)? (smallImg.innerHeight() - _width) : resy;
			if(e.clientX-smallImg.offset().left>=0
				&& e.clientX-smallImg.offset().left-smallImg.innerWidth()<0
				&& e.clientY-smallImg.offset().top +$(document).scrollTop() >=0
				&& e.clientY-smallImg.offset().top+$(document).scrollTop()-smallImg.innerHeight()<0
			){
				$(smallCursor).css({
					"display": "block",
					"left": resx + "px",
					"top": resy+ "px"
				});
				
				$(bigImg).css({
					"display":"block",
					"left": -resx*count + "px",
					"top": -resy*count + "px"
				});
			} 
		
		});
	}
});
