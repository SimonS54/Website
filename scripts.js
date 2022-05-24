window.onscroll = function() {myScroll()};
function myScroll(){
	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  	var scrolled = (winScroll / height) * 100;
  	document.getElementById("Progbar").style.width = scrolled + "%";
}