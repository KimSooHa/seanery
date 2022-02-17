window.addEventListener("load", function() {
 
  var form = document.querySelector("form");
  var fieldset = form.querySelectorAll("fieldset");
       
    
    
  form.addEventListener("click", function(e) {

    
    if(e.target.nodeName != "SPAN" && e.target.className != "img-btn-close")
      return;
    
    

    for(var i = 0; i < fieldset.length; i++) {
      
      var adult = fieldset[i].querySelector(".adult-num");
      var kid = fieldset[i].querySelector(".kid-num");
      var adultInput = adult.querySelector("input");
      var kidInput = kid.querySelector("input");
      var adultPlus = adult.querySelector(".img-btn-plus");
      var adultMinus = adult.querySelector(".img-btn-minus");
      var kidPlus = kid.querySelector(".img-btn-plus");
      var kidMinus = kid.querySelector(".img-btn-minus");
      
      var adultValue = adultInput.value;
      var adultInt = parseInt(adultValue);
      var kidValue = kidInput.value;
      var kidInt = parseInt(kidValue);
    
      // adult 더하기 버튼
      if(e.target == adultPlus) {
        
        if(adultInt >= 2)
          return;
          
        adultInput.value = adultInt + 1;
      } // adult 빼기 버튼
      else if(e.target == adultMinus) {
        if(adultInt <= 1)
          return;
          
          adultInput.value = adultInt - 1;
          
        }
        
        // kid 더하기 버튼
      if(e.target == kidPlus) {
        
        if(kidInt >= 1)
        return;
        
        kidInput.value = kidInt + 1;
      }
      else if(e.target == kidMinus) {
        if(kidInt <= 0)
        return;
        
        kidInput.value = kidInt - 1;
  
      }

      var btnClose = fieldset[i].querySelector(".img-btn-close");
      
      if(e.target == btnClose) {
        fieldset[i].classList.toggle("hide");
      }
    }
          
  });
    
    
    form.addEventListener("mousedown", function(e) {
      
      if(e.target.nodeName != "SPAN")
        return;
  
      e.target.style.opacity = "0.7";
      
    });
        
    form.addEventListener("mouseup", function(e) {
      
      if(e.target.nodeName != "SPAN")
      return;
      
      e.target.style.opacity = "1";
    });

    var addRoom = form.querySelector(".btn-add-room");

    // for(var i = 1; i < fieldset.length; i++) {
    //   addRoom.onclick = (function(x) {
    //       console.log("add!");
      
    //     return function(e) {
    //       if(fieldset[i].classList.contains("d-none")) {
    //         fieldset[i].classList.toggle("d-none");
    //       }

    //     }

    //   })(i);
    // }

    addRoom.onclick = function() {
        console.log("add!");
        
        
        for(var i = 1; i < fieldset.length; i++) {
          
          if(fieldset[i].classList.contains("hide")) {
            fieldset[i].classList.toggle("hide");
            return;
          }

          if(fieldset[i+1] == null) {
            alert("다객실 예약은 최대 3개까지만 가능합니다.");
          }
        }
    };


    

  
  
  });