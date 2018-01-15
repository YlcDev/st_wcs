var App = (function(window){
  "use strict";
  var _this = null;
  var cacheCollection = {};
  var main_slider = [];
  return{
  	init : function(){
  		 _this = this;
      
      /* MAIN SLIDER */
      this.MainSlider();

  		/* MENU TOGGLE */
      this.UserReview(); 

      /* LINE GRAPH */
      this.LineGraph();

      /* SEARCH POPUP */  
      this.SearchPopup();

      /* ALTERNATE MENU */  
      this.AltrMenu();
      
      /* PHOTOGRAPHY SLIDER */  
      this.PhotographSlide();
      
      /* COUNTDOWN SET */  
      this.CountdownSet();
      
      /* BLOG SLIDER */  
      this.BlogSlider();

      /*PRODUCT COUNTER*/  
      this.ProductCounter();
      
      /*POPUP COUNTER*/  
      this.PortfolioPopup();

      /* ARCH */
      this.ArchMainSlider();
      
      /* PORTFOLIO */
      this.OurPortfolio();

      /* CART POPUP */
      this.CartPopup(); 

      /* GRID SLIDER */  
      this.GridSlider();

      $(window).load(function() {
        $(".m-portfolio_popup").css("display","none");
        $(".m-portfolio_popup").css("opacity","1");
      });

      $(window).scroll(function(){
        var sticky = $('#m-header'),
            wraper = $('#m-wrapper'),
            scroll = $(window).scrollTop();

        if (scroll >= 100){ sticky.addClass('m-fixed'); wraper.addClass('m-fixed_wrap');}
        else{ sticky.removeClass('m-fixed'); wraper.removeClass('m-fixed_wrap');}
      });

      /* Counter */
       if ($(".m-counter_number").length > 0){ $('.m-counter_number').counterUp({ delay: 100, time: 3000 }); }
  	},
  	getObject: function(selector){
	  if(typeof cacheCollection[selector] == "undefined"){
	    cacheCollection[selector] = $(selector);
	  }
	  return cacheCollection[selector];
    },
    LineGraph : function(){
      if ($("#m-line_graph").length > 0){
      var topOfOthDiv = $("#m-line_graph").offset().top;
      $(window).scroll(function() {
          if($(window).scrollTop() > topOfOthDiv-300) { 
            $(".m-line_graph_bar > div > span").each(function() {
              var GraphWidth = $(this).data('attr');
              $(this).parent().css('width', GraphWidth+"%");   
            });
          }
      });
      }
    },
    UserReview: function (){
     $('#m-user_review_list').bxSlider({
      controls: false
     }); 
    },
    MainSlider: function (){
      var mms = '#m-main_slider';
      if ($(mms).length > 0){  
        var main_slider = $('#m-main_slider').bxSlider({
          pager: false,
          controls: false
        });
        $($(".m-main_slide_nav").find('#m-slide_left')).on('click', function() { 
          main_slider.goToPrevSlide();
        });
        $($(".m-main_slide_nav").find('#m-slide_right')).on('click', function() { 
          main_slider.goToNextSlide();
        }); 
      }
    },
    ArchMainSlider: function (){
      var mms = '#m-arc_main_slider';
      var mmsc = ".m-arc_main_slider";
      if ($(mms).length > 0){  
        var main_slider = $('#m-arc_main_slider').bxSlider({
          onSlideAfter: function (currentSlideNumber, totalSlideQty, currentSlideHtmlObject) {   console.log(currentSlideHtmlObject);
              $(""+mmsc+" .m-current_slide").html(currentSlideHtmlObject+1) 
          },
          pager: false,
          controls: false,
          mode : "fade"
        });
        var slideQty = main_slider.getSlideCount();
        $(""+mmsc+" .m-total_slide").html(slideQty)
        $($(".m-slide_nav_arc").find('#m-slide_left')).on('click', function() { 
          main_slider.goToPrevSlide();
        });
        $($(".m-slide_nav_arc").find('#m-slide_right')).on('click', function() { 
          main_slider.goToNextSlide();
        }); 
      }
    },
    SearchPopup: function (){
      $("#m-search_pop").on("click",function(){
        $(".m-search_popup").fadeIn("slow");  
      });
      $("#m-search_close").on("click",function(){
        $(".m-search_popup").fadeOut("slow");  
        $(".m-search_popup > div input").val("");
      });
    },
    AltrMenu: function (){
      $("#m-altr_menu_ico").on("click",function(){
        $(".m-altr_menu").fadeIn("slow");  
      });
      $("#m-altr_menu_close").on("click",function(){
        $(".m-altr_menu").fadeOut("slow");   
      });
    },
    PhotographSlide : function (){
      if ($('#m-photography').length > 0){ 
        var owl = this.getObject("#m-photography");
        owl.owlCarousel({
          items : 5, //10 items above 1000px browser width
          itemsDesktop : [1000,4], //5 items between 1000px and 901px
          itemsDesktopSmall : [900,3], // 3 items betweem 900px and 601px
          itemsTablet: [600,1], //2 items between 600 and 0;
          itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
          pagination : false,
          paginationNumbers : false,
          mouseDrag : false,
          autoPlay : false
        });
        $(".m-photoslide_arrow .fa-long-arrow-right").click(function(){
          owl.trigger('owl.next');
        })
        $(".m-photoslide_arrow .fa-long-arrow-left").click(function(){
          owl.trigger('owl.prev');
        })
      }
    },
    CountdownSet : function (){ 
      if ($('.m-countdown').length > 0){ 
      var endDate = "2016/10/20";

        $('.countdown.simple').countdown({ date: endDate });

        $('.countdown.styled').countdown({
          date: endDate,
          render: function(data) {
            $(this.el).html("<div class='m-days'><div class='m-count_outer'><span class='m-days_count' >" + this.leadingZeros(data.days, 2) + "</span></div><span class='m-count_title'>Days</span></div><div class='m-hours'><div class='m-count_outer'><span class='m-hours_count'>" + this.leadingZeros(data.hours, 2) + "</span></div><span class='m-count_title'>Hours</span></div><div class='m-minuts'><div class='m-count_outer'><span class='m-minuts_count'>" + this.leadingZeros(data.min, 2) + "</span></div><span class='m-count_title'>Minutes</span></div><div class='m-second'><div class='m-count_outer'><span class='m-second_count'>" + this.leadingZeros(data.sec, 2) + "</div><span class='m-count_title'>Seconds</span></div>");
          }
        });

        $('.countdown.callback').countdown({
          date: +(new Date) + 10000,
          render: function(data) {
            $(this.el).text(this.leadingZeros(data.sec, 3) + " sec");
          },
          onEnd: function() {
            $(this.el).addClass('ended');
          }
        }).on("click", function() {
          $(this).removeClass('ended').data('countdown').update(+(new Date) + 10000).start();
        });
     }   
    },
    BlogSlider : function (){ 
        var mms = '.m-blog_slider';
        if ($(mms).length > 0){  
          var main_slider = $(mms).bxSlider({
            pager: false,
            controls: false,
            mode: "fade"
          });
          $($(".m-main_slide_nav").find('.m-slide_left')).on('click', function() { 
            main_slider.goToPrevSlide();
          });
          $($(".m-main_slide_nav").find('.m-slide_right')).on('click', function() { 
            main_slider.goToNextSlide();
          }); 
        }
    },
    ProductCounter : function (){
      var mpc = ".m-prod_counter";
      if ($(mpc).length > 0){ 
        $("#m-prod_plus").on("click",function(){
          var prod_current = $("#m-prod_count").val(); 
          var plus_val = parseFloat(prod_current)+1; 
          $("#m-prod_count").val(plus_val);
        });
        $("#m-prod_minus").on("click",function(){
          var prod_current = $("#m-prod_count").val();
          if(prod_current == 1)
          {
            minus_val = 1;
          }else{ 
            var minus_val = parseFloat(prod_current)-1; 
          }
          $("#m-prod_count").val(minus_val);
        });
      }  
    },
    PortfolioPopup : function (){
      $(".m-popup_slider > div.m-blog_list_img").each(function(index, el) {
        var newIndex = index+1;
        var main_slider_id = '#m-portfolio_0'+newIndex+''; 
        var main_slider_S = $(main_slider_id).bxSlider({
          mode: 'fade',
          auto: false,
          autoControls: true,
          pause: 4000,
          controls: false,
          pager: false 
        });
        main_slider[index] = main_slider_S;
        $($(el).parents("div.m-popup_slider").find('i.fa-angle-left')).on('click', function() {
          main_slider[index].goToPrevSlide();
        });
        $($(el).parents("div.m-popup_slider").find('i.fa-angle-right')).on('click', function() { 
          main_slider[index].goToNextSlide();
        });
      });  

      var mpp = ".m-portfolio_popup";
      if ($(mpp).length > 0){ 
        $(".m-portfolio_info_text i.fa-search").on("click",function(){
          $(this).parents(".col-lg-4").find(mpp).fadeIn("slow");
          App.BlogSlider();
        });
        $(".m-expand_popup").on("click",function(){
          $(this).parents(".m-expend_outer").find(mpp).fadeIn("slow");
          App.BlogSlider();
        });
        $(".m-expand_popup").on("click",function(){
          $(this).parents(".col-lg-4").find(mpp).fadeIn("slow");
          App.BlogSlider();
        });
        $(".m-expand_popup").on("click",function(){
          $(this).parents(".m-popup_outer").find(mpp).fadeIn("slow");
          App.BlogSlider();
        });
        $(".m-close_popup").on("click",function(){
          $(mpp).fadeOut("slow");  
        });
      }
    },
    OurPortfolio : function(){
       var awl = "#m-portfolio_items";
       var awwt = "#m-portfolio_types";
       $(''+awwt+' li').on('click', function(){  
          $(''+awwt+' li').removeClass('m-active_port');
          $(this).addClass('m-active_port');
          var WorkRel = $(this).data("rel");
          if(WorkRel != "all"){
            $(""+awl+" > div").fadeOut("slow");  
           // $(""+awl+" .a-work_listing_but a:first-child").attr('data-lightbox', '');
            $(""+awl+" > div").each(function() {
              var WorkAttrStrip = $(this).data('attr');
              var WorkAttr      = WorkAttrStrip.split(","); 
              if($.inArray(WorkRel, WorkAttr) !== -1){
                $(this).fadeIn("slow");
                //$(this).find('.a-work_listing_but a:first-child').attr('data-lightbox', 'example-set');
              }
            });
          }else{
            $(""+awl+" > div").fadeIn("slow"); 
            //$(""+awl+" .a-work_listing_but a:first-child").attr('data-lightbox', 'example-set');
          }
          return false;
       }); 
    },
    CartPopup : function(){
      var msb = ".m-shopping_bag";
      $(""+msb+" > i").on("click", function(){
         $("div.m-cart_popup").slideToggle("slow"); 
      });
    },
    GridSlider : function(){
       $(".m-grid_next").on("click",function(){
        var length = $('.m-grid_listing > div').length;
        var current = $('.m-grid_listing > div.m-active_grid');
        var next =  $('.m-grid_listing > div.m-active_grid').next();
        if(typeof next == "undefined" || next >= length || next.length<=0){
          next = $('.m-grid_listing > div:first');
        }
        current.removeClass("m-active_grid");
        next.addClass("m-active_grid");
        var src = next.find("img").data("src");
        var title = next.find("img").data("title");
        var desc = next.find("img").data("desc");
        var like = next.find("img").data("like");
        $(document).find("div.m-blog_list_img img").attr("src", src);
        $(document).find("div.m-blog_list_img h2").html(title);
        $(document).find("div.m-blog_list_img p").html(desc);
        $(document).find("div.m-home_large_btm span").html(like);
       });
       $(".m-gird_prev").on("click",function(){
        var length = $('.m-grid_listing > div').length;
        var current = $('.m-grid_listing > div.m-active_grid');
        var prev =  $('.m-grid_listing > div.m-active_grid').prev();
        if(typeof prev == "undefined" || prev >= length || prev.length<=0){
          prev = $('.m-grid_listing > div:last');
        }
        current.removeClass("m-active_grid");
        prev.addClass("m-active_grid");
        var src = prev.find("img").data("src");
        var title = prev.find("img").data("title");
        var desc = prev.find("img").data("desc");
        var like = prev.find("img").data("like");
        $(document).find("div.m-blog_list_img img").attr("src", src);
        $(document).find("div.m-blog_list_img h2").html(title);
        $(document).find("div.m-blog_list_img p").html(desc);
        $(document).find("div.m-home_large_btm span").html(like);
       });
    }
     
  }
})(window);  

$(document).ready(function($) {
  App.init();
});