$(function(){
	$(".mbshop_cart_single_goods a").hover(function(){
		$(this).css({
		"text-decoration": "underline"
		})
	},function(){
		$(this).css({
		"text-decoration": "none"
		})
	})
	//点击全选
	$(".mbshop_cart_01 input").on("click", function(){
//		console.log($(this).prop("checked") == true);
		
		if($(".mbshop_cart_01 input").prop("checked") == true){
			$(".mbshop_cart_01 input").removeAttr("checked");
			$(".mbshop_cart_single_goods_checkbox").removeAttr("checked");
			clearJiaGe();
			
			
		} else {
			$(".mbshop_cart_01 input").prop("checked",true);
			$(".mbshop_cart_single_goods_checkbox").prop("checked", true);
			$(".go_to_balance_left_have em").html($(".mbshop_cart_single_goods_num").val());
			jiSuan();
		}
	})
	//点击商品框，选择商品
	$(".mbshop_cart_single_01 input").on("click", function(){
		console.log($(this).prop("checked") == true);
		$(".mbshop_cart_01 input").click();
	})
	//点击修改优惠，显示规则
	$(".select_box div").hover(function(){
		$(this).next().show();
	},function(){
		$(this).next().hide();
	})
	//点击加减,数量发生变化
	$(".mbshop_cart_single_label_left").on("click", function(){
		var $num = parseInt($(this).next().val());
//		console.log($num);
		var $val = parseInt($(".go_to_balance_left_have em").html());
		if($num == 1){
			$(".veo_pop_warp").show();
			$(".veo_pop_warp .close_pop").show();
			$(".veo_pop_warp .btn_one").hide();
			$(".veo_pop_warp .btn_two").hide();
			$("#pop_message").html("对不起，数量最少为1件");
		} else {
			$num-=1;
			$(this).next().val($num);
			//数量发生变化
			if($(".mbshop_cart_single_goods_checkbox").prop("checked") == true){
				$val-=1;
				$(".go_to_balance_left_have em").html($val);
				jiSuan();
			}
		}
	});
	//最多为50件
	$(".mbshop_cart_single_label_right").on("click", function(){
		var $num = parseInt($(this).prev().val());
		var $val = parseInt($(".go_to_balance_left_have em").html());
		if($num == 50){
			$(".veo_pop_warp").show();
			$(".veo_pop_warp .close_pop").show();
			$(".veo_pop_warp .btn_one").hide();
			$(".veo_pop_warp .btn_two").hide();
			$("#pop_message").html("对不起，数量最多为50件");
		} else {
			$num+=1;
			$(this).prev().val($num);
			if($(".mbshop_cart_single_goods_checkbox").prop("checked") == true){
				$val+=1;
				$(".go_to_balance_left_have em").html($val);
				jiSuan();
			}
			
		}
	})
	
	//点击删除
	var $thatDel;
	$(".delete_goods").on("click",function(){
		$(".veo_pop_warp").show();
		$(".veo_pop_warp .close_pop").hide();
		$(".veo_pop_warp .btn_one").show();
		$(".veo_pop_warp .btn_two").show();
		$("#pop_message").html("确定要删除该商品吗？");
		$thatDel = this;
	})
	//删除选中商品
	$(".go_to_balance_left_del").on("click", function(){
		if($(".mbshop_cart_single_goods_checkbox").prop("checked") == true){
			$(".delete_goods").click();
		}
	})
	$(".btn_one").on("click", function(){
		var $num = $(this).parents(".mbshop_cart_single_goods").find(".mbshop_cart_single_goods_num").val();
		var $num1 = $(".go_to_balance_left_have em").html();
		var jian = parseInt($num1)-parseInt($num);
		$($thatDel).parents(".mbshop_cart_single_goods").remove();
		if($(".mbshop_cart_single_goods").length == 0){
			$(".mbshop_cart_warp_box00").show();
			$(".mbshop_cart_warp_box").hide();
			//清除cookie
			clearCookieShop();
		} else{
			$(".go_to_balance_left_have em").html(jian);
		}
		//信息提示框消失
		$(".veo_pop_warp").hide();
	})
	//点击按钮，窗口消失
	$(".close_motai").on("click", function(){
		$(".veo_pop_warp").hide();
	})
	createShopUl();
	//创建购物清单函数
	function createShopUl(){
		console.log("1233465");
		
		var myProductId = "myProductId";
			var myProductName = "myProductName";
			var myProductPrice = "myProductPrice";
			var myProductImg = "myProductImg";
			var myProductColor = "myProductColor";
			var myProductNum = "myProductNum";
			var myProductSize = "myProductSize";
			var myOrderState = "myOrderState";
	//		alert();
	//		alert();
		if(checkCookie(myProductName)&& checkCookie(myProductPrice)&& checkCookie(myProductImg)&& checkCookie(myProductColor)&& checkCookie(myProductNum)&& checkCookie(myProductSize) && (getCookie(myOrderState) == "0")){
			$(".mbshop_cart_warp_box00").hide();
			$(".mbshop_cart_warp_box").show();
			console.log("asdf");
			$(".mbshop_cart_single_warp_box").eq(1).append($(".mbshop_cart_single_goods").clone(true));
			$(".mbshop_cart_single_goods").eq(0).remove();
			$(".mbshop_cart_single_warp_box :last-child").find(".mbshop_cart_single_02 i").html(getCookie(myProductId));
			$(".mbshop_cart_single_warp_box :last-child").find(".mbshop_cart_single_02 p").html(getCookie(myProductName));
			$(".mbshop_cart_single_warp_box :last-child").find(".mbshop_cart_single_04 em").html(getCookie(myProductPrice));
//			$(".mbshop_cart_single_warp_box :last-child").find(".mbshop_cart_single_02 i").html(getCookie(myProductImg));
			$(".mbshop_cart_single_warp_box :last-child").find(".mbshop_cart_single_03 :first-child").html(getCookie(myProductColor));
			$(".mbshop_cart_single_warp_box :last-child").find(".mbshop_cart_single_05 input").val(getCookie(myProductNum));
//			
			$(".mbshop_cart_single_warp_box :last-child").find(".mbshop_cart_single_03 :last-child").html(getCookie(myProductSize));
//			jiSuan();
		} else{
			$(".mbshop_cart_warp_box00").show();
			$(".mbshop_cart_warp_box").hide();
		}
	}
	//计算价格清单函数
	function jiSuan(){
		//取出每一件的价格
		var $num = parseInt($(".mbshop_cart_single_goods_num").val());
		var myProductPrice = "myProductPrice";
		var $price = parseInt(getCookie(myProductPrice).substr(2));
		console.log($price);
		//商品总价
		var $zong = $price*$num;
		//优惠价格
		var $you = 25*$num;
		$(".go_to_balance_left_alg i").html("￥" + $zong);
		$(".go_to_balance_left_alg em").html("￥" + $you);
		$(".go_to_balance_left_total i").html("￥" + ($zong-$you));
		//计算后更新cookie
		var myProductNum = "myProductNum";
		updateCookie(myProductNum, $num);
	}
	//清除cookie
	function clearCookieShop(){
		var myProductId = "myProductId";
		var myProductName = "myProductName";
		var myProductPrice = "myProductPrice";
		var myProductImg = "myProductImg";
		var myProductColor = "myProductColor";
		var myProductNum = "myProductNum";
		var myProductSize = "myProductSize";
		var myOrderState = "myOrderState";
		updateCookie(myProductId, "");
		updateCookie(myProductName,"");
		updateCookie(myProductPrice, "");
		updateCookie(myProductImg, "");
		updateCookie(myProductColor, "");
		updateCookie(myProductNum, "");
		updateCookie(myProductSize, "");
		updateCookie(myOrderState, "");
	}
	//全不选时价格为0函数
	function clearJiaGe(){
		$(".go_to_balance_left_have em").html("0");
		$(".go_to_balance_left_alg i").html("0");
		$(".go_to_balance_left_alg em").html("0");
		$(".go_to_balance_left_total i").html("0");
	}
})
