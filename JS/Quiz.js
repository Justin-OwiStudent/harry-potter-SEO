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
            <img class="house-img" src="../images/gryf.png" alt="">
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
            <img class="house-img" src="../images/huff.png" alt="">
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
          <img class="house-img" src="../images/raven.png" alt="">         
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
    });
   });

})

  $(".flex-item").on("click", () =>{

  
});