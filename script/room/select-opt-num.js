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

      // x 버튼
      var btnClose = fieldset[i].querySelector(".img-btn-close");
      
      if(e.target == btnClose) {

        // room3가 열려있는 상태에서 room2를 삭제할 때
        if(e.target.parentElement == fieldset[1] && !(fieldset[2].classList.contains("hide"))) {
          fieldset[i+1].classList.toggle("hide");
          fieldset[i+1].querySelector(".adult-num>input").value = 1;
          fieldset[i+1].querySelector(".kid-num>input").value = 0;
          return;
        }

        fieldset[i].classList.toggle("hide");
        fieldset[i].querySelector(".adult-num>input").value = 1;
        fieldset[i].querySelector(".kid-num>input").value = 0;
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

    // add Room 버튼
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