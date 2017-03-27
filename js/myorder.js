$(function(){
	$("#headtop").load("headtop.html");
	$("#header").load("header.html");
	$("#bottom").load("bottom.html");
	$("#footer").load("footer.html");
	//点击立即付款
	$(".mbshop_userCenterOrderDetailInfoText2 p").eq(1).on("click", function(){
		alert("付款成功");
		$(this).prev().html("状态：等待发货");
		$(this).hide();
	});
	$(".mbshop_userCenterOrderDetailBtnCancel").on("click", function(){
		alert("取消订单成功");
		$(".dengdai").html("状态：已取消订单")
		$(this).hide();
	})
})
