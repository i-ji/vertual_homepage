'use strict';

{
 // 浮き上がる処理
 function inViewCallback(entries,obs) {
 	entries.forEach(function(entry){
 		if(!entry.isIntersecting) {
 			return;
 		}
 		entry.target.classList.add('appear');
 	})
 	obs.unobserve(entry.target);
 }

 const inViewObserver = new IntersectionObserver(inViewCallback,{threshold:0.2});

 document.querySelectorAll('.animate').forEach(function(el){
 	inViewObserver.observe(el);
 })

 // ヘッダー処理
 function onScrollCallback(entries) {
 	entries.forEach(function(entry){
 	  if(!entry.isIntersecting) {
 	  	header.classList.add('scrolled');
 	  } else {
 	  	header.classList.remove('scrolled');
 	  }
 	  // header.classList.add('scrolled');
 	})
 }

 const header = document.querySelector('header');

 const onScrollObserve = new IntersectionObserver(onScrollCallback);

 onScrollObserve.observe(document.getElementById('target'));


 // ロゴを押すと上に戻る処理
 document.querySelector('.logo').addEventListener('click',function(e){
 	e.preventDefault();

 	window.scrollTo({
 		top:0,
 		behavior:'smooth'
 	})

 })
 

 // スライドショー
 const images = document.querySelectorAll('.hero .slider img');
 let currentIndex = 0;

function play() {
  setTimeout(function(){
 	images[currentIndex].classList.remove('current');
 	currentIndex++;
 	if(currentIndex > images.length - 1) {
 		currentIndex = 0;
 	}
 	images[currentIndex].classList.add('current');
 	play();
 	},5000)
}

play();



 $(function() {

  	// ハンバーガーメニュー
  	$('#open').on('click',function(){
	  $('#overlay').removeClass('hide');
	  $('#mask').removeClass('hide');
	  $('header .sp-menu i').addClass('hide');
	})

	$('#mask').on('click',function(){
	  $('#overlay').addClass('hide');
	  $('#mask').addClass('hide');
	  $('header .sp-menu i').removeClass('hide');
	})

	$('#overlay ul a').on('click',function(){
	  $('#overlay').addClass('hide');
	  $('#mask').addClass('hide');
	  $('header .sp-menu i').removeClass('hide');
	})

	// アコーディオンメニュー
	$('.sp-foodmenu .accordion').on('click',function(){
		$(this).next().slideToggle();
		$(this).toggleClass('show');
	})

	// スムーズスクロール
	$('a[href^="#"]').click(function(){
	    　var speed = 500;　
	      var href= $(this).attr("href");	
	      var target = $(href == "#" || href == "" ? 'html' : href);
	      var position = target.offset().top;
	      $("html, body").animate({scrollTop:position}, speed, "swing");
	      return false;
	  });
	})  
  
}