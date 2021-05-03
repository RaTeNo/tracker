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
	$('body').on('click', '.greeting_link-more a.next', function (e) {		
		step++;
		if($(".acquaintance:eq("+step+")").length)
		{
			$(".acquaintance").hide();
			$(".acquaintance:eq("+step+")").show();

			$(".greeting_link").hide();
			$(".greeting_link:eq("+step+")").css("display", "inline-flex");

			$(".greeting_link a").removeClass("active");
			$(".question_wrap").hide();
		}
	});


	$('body').on('click', '.greeting_link-more a.prev', function (e) {	
		if(step>0)
		{	
			step--
			if($(".acquaintance:eq("+step+")").length)
			{
				$(".acquaintance").hide();
				$(".acquaintance:eq("+step+")").show();

				$(".greeting_link").hide();
				$(".greeting_link:eq("+step+")").css("display", "inline-flex");

				$(".greeting_link a").removeClass("active");
				$(".question_wrap").hide();
			}
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


	/*$('body').on('click', '.location_link a', function (e) {
		e.preventDefault();	
		$(".location_link a").removeClass("active");
		let id = $(this).data("id");
		let quest = $(this).data("quest");
		$(this).addClass("active");

		$(".location_link_addition").hide();
		$(".location_link_addition[data-id='"+id+"']").css("display", "flex");

		$(".location_block").hide();
		$(".location_block[data-id='"+quest+"']").show();
	});*/

	$('body').on('click', '.location_link a', function (e) {
		e.preventDefault();	
		$(".location_link a").removeClass("active");
		let id = $(this).data("id");
		let quest = $(this).data("quest");
		$(this).addClass("active");

		$(".location_link_addition").hide();
		$(".location_link_addition").css("display", "flex");

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



	let arraySearch = [];

	$(".location_block").each(function( index ) {
		let str = $(this).find(".location_block-title").text() + " " + $(this).find(".location_block-text").text();
		arraySearch.push(str.toLowerCase());
	});

	$(".input_search").keyup(function() {
		let find = $(".input_search").val().toLowerCase();
		if(find!="")
		{
			$(".location_block").hide();
			$(".location_link_addition a").hide();
			let k = 0;
			arraySearch.forEach(function(item, i, arr) {
				if(item.includes(find))
				{				
					k++;				
					$(".location_link_addition a[data-quest='"+(i+1)+"']").show();
				}			
			});
			if(k>0)
			{
				$(".location_link_addition").css("display", "flex");
			}
			else
			{
				$(".location_link_addition").hide();
			}
		}
		else
		{
			$(".location_link_addition").hide();
			$(".location_block").hide();
		}
	});



});
