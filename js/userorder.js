$(function(){
	$("#headtop").load("headtop.html");
	$("#bottom").load("bottom.html");
	$("#footer").load("footer.html");
	showLocation();
	getAddress();
	getShop();
	$(".bantouming").hover(function(){
		$(this).fadeTo(30,0.7);
	}, function(){
		$(this).fadeTo(30,1);
	})
	//点击使用新地址时
	$(".tanchu_newaddress").on("click", function(){
		$(".mbshop_orderAddressAdd").show();
		$("#sh_name").val("");
		$("#province :selected").html("");
		$("#city :selected").html("");
		$("#zone :selected").html("");
		$("#sh_mobile").val("");
		$("#sh_detail").val("");
	});
	$(".modify_adress").on("click", function(){
		$(".mbshop_orderAddressAdd").show();
		var sh_name = "sh_name";
		var province = "province";
		var city = "city";
		var zone = "zone";
		var sh_mobile = "sh_mobile";
		var sh_detail = "sh_detail";
		$("#sh_name").val(getCookie(sh_name));
		$("#province :selected").html(getCookie(province));
		$("#city :selected").html(getCookie(city));
		var $zone = $("#zone :selected").html(getCookie(zone));
		var $sh_mobile = $("#sh_mobile").val(getCookie(sh_mobile));
		var $sh_detail = $("#sh_detail").val(getCookie(sh_detail));
	})
//	？点击确定，获取地址
	$(".mbshop_orderAddressConfirm").on("click", function(){
		var $sh_name = $("#sh_name").val();
		var $province = $("#province :selected").html();
		var $city = $("#city :selected").html();
		var $zone = $("#zone :selected").html();
		var $sh_mobile = $("#sh_mobile").val();
		var $sh_detail = $("#sh_detail").val();
		var sh_name = "sh_name";
		var province = "province";
		var city = "city";
		var zone = "zone";
		var sh_mobile = "sh_mobile";
		var sh_detail = "sh_detail";
		addCookie(sh_name,$sh_name,5);
		addCookie(province,$province,5);
		addCookie(city,$city,5);
		addCookie(zone,$zone,5);
		addCookie(sh_mobile,$sh_mobile,5);
		addCookie(sh_detail,$sh_detail, 5);
		$(".shengchengdizhi").show();
		$(".shengchengdizhi .mbshop_orderTextStyle").html(getCookie(sh_name) + "&nbsp;&nbsp;" + getCookie(province)+
		getCookie(city) + getCookie(zone) + getCookie(sh_detail) + "&nbsp;&nbsp;" + getCookie(sh_mobile));
		$(".mbshop_orderAddressAdd").hide();
		$(".shengchengdizhi input").attr("checked", "checked")
	})
	//点击删除，删除地址
	$(".deletes_address").on("click", function(){
		$(this).parent().parent().remove();
		$(".mbshop_orderAddressAdd").hide();
		clearAddress();
	})
	//点击提交订单
	$("#submit_order").on("click", function(){
		var sh_name = "sh_name";
		var province = "province";
		var city = "city";
		var zone = "zone";
		var sh_mobile = "sh_mobile";
		var sh_detail = "sh_detail";
		if(checkCookie(sh_name) && checkCookie(province) && checkCookie(city) && checkCookie(zone) && checkCookie(sh_mobile) && checkCookie(sh_detail)){
			//更新cookiestate
			var myOrderState = "myOrderState";
			updateCookie(myOrderState, "1");
			window.location = "ordersubmit.html";
			
		} else {
			alert("请填写完整收货地址");
		}
	})
	//从cookie中取出商品信息
	function getShop(){
		var myProductNum = "myProductNum";
		var myProductZong = "myProductZong";
		var myProductPrice = "myProductPrice";
		var myProductColor = "myProductColor";
		var myProductNum = "myProductNum";
		var myProductSize = "myProductSize";
		$(".userOrderSizeColor").html(getCookie(myProductColor) + "<br />" + getCookie(myProductSize));
		$(".userOrderSizeColor").next().html(getCookie(myProductNum));
		var num = parseInt(getCookie(myProductNum)) * 25;
		$(".chuxiao b").html("￥" + num);
		$(".chuxiao").next().find("b").html(getCookie(myProductZong));
		var zongjia = getCookie(myProductZong).substr(1);
		$("#goods_total").html(zongjia);
		$("#payment").html(zongjia);
	}
	//从cookie中获取地址
	function getAddress(){
		var sh_name = "sh_name";
		var province = "province";
		var city = "city";
		var zone = "zone";
		var sh_mobile = "sh_mobile";
		var sh_detail = "sh_detail";
		if(checkCookie(sh_name) && checkCookie(province) && checkCookie(city) && checkCookie(zone) && checkCookie(sh_mobile) && checkCookie(sh_detail)){
			$(".shengchengdizhi").show();
			$(".shengchengdizhi .mbshop_orderTextStyle").html(getCookie(sh_name) + "&nbsp;&nbsp;" + getCookie(province)+
			getCookie(city) + getCookie(zone) + getCookie(sh_detail) + "&nbsp;&nbsp;" + getCookie(sh_mobile));
			$(".mbshop_orderAddressAdd").hide();
			$(".shengchengdizhi input").attr("checked", "checked")
		} else {
			$(".shengchengdizhi").hide();
//			$(".mbshop_orderAddressAdd").show();
		}
	}
	//清除cookie
	function clearAddress(){
		var sh_name = "sh_name";
		var province = "province";
		var city = "city";
		var zone = "zone";
		var sh_mobile = "sh_mobile";
		var sh_detail = "sh_detail";
		updateCookie(sh_name, "");
		updateCookie(province, "");
		updateCookie(city, "");
		updateCookie(zone, "");
		updateCookie(sh_mobile, "");
		updateCookie(sh_detail, "");
	}
	//地址
	function showLocation(province , city , town) {
	
		var loc	= new Location();
		var title	= ['省份' , '地级市' , '市、县、区'];
		$.each(title , function(k , v) {
			title[k]	= '<option value="">'+v+'</option>';
		})
		
		$('#province').append(title[0]);
		$('#city').append(title[1]);
		$('#zone').append(title[2]);
		
		$("#province,#city,#zone").select2()
		$('#province').change(function() {
			$('#city').empty();
			$('#city').append(title[1]);
			loc.fillOption('city' , '0,'+$('#province').val());
			$('#city').change()
		})
		
		$('#city').change(function() {
			$('#zone').empty();
			$('#zone').append(title[2]);
			loc.fillOption('zone' , '0,' + $('#province').val() + ',' + $('#city').val());
		})
		
		$('#zone').change(function() {
			$('input[name=location_id]').val($(this).val());
		})
		
		if (province) {
			loc.fillOption('province' , '0' , province);
			
			if (city) {
				loc.fillOption('city' , '0,'+province , city);
				
				if (town) {
					loc.fillOption('zone' , '0,'+province+','+city , town);
				}
			}
			
		} else {
			loc.fillOption('province' , '0');
		}
			
	}
})
