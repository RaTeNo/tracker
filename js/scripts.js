$(document).ready(function(){
	
	$('body').on('click', '.modal_link', function (e) {
		e.preventDefault()

		$.fancybox.close(true)

		$.fancybox.open({
			src: $(this).data('content'),
			type: 'inline',
			touch: false
		})
	})

	let step = 0;
	$('body').on('click', '.greeting_link-more', function (e) {		
		step++;
		if($(".acquaintance:eq("+step+")").length)
		{
			$(".acquaintance").hide();
			$(".acquaintance:eq("+step+")").show();
		}

	});

	$('body').on('click', '.greeting_link a', function (e) {
		e.preventDefault();		
		$(".greeting_link a").removeClass("active");
		$(this).addClass("active");
		$(".question_wrap").hide();
		$(".question_wrap[data-id='"+$(this).data("id")+"']").show();
	});

	$('body').on('click', '.question .close', function (e) {
		$(this).parent().parent().hide();
		$(".greeting_link a").removeClass("active");
	});


	$('body').on('click', '.location_link a', function (e) {
		e.preventDefault();	
		$(".location_link a").removeClass("active");
		let id = $(this).data("id");
		let quest = $(this).data("quest");
		$(this).addClass("active");

		$(".location_link_addition").hide();
		$(".location_link_addition[data-id='"+id+"']").css("display", "flex");

		$(".location_block").hide();
		$(".location_block[data-id='"+quest+"']").show();
	});

	$('body').on('click', '.location_block .close', function (e) {
		$(this).parent().hide();
		$(".location_link a").removeClass("active");
	});
	
	$('body').on('click', '.link_date a', function (e) {
		e.preventDefault();	
		let day = $(this).data("day");
		let month = $(this).data("month");
		let year = $(this).data("year");
		let time = $(this).data("time");

		$("input[name='day']").val(day);
		$("input[name='month']").val(month);
		$("input[name='year']").val(year);
		$("input[name='time']").val(time);
	});
	
	$('body').on('click', '.close_page', function (e) {
		window.close(); return false;
	});
});