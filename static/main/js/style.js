/*------------------------------------
date: 2019.09
developed by: smartport
developer url: http://www.smartport.kr
------------------------------------*/




$(function () {




// style start


    //* header *//

    // hdNav.df
    $('header .hdWrap > nav.df > ul > li').mouseenter(function(){
        // animation
        $('header').addClass('on');
        $('header .hdBg').stop().slideDown(200);
        $(this).find('.subMenu').stop().slideDown(200);
        $(this).find('button').addClass('ho');

        // ul width
        var liW = 0;
        $(this).find('.subMenu > li').each(function(){
            liW += Math.ceil( $(this).outerWidth(true) );
        });
        $(this).find('.subMenu').width( liW + 1 );

        // subMenu left
        if ( !$(this).hasClass('right') ) {
            var subMenuL = $(this).find('.subMenu').outerWidth() / 2;
            $(this).find('.subMenu').css('left','calc(50% - '+subMenuL+'px)');
        }

        // .subMenu.right
        var navR = Math.ceil( $('header .hdWrap').outerWidth() );
        var subMenuR = Math.ceil( $(this).find('.subMenu').offset().left + $(this).find('.subMenu').outerWidth() ) + 2;
        if ( navR < subMenuR ) {
           $(this).addClass('right').find('.subMenu').css('left','auto');
        }
    });
    $('header .hdWrap > nav.df > ul > li').mouseleave(function(){
        // animation
        $('header').removeClass('on');
        $('header .hdBg').stop().slideUp(200);
        $(this).find('.subMenu').stop().slideUp(200);
        $(this).find('button').removeClass('ho');
    });

    // header.wh
      $(window).scroll(function(){
          if ( $(window).scrollTop() > 0 ) {
              $('header').addClass('wh');
          } else {
              $('header').removeClass('wh');
          }
      });

    // nav.mob
    $('.navBtn').click(function(){
        if ( $(this).hasClass('on') ) {
            $('.fixBG').fadeOut(200);
            $('header .hdWrap > nav.mob').animate({right: '-100%'}).removeClass('tag');
            $(this).removeClass('on tag');
        } else {
            $('.fixBG').fadeIn(200);
            $('header .hdWrap > nav.mob').css('display','block').animate({right: 0}).addClass('tag');
            $(this).addClass('on tag');
        }
    });

    // nav.mob > .subMenu > li > a
    $('header .hdWrap > nav.mob > .contents .subMenu > li > a').click(function(){
        $('header .hdWrap > nav.mob').animate({right: '-100%'}).removeClass('tag');
        $('.navBtn').removeClass('on tag');
        $('.fixBG').fadeOut(200);
    });

    function navDf() {
        $('header .hdWrap > nav.df').css('display','block');
        $('header .hdWrap > nav.mob').css({
            display: 'none',
            right: '-100%'
        });
        $('.navBtn').removeClass('on');
        $('.fixBG').fadeOut(200);
    }
    function checkScroll() {
        if ( $('body').height() > $(window).height() ) { // body hasn't vertical scrollbar (scroll bar width = 17px)
            if ( $(window).width() >= 783 ) { // PC & tablet
                navDf();
            } else { // Mobile
                $('header .hdWrap > nav.df').css('display','none');
            }
        } else { // body has vertical scrollbar
            if ( $(window).width() >= 800 ) { // PC & tablet
                navDf();
            } else { // Mobile
                $('header .hdWrap > nav.df').css('display','none');
            }
        }
    }
    checkScroll();

    	//faq slider
    	$(".faq-q").on("click", function(){
    		var $q = $(this);
    		var $ct = $(this).next(".faq-a");
    		$(".faq-a").not($ct).slideUp('fast', function(){
    			$(".faq-q").not($q).removeClass("on");
    		});
    		$q.toggleClass("on");
    		$ct.stop().slideToggle('fast');
    	});


    //* resize *//
    $(window).resize(function(){
        checkScroll();
    });


// style end




});
