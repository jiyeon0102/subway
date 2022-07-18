$(document).ready(function(){
    slide_num = 0
    setInterval(function(){
        //위치 주의
        if( slide_num < -300 ){
            $('#slide').css({'left':'0'})
            slide_num = 0 }
            slide_num = slide_num -100
        $('#slide').stop().animate({'left':+slide_num+'%'})

        slide_bt_num = slide_num/-100
        if( slide_bt_num == 4 ){ slide_bt_num = 0 }
       $('#slide_bt_button>li').eq( slide_bt_num ).css({'background-color':'#ffc300','width':'30px'}).siblings().animate({width:10},300).css({'background-color':'#ffffff'})
       
        
    },10000)
    //서브메뉴
    $('#header2_menu').mouseenter(function(){
        $('.sub').stop().slideDown(300)
        $('#sub_bg').stop().slideDown(200)
    })
    $('#header2_menu').mouseleave(function(){
        $('.sub').stop().slideUp(250)
        $('#sub_bg').stop().slideUp(300)
    })
   
    

    /*main_slide*/
    $('#slide_bt_button>li').click(function(){
        $(this).animate({width:30}).css({'background-color':'#ffc300'})
        $(this).siblings().animate({width:10}).css({'background-color':'#ffffff'})
        BtNum = $(this).index()*-100
        $('#slide').stop().animate({'left':+BtNum+'%'})

    })
    //subway_food_menu
    $('#subway_menu_list_title>li').click(function(){
        $(this).css({'color':'#009223'})
        $(this).siblings().css({'color':'#5d5d5d'})

        // $('.subway_menu_box').eq( $(this).index()).animate({'opacity':'1','display':'block','margin-left':'0px'},10).siblings('.subway_menu_box').css({'opacity':'0','margin-left':'1000px'},10)
    })
    

    

    $('#subway_menu_list_title>li:nth-child(1)').click(function(){
        $('.subway_menu_box2,.subway_menu_box3,.subway_menu_box4').fadeOut()
        $('.subway_menu_box1').css({'left':'2000px'},0)
        
        $('.subway_menu_box1').fadeIn().animate({'left':'0px'},300,function(){
            $('.subway_menu_box2,.subway_menu_box3,.subway_menu_box4').fadeOut(0).animate({'left':'2000px'},0)
            
        })

        
    })
    $('#subway_menu_list_title>li:nth-child(2)').click(function(){
        $('.subway_menu_box1,.subway_menu_box3,.subway_menu_box4').fadeOut()
        $('.subway_menu_box2').animate({'left':'2000px'},0,function(){
            $('.subway_menu_box2').fadeIn().animate({'left':'0px'},300,function(){
                $('.subway_menu_box1,.subway_menu_box3,.subway_menu_box4').fadeOut(0).animate({'left':'2000px'},0)
            })
        })
        
    })
    $('#subway_menu_list_title>li:nth-child(3)').click(function(){
        $('.subway_menu_box1,.subway_menu_box2,.subway_menu_box4').fadeOut()
        $('.subway_menu_box3').animate({'left':'2000px'},0,function(){
            $('.subway_menu_box3').fadeIn().animate({'left':'0px'},300,function(){
                $('.subway_menu_box1,.subway_menu_box2,.subway_menu_box4').fadeOut(0).animate({'left':'2000px'},0)
            })
        })
        
    })
    $('#subway_menu_list_title>li:nth-child(4)').click(function(){
        $('.subway_menu_box1,.subway_menu_box2,.subway_menu_box3').fadeOut()
        $('.subway_menu_box4').animate({'left':'2000px'},0,function(){
            $('.subway_menu_box4').fadeIn().animate({'left':'0px'},300,function(){
                $('.subway_menu_box1,.subway_menu_box2,.subway_menu_box3').fadeOut(0).animate({'left':'2000px'},0)
            })
        })
        
    })

    $('.next_btn').click(function(){
        $('.menu_list').stop().animate({left:-1000},500)
        $('subway_menu_box4>.menu_list').css({'width':1000})
    })
    $('.prev_btn').click(function(){
        $('.menu_list').stop().animate({left:0},500)
    })
    $('.subway_menu_box4>.next_btn').click(function(){
        $('.menu_list').stop().animate({left:0})
        
    })
    $('.menu_list>li').mouseenter(function(){
        $(this).children('.menu_list>li>img').css({'width':'260px','height':'180px','margin-top':'40px'})
        $(this).children('.search').css({'display':'block'})
        $(this).children('.menu_list>li>h5').css({'display':'block'})
        $(this).children('.menu_list>li>p').css({'display':'none'}) 
    })
    $('.menu_list>li').mouseleave(function(){
        $(this).children('.menu_list>li>img').css({'width':'240px','height':'172px','margin-top':'0'})
        $(this).children('.search').css({'display':'none'}) 
        $(this).children('.menu_list>li>h5').css({'display':'block'})
        $(this).children('.menu_list>li>p').css({'display':'block'})
    })
    /*news_slide*/
    $('.news_slide_bt>li').click(function(){
        $(this).animate({width:25},300).css({'background-color':'#ffc300'})
        $(this).siblings().animate({width:10},300).css({'background-color':'#ffffff'})
        BtNum = $(this).index()*-270
        $('.news_slide').stop().animate({'left':+BtNum+'px'},200)
    })
    
    
})