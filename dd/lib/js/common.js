$(function(){
	
	var award_auto;
	/* --- link pass --- */
	$('input[type="submit"]').click(function(event) {
	    event.preventDefault();   
	    return false
	});
		
	$('#find_top').click(function(){
		if(!$(this).is('.on')){
			$('#hide_top').animate({
				'height':'120px'
			},function(){
				$('#find_top').addClass('on')
			})
		}else if($(this).is('.on')){
			$('#hide_top').animate({
				'height':'0'
			},function(){
				$('#find_top').removeClass('on')
			})
		}
	})
	
	$('#top .top_menu_button .search_button').click(function(){
		$(this).css('display','none');
		$('#top .top_menu_button span').css('display','block').animate({
			'width':'182px'
		});
		$('#top .top_menu').animate({'left':'405px'})
	})
	
	$('#top #bng .first_bng>li').on({
		mouseenter:function(){
			$(this).addClass('on')	
		},
		mouseleave:function(){
			$(this).removeClass('on')
		}
	})
	
	$('#top  #bng .first_bng li').on({
		mouseenter:function(){
		var bng_bgh1=$(this).find('.dl_list').outerHeight()
		$('#top .gnb_1').css({'height':bng_bgh1})
		$('#top .gnb_bg').css('display','block')
		},
		mouseleave:function(){
			$(this).parents().find('.gnb_bg').css('display','none')
		}
	})
	
	var idx=0;
	$('.footer_button .btn_dot button').click(function(){
		var his=idx;
		idx=$(this).index();
		auto_footer(0,'-100%',his);
		auto_footer('100%',0,idx);	
	})
	
	award_auto=setInterval(rolling,3000);
	
	
	function rolling(){
		auto_footer(0,'-100%',idx);
		idx++;
		auto_footer('100%',0,idx);
	}
	
	
	
	$('.play').click(function(){
		
		$(this).toggleClass('pause');
		if($(this).is('.pause')){
			clearInterval(award_auto);
		}else{
			award_auto=setInterval(function(){
				auto_footer(0,'-100%',idx);
				idx++;
				auto_footer('100%',0,idx);
			},3000)
		}
	})
	
	function auto_footer(start,end,index){
		var select = $('.btn_dot button');
		
		select.eq(index).addClass('on').siblings().removeClass('on');
		
		$('.footer_award li').eq(index).css({'display':'block','left':start})
		.stop().animate({
			'left':end
		});
		
		if(index==select.size()){
			idx=0;
			auto_footer('100%',0,idx);
		}
	}
	
	
	
})