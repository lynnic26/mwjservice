$(document).ready(function(){
	var posThreshold = 300;

	checkPostion(posThreshold);

	$(window).on('scroll',function(){
           checkPostion(posThreshold);
	});

	$('#backTop').on('click',function(){
		$('html,body').animate({
			scrollTop :0
		},800);
	});

	function checkPostion($pos){
		var top = $(window).scrollTop();
		if(top>$pos){
			$('#backTop').fadeIn();
		}else{
			$('#backTop').fadeOut();
		}
	}

	window.scrollReveal = new scrollReveal({reset: true});

	$('a.page-scroll').on('click', function(event) {
        var anchor = $(this);
        // alert($($anchor.attr('href')).offset().top);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

});
