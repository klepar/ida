$(document).ready(function(){
$('button.btn.btn-compare.1').click(function() {
				$.cookie("porownanie", "jeden", {
			        path: '/'
			    });
});
});

$(document).ready(function(){
$('button.btn.btn-compare.2').click(function() {
				$.removeCookie("porownanie");
				$.cookie("porownanie", "dwa", {
			        path: '/'
			    });
});
});

$(document).ready(function(){
$('.panel-comparing-close').click(function() {
				$.removeCookie("porownanie");
				
});
});



