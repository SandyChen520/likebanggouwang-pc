$(function(){
		var count = new CountDownTime("banner", "2016/02/25 12:00:00");
		var timer = "";
		var index = 0;
		count.show();
		//banner下所有图片划过时半透明
		$("#banner img").hover(function(){
			$(this).fadeTo(30,0.7);
		},function(){
			$(this).fadeTo(30,1);
		});
		//划过banner区域时显示按钮
		$(".banner-left").hover(function(){
			$(".banner-left span").fadeIn();
		},function(){
			$(".banner-left span").fadeOut();
		})
		//图片轮播
		var imgLength = $(".bannerList li").length;
//			alert(imgLength)
		for (var i = 0; i < imgLength; i++) {
				$(".bannerList li").eq(i).css({
					"zIndex": imgLength - i
				});
			}
		function autoPlay(_index) {
				$(".bannerList li").eq(_index).fadeIn().siblings().fadeOut();
				$(".bubble").find("a").removeClass("bannerleftchange");
				$(".bubble").find("a").eq(_index).addClass("bannerleftchange");
		}
		//自动播放
		timer = setInterval(function() {
				$(".banner-btn-right").click();
			}, 2000);
		//鼠标划入banner区域时，清除定时器
		
		clearTimer($(".banner-left"));
		function clearTimer($ele) {
				$ele.hover(function() {
					clearInterval(timer);
				}, function() {
					timer = setInterval(function() {
						$(".banner-btn-right").click();
					}, 2000);
				})
		}
		//鼠标划过banner下方的字时更换图片
		$(".bubble li").hover(function(){
			index = $(this).index();
			$(this).find("a").addClass("bannerleftchange").siblings().removeClass("bannerleftchange");
			autoPlay(index);
		})
		//点击按钮时更换图片
		$(".banner-btn-left").on("click", function() {
				index--;
				if (index < 0) {
					index = imgLength - 1;
				}
				autoPlay(index);
			});
		$(".banner-btn-right").on("click", function() {
			index++;
			if (index > imgLength - 1) {
				index = 0;
			}
			autoPlay(index);
		});
		
		
		
		
		
		
		
		
		
		//nav中的点击图片滚动效果
		$(".nav-span-position span").on("click", function(){
			var $that = $(this).attr("class");
			if($that == "nav-span-left"){
				$(".nav-position ul").stop().animate({
					left: "0px"
				},"slow")
			} else{
				$(".nav-position ul").stop().animate({
					left: "-1200px"
				},"slow")
			}
		})
		//nav下所有图片划过时半透明
		$("#nav a").hover(function(){
			$(this).fadeTo(30,0.7);
		},function(){
			$(this).fadeTo(30,1);
		});
		$("#nav img").hover(function(){
			$(this).fadeTo(30,0.7);
		},function(){
			$(this).fadeTo(30,1);
		});
		//楼梯下所有图片划过时半透明
		$(".floorcon-left-text a").hover(function(){
			$(this).fadeTo(30,0.7);
		},function(){
			$(this).fadeTo(30,1);
		});
		$(".floor-wrap img").hover(function(){
			$(this).fadeTo(30,0.7);
		},function(){
			$(this).fadeTo(30,1);
		});
		
		
		
		
		
		
		
		
		
		
		
		
		
})
