jQuery(document).ready(function() {
	/*
	 * Replace all SVG images with inline SVG
	 */
	jQuery('img.svg').each(function() {
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var $svg = jQuery(data).find('svg');

			// Add replaced image's ID to the new SVG
			if (typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Replace image with new SVG
			$img.replaceWith($svg);
		});

	});
})

/*关闭提示框*/
function close_instruction(instruction_id) {
	var div_first = document.getElementById(instruction_id);
	div_first.style.display = "none";
}
function open_instruction(canshu) {
	var div_first = document.getElementById(canshu);
	div_first.style.display = "block";
}
/*交易方式判定区域显示不同界面*/
window.onload = function() {
	var area = "曲阜师范大学";
	var div_pay_way = document.getElementById("pay-way");
	if (area_true(area)) {
		// alert("成功");
		var strHTML = "<div class='row' style='margin-bottom: 2.5vw;'>";
		strHTML += "<div class='col-6' style='margin-top: 2.5vw;'>";
		strHTML += "<label>";
		// <input type="checkbox" class="custom-checkbox">
		strHTML += "<input type='checkbox' name='platform' class='custom-checkbox'/>";
		strHTML += "<a style='color: var(--sColor);font-size: 3vw;font-weight: bold;'>平台交易</a>";
		strHTML += "</label>";
		strHTML += "</div>";
		strHTML += "<div class='col-6' style='margin-top: 2.5vw;'>";
		strHTML += "<label>";
		strHTML += "<input type='checkbox' name='f2f' class='custom-checkbox'/>";
		strHTML += "<a style='color: var(--sColor);font-size: 3vw;font-weight: bold;'>当面交易</a>";
		strHTML += "</label>";
		strHTML += "</div>";
		strHTML += "</div>";
		strHTML += "</label>";
		div_pay_way.innerHTML = strHTML;
	} else {
		var strHTML = "<div class='row' style='margin-bottom: 2.5vw;'>";
		strHTML += "<div class='col-6' style='margin-top: 2.5vw;'>";
		strHTML += "<label>";
		strHTML += "<svg class='icon' aria-hidden='true' style='font-size:4vw;color: var(--sColor);vertical-align: bottom'>";
		strHTML += "<use xlink:href='#icon-cuowu'></use>";
		strHTML += "</svg>";
		strHTML += "<a style='color: var(--sColor);font-size: 3vw;font-weight: bold;'>平台交易</a>";
		strHTML +=
			"<svg class='icon' aria-hidden='true' style='font-size:4vw;color: var(--fColor);vertical-align: bottom' onclick='open_instruction(\"instruction-second\")'>";
		strHTML += "<use xlink:href='#icon-yiwen'></use>";
		strHTML += "</label>";
		strHTML += "</div>";
		strHTML += "<div class='col-6' style='margin-top: 2.5vw;'>";
		strHTML += "<label>";
		strHTML += "<input type='checkbox' name='f2f' class='custom-checkbox'/>";
		strHTML += "<a style='color: var(--sColor);font-size: 3vw;font-weight: bold;'>当面交易</a>";
		strHTML += "</label>";
		strHTML += "</div>";
		strHTML += "</div>";
		strHTML += "</label>";
		div_pay_way.innerHTML = strHTML;
	}
}
/*区域判定函数*/
function area_true(area) {
	if (area == "曲阜师范大学") {
		return true;
	} else {
		return false;
	}
}
/*个人对话框添加图片语音上拉弹出框MEssage-dialog*/
var content_liu = false;
function show_liu() {
	// alert(content_liu);
	var xinzeng=document.getElementById("xinzeng-liu");
	var markliu = document.getElementsByClassName('mark-liu')[0];
	var bottomliu = document.getElementsByClassName('bottom-liu')[0];
	var fColor=document.getElementById("tupian").style.color;
	var sColor=document.getElementById("yuyin").style.color;
	// alert(fColor);
	// alert(sColor);
	// var cdliu = document.getElementsByClassName('container-dialog-liu')[0];
	if (content_liu) {
		markliu.style.display = "none";
		xinzeng.style.color=sColor;
		content_liu = false;
	} else {
		markliu.style.display = "";
		xinzeng.style.color=fColor;
		content_liu = true;
	}
}
/*长按出现语音条*/
function liudown(elmnt){
	var vliu = document.getElementsByClassName("voice-liu")[0];
	vliu.style.display = "";
}
function liuup(elmnt){
	var vliu = document.getElementsByClassName("voice-liu")[0];
	vliu.style.display = "none";
}
// var vliu = document.getElementsByClassName("voice-liu")[0];
// function myFunction(elmnt,clr){
// 	var yyliu = document.getElementById('yuyin');
// 	elmnt.style.display= "clr";
// }
