$(function() {
	var wid=$(window).width();
	
	// if(wid<992){
	// 	$(".navbar").removeClass('fixed-top');
	// 	$(".middle").css("margin-top","20px");
	// }else if(wid>992){
	// 	$(".navbar").addClass('fixed-top');
	// }
	
	$(".pane-le .pane-tab li").each(function(i){
		if(i == i) {
			$(this).click(function(){
				var b=$(".pane-le .pane-tab li").index($(this)[0]);
				$(this).addClass('active').siblings().removeClass('active');
				$(".pane-ri .pane:eq("+b+")").addClass('active').siblings().removeClass('active');
				var d=$(".pane-ri .pane.active").height();
			});
		}
	});
	
	$(".pane-tabs li").each(function(i){
		if(i == i) {
			$(this).click(function(){
				var b=$(".pane-tabs li").index($(this)[0]);
				$(this).addClass('active').siblings().removeClass('active');
				$(".knowledge-body .panes:eq("+b+")").addClass('active').siblings().removeClass('active');
			});
		}
	});
});