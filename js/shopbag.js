$(function(){
	$("#headtop").load("headtop.html");
	$("#bottom").load("bottom.html");
	$("#footer").load("footer.html");
	$(".mbshop_cart_single_warp_box").eq(1).load("shopbagCreate.html");
	//点击我的收藏夹
	$(".mbshop_cartnone_collect").on("click", function(){
		var isLogin = "isLogin";
		if(getCookie(isLogin) == 1){
			window.location = "collect.html";
		} else {
			window.location = "login.html";
		}
	})
	//点击去结算
	$(".mbshop_cartPayBill").on("click", function(){
		if($(".go_to_balance_left_have em").html() != 0){
			var num = $(".mbshop_cart_single_goods_num").val();
			var price = $(".mbshop_cart_single_04 em").html();
			var youhui = $(".mbshop_cart_single_06 i").eq(0).html();
			var zongjia = $(".go_to_balance_left_total i").html();
			//更新cookie
			var myProductNum = "myProductNum";
			var myProductZong = "myProductZong"
			updateCookie(myProductNum, num);
			addCookie(myProductZong, zongjia, 5);
			window.location = "userorder.html";

		} else {
			alert("请先选择商品");
		}
	})
})
