/*!
 * ABS-CBN Universal hub
 * ABS-CBN Corporation 2016
 */

//container of scheduled shows
var selectShows = document.querySelector(".toggle-shows-list");
//score board function
var selectItem = document.querySelector(".selector-item");
var selectList = selectItem.querySelectorAll("li");
//select list-schedules board
var pointSchedule = document.querySelectorAll("#schedules");
var listSchedules = document.querySelectorAll(".schedules");
//select list-scores board
var pointScore = document.querySelectorAll("#scores");
var listScores = document.querySelectorAll(".scores");

var UNIVERSALHUB = (function($){
  'use strict';
  //show-list of scheduled shows
  function selectListShows(){
    var selectList = selectShows.querySelectorAll("li");
    var getValue = function(event){
      var target = event.target;
      var index = target.getAttribute("data-value");
      var getShowsList = document.getElementsByClassName("show-list");
      var buttonCurrent = document.querySelector(".toggle-shows");
      buttonCurrent.innerHTML = target.innerHTML + "<img src='theme/images/arrow-down.png' alt='arrow'>";
      for(var x = 0; x < getShowsList.length; x++){
        getShowsList[x].style.display = "none";
      }
      getShowsList[index].style.display = "block";
    }
    selectShows.addEventListener("click", getValue);
  }
  function selectBoard(){
    var getValue = function(event){
      var target = event.target;
      var index = target.getAttribute("data-value");
      var getBoard = document.getElementsByClassName("score-board");
      var buttonCurrent = document.querySelector(".select-item");
      buttonCurrent.innerHTML = target.innerHTML + "<img src='theme/images/arrow-down.png' alt='arrow icon'>";
      for(var x = 0; x < getBoard.length; x++){
        getBoard[x].style.display = "none";
      }
      getBoard[index].style.display = "block";
      pointSchedule[index].className = "";
      listScores[index].style.display = "block";
      listSchedules[index].style.display = "none";
      pointScore[index].className = "active";
    }
    selectItem.addEventListener("click", getValue);
  }
  //selection of schedule in score-boards
  function selectSchedules(){
    var getSchedules = function(event){
      var target = event.target;
      var index = target.getAttribute("data-value");
      for(var x = 0; x < listSchedules.length; x++){
        listSchedules[x].style.display = "none";
        listScores[x].style.display = "none";
      }
      pointScore[index].className = "";
      pointSchedule[index].className = "active";
      listSchedules[index].style.display = "block";
    }
    for(var x = 0; x < pointSchedule.length; x++){
      pointSchedule[x].addEventListener("click", getSchedules);
    }
  }
  //selection of scores in score-boards
  function selectScores(){
    var getScores = function(event){
      var target = event.target;
      var index = target.getAttribute("data-value");
      for(var x = 0; x < listSchedules.length; x++){
        listSchedules[x].style.display = "none";
        listScores[x].style.display = "none";
      }
      pointSchedule[index].className = "";
      pointScore[index].className = "active";
      listScores[index].style.display = "block";
    }
    for(var x = 0; x < pointSchedule.length; x++){
      pointScore[x].addEventListener("click", getScores);
    }
  }
  function ticker_closefy() {
    $('#btn-close').click(function(e){
      e.preventDefault();
      $('.ticker-block').fadeOut(function(){
        clearInterval(timer);
        $(this).remove();
      });
    });
  }
  // INITIALIZER
  function init() {
    selectListShows();
    selectBoard();
    selectSchedules();
    selectScores();
    ticker_closefy();
  }
  return {
    init:init
  };
}(jQuery));
jQuery(document).ready(function($) { 
  UNIVERSALHUB.init(); 
});

//ticker
setInterval(function() {
     var firstLi = $('.ticker li').first().detach()
    $('.ticker').append($(firstLi)).hide().show('slow');
 }, 3000);

//initialize sticky note
toggleSticky();
$(window).on("scroll", function(){
	toggleSticky();
});
function toggleSticky(){
	var socialMediaTop = $("#fixMarker").offset().top;
	if ($(window).scrollTop() >= socialMediaTop) {
		$("#stickyMedia").addClass('sticky');
	} else {
		$("#stickyMedia").removeClass('sticky');
	}
};

//toggle selector function
$(document).ready(function(){
	$(".toggle-shows").click(function(){
		$(".toggle-shows-list").find('li').slideToggle();
	});
	$(".select-item").click(function(){
		$(".selector-item").find("li").slideToggle();
	});
});

//load more icon function
window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight - 5) {
      $(".load-more").css("display","block");
    } 
};

//scroll to top
$('.to-top-icon').click(function() {
  var div = $('.scroll');
  var pos = div.offset().top;
  $('html, body').animate({scrollTop:pos},1000); 
});

//SLICK FUNCTIONS
//window resize for slick and slick functions
$(window).on("orientationchange", function(){
  window.location.reload();
});
var windowWidth = 0;
$( window ).on("resize",function() {
  window.windowWidth = $(window).width();
	if(windowWidth <= 728){
		$('.lazy').slick({
		  dots: false,
		  infinite: true,
		  lazyLoad: 'ondemand',
		  slidesToShow: 2,
		  slidesToScroll: 2,
		  variableWidth: true,
		  arrows: false,
		  centerMode: true,
		  centerPadding: '20px'
		});
	}
});
$('.news-stand').slick({
  infinite: true,
  dots: true,
  slide: "article",
  prevArrow: false,
  nextArrow: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4
});
$('.slick-case').slick({
  infinite: true,
  dots: true,
  slide: "article",
  prevArrow: false,
  nextArrow: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3
});

