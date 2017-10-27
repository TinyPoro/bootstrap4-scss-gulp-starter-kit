(function ( $ ) {
    $.fn.inner_float = function(options) {
        var defaults = {
            top:'10px',
            topValue: 0
        };
        var settings = $.extend(defaults, options);

        var child = this;
        var parent = this.parent();

        var childHeight = child.height();
       	var parentTop = parent.offset().top;
       	var childTop = child.offset().top;
       	var parentHeight = parent.height();


       	//get value of settings.top       	
		var topVal = function4(settings.top);	
		settings.topValue = topVal;

       	child.fixTop();

       	var padding = function4(child.css('top'));

        $(window).scroll(function(){
		    var scrollTop=$(this).scrollTop();
		    console.log(scrollTop + " - " + (parentTop + parentHeight - childHeight - padding));
		   	if(settings.topValue <= padding) {
			    if(scrollTop < parentTop) {
			    	child.fixTop();
			    }
			    else if(scrollTop < (parentTop + parentHeight - childHeight - padding) ) {
			    	child.fixBrowser(settings);
			    }
			    else {
			    	child.fixBot();
			    }
			}
			else{
				if(scrollTop < (childTop - settings.topValue)) {
			    	child.fixTop();  	
			    }
			    else if(scrollTop < (parentTop + parentHeight - childHeight - padding - settings.topValue) ) {
			    	child.fixBrowser(settings);
			    }
			    else {
			    	child.fixBot();
			    }
			}   
		 });

        return this;
    }

    $.fn.fixTop = function() {
    	var cssObj = {
    		'position' : 'absolute',
    		'top' : '30px',
    		'bottom': ''
    	}	

    	this.css(cssObj);
    }

    $.fn.fixBrowser = function(settings) {
    	var cssObj = {
    		'position' : 'fixed',
    		'top' : settings.top,
    		'bottom': ''
    	}	

    	this.css(cssObj);
    }

    $.fn.fixBot = function() {
    	var cssObj = {
    		'position' : 'absolute',
    		'top' : '',
    		'bottom': '30px'
    	}	

    	this.css(cssObj);
    }

    var function4 = function(string) {
    	var pos = string.search("px");
		var val = string.slice(0, pos);

		return val;	
    }
}( jQuery ));