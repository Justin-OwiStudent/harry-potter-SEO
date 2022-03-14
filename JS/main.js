$(function () {

    const url = 'http://hp-api.herokuapp.com/api/characters';
    
    $.getJSON(url, function(result){
        console.log(result);
    
        for (i = 0; i < result.length; i++) {


        };
    
    });

});


