requirejs.config({
	paths:{
		jquery:'../bower_components/jquery/dist/jquery.min',
		bootstrap:'../bower_components/bootstrap/dist/js/bootstrap.min',
		easing:'jquery.easing.1.3',
		classie:'classie',
		animtedheader:'cbpAnimatedHeader',
		scrollto:'scrollto'
	}
	,
	shim:{
		 bootstrap: { deps: ['jquery'], exports: 'bootstrap' },
		 easing: { deps: ['jquery'], exports: 'easing' },
		 classie: { deps: ['jquery'], exports: 'classie' },
		 animtedheader: { deps: ['jquery','classie'], exports: 'animtedheader' }
	}
});
requirejs(['bootstrap','easing','classie']);
requirejs(['animtedheader']);

requirejs(['jquery','scrollto'],function($,scrollto){
	var scroll = new scrollto.ScrollTo({

	});
	var pos=300;

	$('#backTop').on('click',$.proxy(scroll.move,scroll));
	$(window).on('scroll',function(){
		//滚动超过一个可视区域
		 checkPosition(pos);
	});
    checkPosition(pos);
    

	function checkPosition($pos){

		// alert($(window).scrollTop());
		if($(window).scrollTop()>$pos){
			// alert('fdsa');
			$('#backTop').fadeIn();
		}else{
			$('#backTop').fadeOut();
		}
	}
});
