function CountDownTime(mainId,str) {
	this.show = function() {
		showT();
		function showT(){
			var timeStart = new Date().getTime();
			var timeEnd = new Date(str).getTime();
			//计算时间差
			var time_distance = timeEnd - timeStart;
			var int_day = Math.floor(time_distance / 86400000);
			time_distance -= int_day * 86400000;
			// 时
			var int_hour = Math.floor(time_distance / 3600000);
			time_distance -= int_hour * 3600000;
			// 分
			var int_minute = Math.floor(time_distance / 60000);
			time_distance -= int_minute * 60000;
			// 秒 
			var int_second = Math.floor(time_distance / 1000);
			if (int_day < 10) {
				int_day = "0" + int_day;
			}
			if (int_hour < 10) {
				int_hour = "0" + int_hour;
			}
			if (int_minute < 10) {
				int_minute = "0" + int_minute;
			}
			if (int_second < 10) {
				int_second = "0" + int_second;
			}
//			$("#"+mainId+".time_item").find(".day_show").html(int_day);
//			$("#"+mainId+".time_item").find(".hour_show").html(int_hour);
//			$("#"+mainId+".time_item").find(".minute_show").html(int_minute);
//			$("#"+mainId+".time_item").find(".second_show").html(int_second);
			$("#"+mainId+" .hour_show").html(int_hour);
			$("#"+mainId+" .minute_show").html(int_minute);
			$("#"+mainId+" .second_show").html(int_second);

		}
		window.setInterval(showT, 1000)
	}
}