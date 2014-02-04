$(function() {
	var name = "Forrest Slater";
	var today = new Date();
	var yyyy = today.getFullYear();
	
	var earl = $('#earl');
	var earlTop = 210;
	var earlLeft = 319;
	
	var flame = $('#flame');
	
	$('.name').html(name);
	$('.year').html(yyyy);
	setPosition();
	earl.css('display', 'block');
	
	$(document).keydown(function(e){
    if (e.keyCode == 37 && earlLeft > 20) { 
    	earlLeft -= 20;
			setPosition();
			return false;
    } else if (e.keyCode == 39 && earlLeft < 380) {
    	earlLeft += 20;
			setPosition();
     return false;
    }
	});
		
	$('button').click(function() {
		switch ($(this).attr('id')) {
		  case "fade":
		    fade();
		    break;
		  case "jump":
		    jump(200)
		    break;
		  case "backflip":
		    backflip();
		    break;
		  case "blastoff":
		    blastoff();
		    break;
		  default:
		    alert("Error. Button did not execute action.");
		}
	})
			
	function fade () {
		earl.fadeOut(400).delay(200).fadeIn(400);
	}

	function jump (hangtime) {
    earl.css('margin-top', earlTop-100);
		setTimeout(function() {
			earl.css('margin-top', earlTop);
		}, hangtime);
	}
	
	function backflip () {
   earl.css('margin-top', earlTop-100);
	 (function myLoop (i) {          
	    setTimeout(function () {   
	       earl.rotate(i);                         
	       if (--i) {
					 myLoop(i); 
				 } else {
					earl.css('margin-top', earlTop);
				}      
	    }, 1)
	 })(360);  
	}
	
	function blastoff () {
		flame.css('display','block');
		flame.animate({top: "-=400"}, 2000);
		earl.animate({top: "-=400"}, 2000, function() {
			var buttons = $("button");
			buttons.prop('disabled', true);
			buttons.css('cursor', 'default');
			buttons.css('opacity', '0.3');
  	});
	}
	
	function setPosition() {
		earl.css('margin-top', earlTop);
		earl.css('margin-left', earlLeft);
		flame.css('margin-left', earlLeft + 6);
	}
});


jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
};
