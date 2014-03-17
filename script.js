$(document).ready(function() {

	$(".toggle-col").bind("click",function(){
		$(this).siblings().removeClass("toggle-col-isactive");
		$(this).addClass("toggle-col-isactive");
		var cellIndex = $(this).index();
		var headerIndex = $(this).index() + 1;
		$(this).parent().next("table").find("tr").each(function(){
			$(this).find(".col-isactive").removeClass("col-isactive");
			$(this).find("td:eq(" + cellIndex + ")").addClass("col-isactive");
			$(this).find("th:eq(" + headerIndex + ")").addClass("col-isactive");
		});
		return false;
	});

});