/*$('.gnb li').mouseenter(function(){
	alert('aaa');
	
});*/


/*GNB메뉴 두뎁스 제이쿼리*/
$('.gnb li').mouseenter(function(){
	$(this).children('.submenu').stop().show();
});
$('.gnb li').mouseleave(function(){
	$(this).children('.submenu').stop().hide();
});


