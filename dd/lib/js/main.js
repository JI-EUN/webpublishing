$(function(){
	
	function notice_on(){
		$('.main_bar02_l_inner ul li').first().addClass('on')
	}	
	function notice_auto(){
		notice_on()
		$('.main_bar02_l_inner ul li').is('.on').css('top','100%').animate({'top':0})
		
	}
	
	notice_auto()
})