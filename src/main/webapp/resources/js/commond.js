$(function(){
	$(".main_category img,.cntMinus, .cntAdd")
		.css("cursor", "pointer")
		.css("padding","0px");
	
	
	$(".back").css("cursor","pointer").click(function(){
		window.history.back();
	})
	

	$(".cntAdd").click(function(){
		var price = $(".p-detail-price").attr("data-price");
		var num = Number($("#amt").attr("data-amt"));
		var num = num + 1;
		$("#amt").text(num + "개");
		$(".cartBtn").text(num + " 개 담기");
		$(".detail-footer-cartBtn>span:last-child").text(price * num + "원");
		$("#amt").attr("data-amt", num);
	})
	
	$(".cntMinus").click(function(){
		var price = $(".p-detail-price").attr("data-price");
		var num = Number($("#amt").attr("data-amt"));
		if(num == 1) {
			return false;
		}
		var num = num - 1;
		
		$("#amt").text(num + "개");
		$(".cartBtn").text(num + " 개 담기");
		$(".detail-footer-cartBtn>span:last-child").text(price * num + "원");
		$("#amt").attr("data-amt", num);
	});
	
});