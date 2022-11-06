
$(function(){
    /* 슬라이드 */
    $('#demo1').skdslider({ 
        slideSelector: '.slide', 
        delay:5000,
        animationType:'fading',
        animationSpeed:2000,
        autoSlide:true, 
    }); 

    /* search */ 
    $('#demo5').btnSwitch({ 
        Theme: 'Swipe'
    });  

    // 메뉴 검색 스크립트 
    function searchToggle(obj, evt){ 
        var container = $(obj).closest('.search-wrapper');

        if(!container.hasClass('active')){
              container.addClass('active');
              evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
              container.removeClass('active');
              // clear input
              container.find('.search-input').val('');
              // clear and hide result container when we press close
              container.find('.result-container').fadeOut(100, function(){$(this).empty();});
        }
    }

    function submitFn(obj, evt){
        value = $(obj).find('.search-input').val().trim();

        _html = "";
        if(!value.length){
            _html = "";
        }
        else{
            _html += "<b>" + value + "</b>";
        }

        $(obj).find('.result-container').html('<span>' + _html + '</span>');
        $(obj).find('.result-container').fadeIn(100);

        evt.preventDefault();
    } 


    /* 대메뉴바 */
    var zoomx = 100;
    $(document).ready(function() { 
        $(".gnb").hover(
        function() {
            $(".snb").stop().slideDown(600);
        },
        function() {
            $(".snb").stop().slideUp(600);
        }
        );

        $(".snb").hover(
        function() {
            $(".snb").stop().slideDown(600);
        },
        function() {
            $(".snb").stop().slideUp(600);
        }
        );

        $(".tabBtn").hover(
        function() {

            $(this).children(".icon_normal").css("display","none");
            $(this).children(".icon_over").css("display","block");
        },
        function() {
            $(this).children(".icon_over").css("display","none");
            $(this).children(".basic").css("display","block");
        }
        );

        $(".tabBtn").click(
        function() {

            $("."+$(this).attr("tarx")).children(".icon_normal").addClass("basic");
            $("."+$(this).attr("tarx")).children(".icon_over").removeClass("basic");
            $(this).children(".icon_over").addClass("basic");
            $(this).children(".icon_normal").removeClass("basic");

            $("."+$(this).attr("tarx")).children(".icon_over").css("display","none");
            $("."+$(this).attr("tarx")).children(".icon_normal").css("display","none");
            $("."+$(this).attr("tarx")).children(".basic").css("display","block");


            $("."+$(this).attr("tarc")).css("display","none");
            $("#"+$(this).attr("tar")).css("display","block");

            $("#"+$(this).attr("tarmc")).attr("href", $(this).attr("tarm"));

        }
        );

    //class="tabBtn tabBtngroupA" tar="lastA_1" tarc="lastA_1" tarx="tabBtngroupA"
    });
    function body_zoomin() {
    zoomx = zoomx + 10;
    $("body").css("zoom",zoomx + "%");
    }
    function body_zoomout() {
    zoomx = zoomx - 10;
    $("body").css("zoom",zoomx + "%");
    }
    function body_zoomdef() {
    zoomx = 100;
    $("body").css("zoom",zoomx + "%");
    }
    function newWin(url,w,h) {
    window.open
    (url,'new_win','width='+w+',height='+h+',toolbars=no,menubars=no,scrollbars=auto');
    }

});   
