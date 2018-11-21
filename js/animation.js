$(function(){
	$('#trigger01').on('inview', function(event, isInView){
		if (isInView) {
		$(".content01_inner_bg").animate({opacity: 1}, 700);
		}
	});
	$('#trigger02').on('inview', function(event, isInView){
		if (isInView) {
		$(".content02_inner_bg").animate({opacity: 1}, 700);
		}
	});
});