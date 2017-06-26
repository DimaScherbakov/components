$(".tabs").click(function(event)
	{
		event.preventDefault();
		
		var target = event.target;
		var li = target.closest(".tab__button-container__button");
		
		if (!li) return; //if click out of tab-button, it's not interesting for us
		
		var liCurrent = $(li).index();
		var content = $(".tab__content").eq(liCurrent);
		console.info(content);
		$(".tab__content").removeClass("active");
		content.addClass("active");
		// console.info(liCurrent);

	});