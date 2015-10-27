$(function(){

	$('.content>section:odd').css('background-color','#f3f3f3');

	/*아래 부터 스크립트시작*/
	//1번문제
	$('header ul li').mouseenter(function(){
		$(this).css('background','#677b8a').find('a').css('color','#fff').parent().siblings().css('background','#CCCCCC').find('a').css('color','#000')
	}).mouseleave(function(){
		$(this).css('background','#CCCCCC').find('a').css('color','#000')
	})

	//2번문제
		var mencon=[]
	 $('.content section').each(function(i,e){
	   mencon.push($(e).offset().top)
	 })
	 $('header nav ul li').click(function(){
	  var idx=$(this).index()

	  $('body,html').animate({
	   scrollTop:mencon[idx]
	  })
	 })

	//3번문제(slide)
	 var bbb=$('.slidebanner ul li')
	 var idx=Math.floor(Math.random()*bbb.size())
	 bbb.eq(idx).addClass('on').find('img').css('display','block')
	 function movement(st,end,index){
			  $('.slidebanner ul li').eq(index).addClass('on').find('img').css({
				  'display':'block',
				  'left':st
			  }).stop().animate({
				  'left':end
			  }).parent().siblings().removeClass('on')
			  if(index==$('.slidebanner ul li').size()){
				  idx=0
				  movement('100%','0',idx)
			  }else if(index<0){
				  idx= $('.slidebanner ul li').size()-1
				  movement('-100%','0',idx)
			  }
	 }
	 $('.slidebanner .next').click(function(){
		 movement('0','-100%',idx)
		 idx++
		 movement('100%',0,idx)
	 })
	 $('.slidebanner .prev').click(function(){
		 movement('0','100%',idx)
		 idx--
		 movement('-100%',0,idx)
	 })

	$('.d-type .slidebanner li a').click(function(){
		idx=$('.slidebanner li.on').index()
		var aaa=$(this).parent().index()

 		if (idx<aaa) {
 			movement(0,'-100%',idx)
			movement('100%',0,aaa)
 		}else if (idx>aaa) {
 			movement(0,'100%',idx)
			movement('-100%',0,aaa)
 		}else {

 		}
		return false
	})
	var slidemove=setInterval(function(){
		$('.slidebanner .prev').click()
	},1000)
	$('.slidebanner ul').on({
		mouseenter:function(){
			clearInterval(slidemove)
		},mouseleave:function(){
			slidemove=setInterval(function(){
			   $('.slidebanner .prev').click()
		   },1000)
		}
	})
	//4번문제(fade)
	var fadeidx=0
	function fadeinout(){
		$('.fadebanner li').eq(fadeidx).addClass('on').find('img').fadeIn().parent().siblings().removeClass('on').find('img').fadeOut()
		fadeidx++
		if(fadeidx==$('.fadebanner li').size()){
			fadeidx=0
		}
	}
	var auto=setInterval(function(){fadeinout('next')},1000)
	$('.fadebanner ul').on({
		mouseenter:function(){
			clearInterval(auto)
		},mouseleave:function(){
			auto=setInterval(function(){fadeinout('next')},1000)
		}
	})
	$('.fadebanner li a').click(function(){
		fadeidx=$(this).parent().index()
		$('.fadebanner li').eq(fadeidx).addClass('on').find('img').fadeIn().parent().siblings().removeClass('on').find('img').fadeOut()
		return false
	})


	//5번문제(youtube)

	$('.f-type ul li').click(function(){
		$(this).css('opacity','0.5').siblings().css('opacity','1')
		var movlist=$(this).children('a').attr('href')
		var movurl="https://www.youtube.com/embed/"+movlist+"?rel=0&amp;controls=0&amp;showinfo=0"
		$('.f-type .movie-view iframe').attr('src',movurl)
		return false
	})

	//6번문제(wingbanner)
	$(window).resize(function(){
		wingbanner()
	})

	$(window).scroll(function(){
		var wingp=$(this).scrollTop()
		$('.wing').stop().animate({
			top:wingp
		})
	})

	$(window).trigger('resize')

	function wingbanner(){
		$('.wing').css('right',20)
	}

	//7번문제


	function blind(){
		$('body').append('<div class="blind"></div>')
		$('.blind').css({'width':'100%','height':'100%','position':'fixed','left':0,'top':0,'background-color':'#000','display':'none'})
		$('.blind').fadeTo(1000,0.5)
	}
	function poP(box){
		blind()
		var boxWidth=box.width()
		var boxHeight=box.height()
		box.append('<button class="close">close</button>')
		box.css({'position':'absolute','left':'50%','margin-left':-boxWidth/2,'top':'50%','margin-top':-boxHeight/2,'z-index':1,'dispaly':'block'})
		box.fadeIn(1000,function(){
			$(this).animate({top:'50%'},function(){
				$(this).animate({top:'20%'},1000)
			})
		})
	}
	$('.btngroup button').click(function(){
		var idx=$(this).index()/2
		alert(idx)
		poP($('.pop').eq(idx))

	})




})
