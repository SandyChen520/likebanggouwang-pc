$(function(){
	$("#headtop").load("headtop.html");
	$("#header").load("header.html");
	$("#bottom").load("bottom.html");
	$("#footer").load("footer.html");
	createShopList();
	
	//鼠标划过全部颜色时显示里面的颜色
	$(".mbshop_new_searchItemOption").hover(function(){
		$(this).find(".mbshop_new_searchItemOption_box").show();
		$(this).find("em").show()
		$(this).find(".mbshop_new_searchItemOption_menu").addClass("mbshop_new_searchItemOption_menu-hover")
	}, function(){
		$(this).find(".mbshop_new_searchItemOption_box").hide();
		$(this).find("em").hide()
		$(this).find(".mbshop_new_searchItemOption_menu").removeClass("mbshop_new_searchItemOption_menu-hover")
	})
	$(".mbshop_new_searchItemOption_box a").hover(function(){
		$(this).css({
			"background": "#ddd"
		})
	},function(){
		$(this).css({
			"background": "#fff"
		})
	})
	$(".mbshop_pdFilterItem a").hover(function(){
		var $index = $(this).index();
//		console.log($index);
		if($index == "1" || $index == "2"){
			$(this).addClass("mbshop_pdFilterUp_hover");
		}
		$(this).addClass("mbshop_pdFilterHover");
		$(this).fadeTo(30, 0.7);
	}, function(){
		var $index = $(this).index();
//		console.log($index);
		if($index == "1" || $index == "2"){
			$(this).removeClass("mbshop_pdFilterUp_hover");
		}
		$(this).removeClass("mbshop_pdFilterHover");
		$(this).fadeTo(30, 1);
	})
	$(".mbshop_pdFilterItem a").on("click", function(){
		$(".mbshop_pdFilterItem a").removeClass("mbshop_pdFilterClick");
		$(".mbshop_pdFilterItem a").removeClass("mbshop_pdFilterUp_click");
		var $index = $(this).index();
//		console.log($index);
		if($index == "1" || $index == "2"){
			$(this).addClass("mbshop_pdFilterUp_click");
		}
		$(this).addClass("mbshop_pdFilterClick");
	})
	
	
	
	
	
	
	
	
	//划过列表文字时半透明
	$(".bantouming").hover(function(){
		
		$(this).fadeTo(30, 0.7);
	},function(){
		$(this).fadeTo(30, 1);
	})
	//图片划过时变换图片
	
	//复制创建li列表
	function createShopList(){
		var str = "img/usercenterImg/258226_00--w_285_h_390.jpg"
		for(var i = 1; i<40; i++){
			$(".mbshop_listPdBox").append($(".mbshop_listPdCon").eq(0).clone(true));
			$(".mbshop_listPdCon").eq(i).find(".mbshop_listPdImg img").attr("src", str);
		}
	}
})
