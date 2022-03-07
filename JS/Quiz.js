$(document).ready(function(){
    $(".accordian-button-1").click(function (e) { 
        e.preventDefault();
        
        if($(".accordian-1").css("display") == "none") {
            $(".accordian-1").slideDown();
        } else {
            $(".accordian-1").slideUp();
        }
       
    });

    $(".accordian-button-2").click(function (e) { 
        e.preventDefault();
        
        if($(".accordian-2").css("display") == "none") {
            $(".accordian-2").slideDown();
        } else {
            $(".accordian-2").slideUp();
        }
       
    });

    $(".accordian-button-3").click(function (e) { 
        e.preventDefault();
        
        if($(".accordian-3").css("display") == "none") {
            $(".accordian-3").slideDown();
        } else {
            $(".accordian-3").slideUp();
        }
       
    });

    const API3 = 'http://hp-api.herokuapp.com/api/characters';
    
    $.getJSON(API3, function(result){
    console.log(result);
    });
})


    // $(".accordian-button-1").click(function (e) { 
    //     e.preventDefault();
    //     console.log("dog")
    //     if($(".accordian-1").css("display") == "none") {
    //         $(".accordian-1").slideDown();
    //     } else {
    //         $(".accordian-1").slideUp();
    //     }
       
    // });