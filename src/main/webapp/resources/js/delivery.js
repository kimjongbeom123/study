$(function(){
	
	$("#deliveryDelete").on("click", function(e){
		
		$("#checkForm").attr("action","deliveryDelete");
		
		$("#checkForm").submit();
	});

})