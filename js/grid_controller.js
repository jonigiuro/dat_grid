var gap=20;
function resize_liquids(liquid, tot_liquid){
	wrapper_width = $('.wrapper').width();
	tot_static = 0;
	tot_liquid = 0;
	//console.log(liquid.parent().children())
	liquid.parent().children().each(function(){
		if($(this).hasClass('liquid') == false){
			tot_static += $(this).width();	
		}
		tot_static += gap;
	});
	tot_static -= gap;
	//remaining_width = wrapper_width - ((10 - tot_liquid) * 76) - (9 * 20);
	remaining_width = wrapper_width - tot_static;
	liquid.each(function(){
		if($(this).attr('data-span') != null){
			tot_liquid += 1 * $(this).attr('data-span');
		}else{
			tot_liquid += 1;
		}
	});
	percento = ((remaining_width / wrapper_width * 100 ) / tot_liquid);
	liquid.each(function(){
		if($(this).attr('data-span') != null){
			//console.log('quid')
			$(this).css('width', percento * $(this).attr('data-span') + '%');
		}else{
			$(this).css('width', percento + '%');
		}
	});
}
$(window).resize(function(){
	if($(window).width() > 1024){
		$('.row').each(function(){
			liquid = $(this).find('.liquid');
			resize_liquids(liquid, liquid.length);
		});
	}
});

$(document).ready(function(){
	if($(window).width() > 1024){
		$('.row').each(function(){
			liquid = $(this).find('.liquid');
			resize_liquids(liquid, liquid.length);
		});
	}

		
});