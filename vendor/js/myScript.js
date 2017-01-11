$(document).ready(function(){
   
    var $mainMenuItems = $("#main-menu ul").children("li");
    var totalMainMenuItems = $mainMenuItems.length;
    var openedIndex = 2;
    
    var init = function()    
    {
        bindEvents();
        
        if ( validIndex(openedIndex)){
            animateItem($mainMenuItems.eq(openedIndex), true, 700);
        }
    },
    
    bindEvents = function(){
        $mainMenuItems.children(".images").click(function(){
            var newIndex = $(this).parent().index();
            checkAndAnimateItem(newIndex);  
        });
        
        $(".button").hover(function(){
            $(this).addClass("hovered");
        }, function(){
            $(this).removeClass("hovered");
        });
        
        $(".button").click(function(){
            var newIndex = $(this).index();
            checkAndAnimateItem(newIndex);
        });
    },
        
    validIndex = function(indexToCheck){   
        return ( indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);
    }, 
        
    animateItem = function($item, toOpen, speed){
        var $colorImage = $item.find(".color");
        var itemParam = toOpen ? {width: "420px"} : {width: "140px"};
        var colorImageParam = toOpen ? {left: "0px"} : {left: "140px"};

        $colorImage.animate(colorImageParam, speed);
        $item.animate(itemParam, speed);
    },
    
    checkAndAnimateItem = function(indexToCheckAnimate){
        if (openedIndex === indexToCheckAnimate) 
        {
            animateItem($mainMenuItems.eq(indexToCheckAnimate), false, 250);
            openedIndex = -1;                    
        } else {
            if ( validIndex(indexToCheckAnimate) ) 
            {
                animateItem($mainMenuItems.eq(openedIndex), false, 250);
                openedIndex = indexToCheckAnimate;
                animateItem($mainMenuItems.eq(openedIndex), true, 250);
            }
        }
    };
    
    init();
});