(function ( $ ) {
    $.fn.inner_float = function(options) {
        var defaults = {
            top:'10px',
        };
        var settings = $.extend(defaults, options);

        var child = this;
        var parent = this.parent();

        var childHeight = child.height();
       	var parentTop = parent.offset().top;
       	var parentHeight = parent.height();

       	child.function1();

        $(window).scroll(function(){
		    var scrollTop=$(this).scrollTop();
		   
		    if(scrollTop < parentTop) {
		    	child.function1();
		    }
		    else if(scrollTop < (parentTop + parentHeight - childHeight - 10) ) {
		    	child.function2(settings);
		    }
		    else {
		    	child.function3();
		    }
		 });

        return this;
    }

    $.fn.function1 = function() {
    	var cssObj = {
    		'position' : 'absolute',
    		'top' : '10px',
    		'bottom': ''
    	}	
    	
    	this.css(cssObj);
    }

    $.fn.function2 = function(settings) {
    	var cssObj = {
    		'position' : 'fixed',
    		'top' : settings.top,
    		'bottom': ''
    	}	

    	this.css(cssObj);
    }

    $.fn.function3 = function() {
    	var cssObj = {
    		'position' : 'absolute',
    		'top' : '',
    		'bottom': '10px'
    	}	

    	this.css(cssObj);
    }
}( jQuery ));