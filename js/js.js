$(document).ready(function(){

	if ($(window).width() <=935 ) {
		$('.carousel-indicators').replaceWith('<ol class="carousel-indicators"> <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li><li data-target="#carousel-example-generic" data-slide-to="1"></li><li data-target="#carousel-example-generic" data-slide-to="2"></li><li data-target="#carousel-example-generic" data-slide-to="3"></li></ol>');
	};
	
	
		document.querySelector('.btn-begin-demo').addEventListener('click', function(e){
		  e.preventDefault();
		  setTimeout(function() { $('.zzz').removeClass('d-none'); }, 5000);
		});

	



});

