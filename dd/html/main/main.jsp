<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
	<%@ include file="/html/inc/head.jsp" %>
	<link rel="stylesheet" href="lib/css/main.css" media="all" />
	<script src="lib/js/main.js"></script>
</head>
<body>
<%@ include file="/html/inc/header.jsp" %>
<div id="main_container">
	<div class="main_content">
		<div class="main_light">
			<span class="main_light_img"></span>
			<h2>Delieciously Merry</h2>			
		</div>
		<span id="more_btn"><a href="">자세히 보기</a></span>
		<div class="main_coffee01"></div>
		<span class="main_coffee01_text">크리스마스 바닐라 티 라떼</span>
				<div class="main_coffee02"></div>
		<span class="main_coffee02_text">헤이즐넛 크런치 모카</span>
				<div class="main_coffee03"></div>
		<span class="main_coffee03_text">토피 넛 라떼</span>
	</div>
	<div class="main_bar01">
		<div id="content_wrap">
			<a href="">"MY e-프리퀀시" 현황을 확인해 보세요!</a>
			<i></i>
		</div>
	</div>
	<div class="main_bar02">
		<div class="main_bar02_bgb"></div>
		<div class="main_bar02_bgw"></div>
		<div id="content_wrap">
			<div class="main_bar02_l">
				<div class="main_bar02_l_inner">	
					<dl>
						<dt>
							<img src="lib/images/starbucks_main/notice_ttl.png" alt="공지사항" />
						</dt>
						<dd>
							<ul>
								<li><a href="javascript:void(0)">   스타벅스커피 코리아 모바일 애플리케이션 리뉴얼 런칭 안내</a></li>
								<li><a href="javascript:void(0)">   홈페이지 개인정보취급방침 개정 안내</a></li>
								<li><a href="javascript:void(0)">   [당첨자 발표]애플리케이션 리뉴얼 오픈기념_페이스북 Shake to Pay 영상 콘테스트</a></li>
								<li><a href="javascript:void(0)">   [당첨자 발표] 2015스타벅스 플래너와 함께하는 인스타그램 10월 이벤트 발표</a></li>
								<li><a href="javascript:void(0)">   스타벅스커피 코리아 10월 30일 이프리퀀시 외 업데이트 안내</a></li>
							</ul>
						</dd>
					</dl>
					<div class="notice_more">
						<span><a href="">더보기</a></span>
					</div>
				</div>	
			</div>
			<div class="main_bar02_r">
				<a href="">
					<div>스타벅스 프로모션</div>
					<span>
						<img src="lib/images/starbucks_main/btn_prom_down.png" alt="더보기" />
					</span>
				</a>
			</div>
		</div>
	</div>
	<div class="hide_promotion">
		<div id="wrap">
			<div class="promotion_btn_l">
				<button class="hide_promotion_l"></button>
			</div>
			
			<ul>
				<li class="on">
					<div><img src="lib/images/starbucks_main/promotion1.jpg" alt="" /></div>
					<span class="notice_more"><a href="">자세히 보기</a></span>
				</li>
				<li>
					<div><img src="lib/images/starbucks_main/promotion2.jpg" alt="" /></div>
					<span class="notice_more"><a href="">자세히 보기</a></span>
				</li>
				<li>
					<div><img src="lib/images/starbucks_main/promotion3.jpg" alt="" /></div>
					<span class="notice_more"><a href="">자세히 보기</a></span>
				</li>
				<li>
					<div><img src="lib/images/starbucks_main/promotion4.jpg" alt="" /></div>
					<span class="notice_more"><a href="">자세히 보기</a></span>
				</li>
				<li>
					<div><img src="lib/images/starbucks_main/promotion5.jpg" alt="" /></div>
					<span class="notice_more"><a href="">자세히 보기</a></span>
				</li>
				<li>
					<div><img src="lib/images/starbucks_main/promotion6.jpg" alt="" /></div>
					<span class="notice_more"><a href="">자세히 보기</a></span>
				</li>
				<li>
					<div><img src="lib/images/starbucks_main/promotion7.jpg" alt="" /></div>
					<span class="notice_more"><a href="">자세히 보기</a></span>
				</li>
			</ul>
			<div class="promotion_btn_r">
				<button class="hide_promotion_r"></button>
			</div>
		</div>	
		
		<div class="hide_promotion_btn">
			<div class="hide_auto_btn">
				<button class="stop"></button>
			</div>
			<div class="hide_btn_dot">
				<button class="on"></button>
				<button></button>
				<button></button>
				<button></button>
				<button></button>
				<button></button>
				<button></button>
			</div>
		</div>
	</div>
	<div class="main_myrewards">
		<div class="bg1"></div>
		<div class="bg2"></div>
		<div id="wrap">
			<div class="main_myrewards_bg">
				<img src="lib/images/starbucks_main/reward_logo.png" alt="" />
			</div>
			<div class="main_myrewards_text">
				<img src="lib/images/starbucks_main/reward_txt.png" alt="" />
			</div>
			<div class="main_myrewards_btn">
				<ul>
					<li><a href="javascript:void(0)">회원가입</a></li>
					<li><a href="javascript:void(0)">로그인</a></li>
				</ul>
			</div>
		</div>
	</div>	
</div>
<%@ include file="/html/inc/footer.jsp" %>
</body>
</html>