$(function(){
	$("#headtop").load("headtop.html");
	$("#bottom").load("bottom.html");
	$("#footer").load("footer.html");
	var myProductZong = "myProductZong";
	$(".mbshop_order_PayPrice").html(getCookie(myProductZong));
	for(var i = 1; i<17; i++){
		var str = "img/usercenterImg/bank_gongshang" + i +".gif"
		$(".mbshop_order_bankListCon").append($(".mbshop_order_bankListCon a").eq(0).clone(true));
		$(".mbshop_order_bankListCon a").eq(i).find("img").attr("src", str);
	}
	//更新cookiestate
	var myOrderState = "myOrderState";
	updateCookie(myOrderState, "2"); 
});