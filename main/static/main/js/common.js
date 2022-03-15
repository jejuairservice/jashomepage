/*------------------------------------
date: 2019.09
developed by: smartport
developer url: http://www.smartport.kr
------------------------------------*/




$(function () {




// common start


// main 이미지 전환

    $('#fullpage').fullpage({
      //navigation: true,
      //navigationPosition: 'right',
      //slidesNavigation: true,
      //css3:false,
      scrollOverflow: true,
      controlArrows: false,
      verticalCentered: false,
      paddingTop:'0',

    });

    $('#slick_section0').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: false,
      fade: true
    });
    $('.section0 .slick-pause').click(function(){
      if ($(this).hasClass('paused')){
        $("#slick_section0").slick('slickPause');
        $(this).removeClass('paused');
        $(this).text('재생');
      } else {
        $("#slick_section0").slick('slickPlay');
        $(this).addClass('paused');
        $(this).text('정지');
      }
    });

    //* tabMenu *//
    $('.tabBtn > .btn').click(function(){
        var $this = $(this);
        var idx = $this.index();
        if ( $this.hasClass('active') ){
            return false;
        } else {
            $this.addClass('active').siblings('.btn').removeClass('active');
            $this.parents('.tabMenu').children('.tabCont').children('.cont').eq(idx).fadeIn(2000).addClass('active').siblings('.cont').fadeOut(2000).removeClass('active');
        }
    });

    //* .topBtn *//
    $('button.topBtn').click(function(){
        $(window).scrollTop(0);
    });

    //* close : click body *//
    $(document).mousedown(function(e){
        var container = $('.tag');
        if (!container.is(e.target) && container.has(e.target).length === 0){
            container.removeClass('tag');
            $('header .hdWrap').find('.navBtn').removeClass('on').end().find('nav.mob').animate({right: '-100%'});
        }
    });


    //* lng slide *//
        $(".lnb > li > a").click(function(){
          if ($(window).width())
          {
            var gsub = $(this).siblings(".lnbConWrap");
            $(".lnbConWrap").not(gsub).slideUp("fast");
            gsub.slideToggle("fast");
            $(".lnb > li").not($(this).parent("li")).removeClass("on");
            $(this).parent("li").toggleClass("on");
            return false;
          }
        });

// common end




});
