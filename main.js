function showpage(page) {
	$("#page1").hide();
	$("#page2").hide();
	$("#page3").hide();
	if (page === 1) {
		$("#page1").show();
	} else if (page === 2) {
		$("#page2").show();
	} else if (page === 3) {
		$("#page3").show();
	}
};
