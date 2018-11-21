$(function(){
	$('#trigger01').on('inview', function(event, isInView){
		slideBG()
			.then(fadeContents)

		function slideBG(){
			var d = new $.Deferred;
			$(".content01_inner_bg").show().animate({
				width:"80%"
			},400, function(){
				d.resolve();
			});
			return d.promise();
		}

		function fadeContents(){
			var d = new $.Deferred;
			$("#fa").animate({
				opacity : 1
			},900, function(){
				d.resolve();
			});
			return d.promise();
		}
	});
});