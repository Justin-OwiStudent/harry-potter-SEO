$(document).ready(function(){

  result_name = result[i].name;

  function AddCard() {
    document.getElementById(".card").innerHTML += "<h3> dfgsdfg </h3>"
}
  
  $(function () {

    const url = 'http://hp-api.herokuapp.com/api/characters';
  
  $.getJSON(url, function(result){
    console.log(result);



    for (i = 0; i < result.length; i++) {
      console.log(result[i].name)
      
      if (result[i].house === "Gryffindor") {
       
        $("#btn1").click(function(){
 


          $(".collection").append(
            
         "<div class='card' id='card'\
          <div class='image'>\
              <img src='" + result_name + "' class='card-img-top' alt=''>\
          </div>\
          <div class='info'>\
          </div>\
          </div>\
          ")
          
        });




    }
      

    // $("#btn1").click(function(){
 


    //     $(".collection").append(
          
    //    "<div class='card' id='card'\
    //     <div class='image'>\
    //         <img src='" + result[i].name + "' class='card-img-top' alt=''>\
    //     </div>\
    //     <div class='info'>\
    //     </div>\
    //     </div>\
    //     ")
        
    //   });


    };

});





  



  });

    



  

























  // $(function () {

  //   const id = urlParams.get('id');

  // const API = 'http://hp-api.herokuapp.com/api/characters' + id;
  
  // $.getJSON(API, function(result){

  // console.log(result);



  // });

  

  // })
    

    // function AddCard() {
    //     document.getElementById(".card").innerHTML += "<h3> dfgsdfg </h3>"
    // }




    // $(document).ready(function(){
    //     $("#btn1").click(function(){



    //       $(".collection").append(`
    //       <div class="card" id="card">
    //       <div class="image">
    //           <img src='"+  + "' class='card-img-top' alt=''>\
    //       </div>
    //       <div class="info">
    //       </div>
    //     </div>
    //       `)
          
    //     });






        
        // $("#btn2").click(function(){
        //   $(".image").append("<p>harry potter</p>");
        // });
      // });

    
    // $(".accordian-button-1").click(function (e) { 
    //     e.preventDefault();
        
    //     if($(".accordian-1").css("display") == "none") {
    //         $(".accordian-1").slideDown();
    //     } else {
    //         $(".accordian-1").slideUp();
    //     }
       
    // });

    // $(".accordian-button-2").click(function (e) { 
    //     e.preventDefault();
        
    //     if($(".accordian-2").css("display") == "none") {
    //         $(".accordian-2").slideDown();
    //     } else {
    //         $(".accordian-2").slideUp();
    //     }
       
    // });

    // $(".accordian-button-3").click(function (e) { 
    //     e.preventDefault();
        
    //     if($(".accordian-3").css("display") == "none") {
    //         $(".accordian-3").slideDown();
    //     } else {
    //         $(".accordian-3").slideUp();
    //     }
       
    // });

   



    



   



    

     
});