var namesG = [];

$(document).ready(function(){

  $(".block").on("click", function(){
    $(".collection").empty()

    let K = $(this).find("h3:first").text().toLowerCase()
    // console.log(K);

    const url = 'http://hp-api.herokuapp.com/api/characters/house/' + K ;
    // console.log(url)
  
    
   

    $.getJSON(url, function(result){
      // console.log(result)
      
      for (i = 0; i < result.length; i++) {

        if (K == "slytherin"){
          // console.log(result)
          
          var card = `

          <div class="card">
          <div class="image">  
            <img class="house-img" src="../images/slyth.png" alt="">
          </div>
          <div class="info">
          <h4>` + result[i].name + `</h4>
          <h4>` + result[i].actor + `</h4>
          <h4>` + result[i].patronus + `</h4>
          <h4>` + result[i].house + `</h4>
          </div>
        </div> `;
        $(".collection").append(card)
         

        } else if (K == "gryffindor") {
          console.log(result)
          var card = `
    
          <div class="card">
          <div class="image">  
            <img class="house-img" src="../images/gryf.jpg" alt="">
          </div>
          <div class="info">
          <h4>` + result[i].name + `</h4>
          <h4>` + result[i].actor + `</h4>
          <h4>` + result[i].patronus + `</h4>
          <h4>` + result[i].house + `</h4>
          </div>
        </div>  `;
        $(".collection").append(card)


        } else if (K == "hufflepuff") {
          console.log(result)
          var card = `
    
          <div class="card">
          <div class="image">  
            <img class="house-img" src="../images/huff.jpg" alt="">
          </div>
          <div class="info">
          <h4>` + result[i].name + `</h4>
          <h4>` + result[i].actor + `</h4>
          <h4>` + result[i].patronus + `</h4>
          <h4>` + result[i].house + `</h4>
          </div>
        </div> `;
       $(".collection").append(card)


        } else if (K == "ravenclaw"){
          console.log(result)
          var card = `
    
          <div class="card"> 
          <img class="house-img" src="../images/raven.jpg" alt="">         
          <div class="info">
              <h4>` + result[i].name + `</h4>
              <h4>` + result[i].actor + `</h4>
              <h4>` + result[i].patronus + `</h4>
              <h4>` + result[i].house + `</h4>
          </div>
        </div> `;
       $(".collection").append(card)
        } 




      }     
  
      //   if (K == "slytherin") {
      //     console.log(result);
  
      //     var card = `
    
      //     <div class = "card"> 
      //         <div class = "image"> 
      //         <img class="house-img" src="../images/slyth.png" alt="">
      //         </div>
      //         <div class="info>
      //             <h4>Name</h4>
      //             <h4>Actor</h4>
      //             <h4>` + result[i].house + `</h4>
      //             <h4>patronous<h4>
      //         </div>
      //     </div>
      //   `;

      //   $(".collection").append(card)

      //   } else if ( K == "gryffindor") {
      //    var card = `
      
      //       <div class = "card"> 
      //           <div class = "image"> 
      //           <img class="house-img" src="../images/gryf.jpg" alt="">
      //           </div>
      //           <div class="info>
      //               <h4>Name</h4>
      //               <h4>Actor</h4>
      //               <h4>` + result[i].house + `</h4>
      //               <h4>patronous<h4>
      //           </div>
      //       </div>
      //     `;

      //     $(".collection").append(card)
      //  }
   
    });
   });

})

  $(".flex-item").on("click", () =>{

  
  
  // var K = $(this)
  
  
        
//   $(".collection").empty()

//   $.getJSON(url, function(result){
//     console.log(K)
    

//      for (i = 0; i < result.length; i++) {

//       if (K === "Slytherin")
     
//          console.log(result);

//           var card = `
    
//           <div class = "card"> 
//               <div class = "image"> 
//               <img src="`+ result[i].image +`" class="card-img-top "alt="house-image/person-image">
//               </div>
//               <div class="info>
//                   <h4>Name</h4>
//                   <h4>Actor</h4>
//                   <h4>` + result[i].house + `</h4>
//                   <h4>patronous<h4>
//               </div>
//           </div>
//         `;

//         $(".collection").append(card)
//      }
     
//   });
//  });

   
  
  

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