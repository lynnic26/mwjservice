define(['jquery'],function($){
	function ScrollTo(opts){
		this.opts = $.extend({},ScrollTo.DEFAULT,opts);
		this.$el =  $('html,body');
	}
	ScrollTo.prototype.move = function(){
		var opts = this.opts;


		if(!this.$el.is(':animated')){
			this.$el.animate({
			scrollTop : opts.dest
			},opts.speed);
		}
	};

	ScrollTo.DEFAULT = {
		dest : 0,
		speed : 800
	};

	return  {
		ScrollTo : ScrollTo
	};
});