/*

Responsive Mobile Menu v1.1
Plugin URI: responsivemultimenu.com

Author: Adam Wysocki
Author URI: http://oncebuilder.com

License: http://opensource.org/licenses/MIT

*/

function adaptMenu() {
	/* 	toggle menu on resize */
	$('.m-main_nav').each(function() {
		// initialize vars
		var maxWidth = 0;
		var width = 0;

		// width of menu list (non-toggled)
		$('.m-main_nav-menu').children("li").each(function() {
			if($(this).parent().hasClass('m-main_nav-menu')){
				width = $(this).outerWidth();//outerWidth();
				if(width>0){
					maxWidth += width;
				}
			}
		});

		// compare width
		var width = $('.m-main_nav').css('width');
		width = width.replace('px', ''); 
		//console.log(width);
		if ( $(this).parent().width() > width ) {
			$('.m-main_nav-menu').removeClass("m-main_nav-mobile");
			
			//remove all classes from mobile verion
			$(".m-main_nav-menu ul").removeClass("m-main_nav-subview");
			$(".m-main_nav-menu li").removeClass("m-main_nav-subover-hidden");
			$(".m-main_nav-menu li").removeClass("m-main_nav-subover-visible");
			$(".m-main_nav-menu a").removeClass("m-main_nav-subover-header");

			$(".m-main_nav-toggled").removeClass("m-main_nav-closed");
			$('.m-main_nav-toggled').hide();
			
			//$('.m-main_nav-toggled').removeClass("m-main_nav-view");
			//$('.m-main_nav-toggled').addClass("m-main_nav-closed");
		}else {
			$('.m-main_nav-menu').addClass("m-main_nav-mobile");
			$('.m-main_nav-toggled').show();
			$('.m-main_nav-toggled').addClass("m-main_nav-closed");
			
			//$('.m-main_nav-toggled').removeClass("m-main_nav-closed");
		}
	});
}

function responsiveMultiMenu() {
	$('.m-main_nav').each(function() {
		// create mobile menu classes here to light up HTML
		$(this).find("ul").addClass("m-main_nav-submenu");
		$(this).find("ul:first").addClass("m-main_nav-menu");
		$(this).find("ul:first").removeClass("m-main_nav-submenu");
		$(this).find('.m-main_nav-submenu').prepend( '<li class="m-main_nav-back"><a href="#">back</a></li>' );
		$(this).find("ul").prev().addClass("m-main_nav-dropdown");
	
		// initialize vars
		var maxWidth = 0;
		var width = 0;

		// width of menu list (non-toggled)
		$('.m-main_nav-menu').children("li").each(function() {
			if($(this).parent().hasClass('m-main_nav-menu')){
				width = $(this).outerWidth();//outerWidth();
				if(width>0){
					maxWidth += width;
				}
				//console.log(width)
			}
		});

		if ($.support.leadingWhitespace) {
			$(this).css('max-width' , (maxWidth+5)+'px');
		}else{
			$(this).css('width' , (maxWidth+5)+'px');
		}
		
		// create dropdown button
		var str=''
		str+='<div class="m-main_nav-toggled m-main_nav-view m-main_nav-closed">'
		 
				 
				str+='<div class="m-main_nav-toggled-button"><span class="fa fm-navicon"></span></div>';
			 
		str+='</div>';
		
		$(this).prepend(str);
	});
	
	// click interacts in mobile wersion
	$('.m-main_nav-dropdown').on('click',function (e) {
		if($(this).parents(".m-main_nav-menu").hasClass('m-main_nav-mobile')){
			e.preventDefault();
			e.stopPropagation();
			
			$(this).next().addClass("m-main_nav-subview");

			var index=$(this).parent().index();
			
			var i=0;
			$(this).parent().parent().children("li").each(function() {
				if(index==$(this).index()){
					$(this).removeClass("m-main_nav-subover-hidden");
					$(this).addClass("m-main_nav-subover-visible");
				}else{
					$(this).removeClass("m-main_nav-subover-visible");
					$(this).addClass("m-main_nav-subover-hidden");
				}
			});
			$(this).addClass("m-main_nav-subover-header");
		}
	});
	
	// click back interacts in mobile version
	$('.m-main_nav-back a').on('click',function () {
		$(this).parent().parent().prev().removeClass("m-main_nav-subover-header");
		$(this).parent().parent().removeClass("m-main_nav-subview");
		$(this).parent().parent().parent().parent().find("li").removeClass("m-main_nav-subover-hidden");
	});
	
	// click toggler interacts in mobile version
	$('.m-main_nav-toggled, .m-main_nav-toggled .m-main_nav-button').on('click',function(){
		if ($(this).is(".m-main_nav-closed")) {
			$(this).removeClass("m-main_nav-closed");
		}else {
			$(this).addClass("m-main_nav-closed");
		}
	});	
}

jQuery(window).load(function() {
    responsiveMultiMenu();
	adaptMenu();
});


$(window).resize(function() {
 	adaptMenu();
});
