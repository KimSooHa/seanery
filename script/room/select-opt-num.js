function SelectOptNum() {

  this.section = document.createElement("section");

  document.body.append(this.section);
  this.section.classList.add("select-opt-num");

  this.onselect = null;

  
  // params.arguments[0] = this.adult;
  // params.arguments[1]= this.kid;

      
}

SelectOptNum.prototype = {

  open: function() {
    const html = `
    <h1 class="d-none">객실별 인원수</h1>

    <form action="">
        <fieldset>
            <legend class="d-none">인원수 선택</legend>
            
            <div class="room-num-title">Room1</div>
            <div class="adult-num">
                <label>Adults</label>
                <span class="img-btn-minus">빼기 버튼</span>
                <input type="number" value="1" name="room1_adult-num" id="adult-num" readonly disabled>
                <span class="img-btn-plus">더하기 버튼</span>
            </div>
            
            <div class="kid-num">
                <label>Kid</label>
                <span class="img-btn-minus">빼기 버튼</span>
                <input type="number" value="0" name="room1_kid-num" id="kid-num" readonly disabled>
                <span class="img-btn-plus">더하기 버튼</span>
            </div>

        </fieldset>

        <fieldset class="room2 hide">
            <legend class="d-none">인원수 선택</legend>

            <div class="img-btn-close">닫기버튼</div>
            
            <div class="room-num-title">Room2</div>
            <div class="adult-num">
                <label>Adults</label>
                <span class="img-btn-minus">빼기 버튼</span>
                <input type="number" value="1" name="room2_adult-num" id="adult-num" readonly disabled>
                <span class="img-btn-plus">더하기 버튼</span>
            </div>

            <div class="kid-num">
                <label>Kid</label>
                <span class="img-btn-minus">빼기 버튼</span>
                <input type="number" value="0" name="room2_kid-num" id="kid-num" readonly disabled>
                <span class="img-btn-plus">더하기 버튼</span>
            </div>

        </fieldset>

        <fieldset class="room3 hide">
            <legend class="d-none">인원수 선택</legend>

            <div class="img-btn-close">닫기버튼</div>
            
            <div class="room-num-title">Room3</div>
            <div class="adult-num">
                <label>Adults</label>
                <span class="img-btn-minus">빼기 버튼</span>
                <input type="number" value="1" name="room3_adult-num" id="adult-num" readonly disabled>
                <span class="img-btn-plus">더하기 버튼</span>
            </div>

            <div class="kid-num">
                <label>Kid</label>
                <span class="img-btn-minus">빼기 버튼</span>
                <input type="number" value="0" name="room3_kid-num" id="kid-num" readonly disabled>
                <span class="img-btn-plus">더하기 버튼</span>
            </div>

        </fieldset>
        
        <div class="btn-box">
            <span class="btn-add-room">Add Room</span>
            <input class="btn-select" type="submit" value="Select">
        </div>
    </form>`;

    // section.append(html);
    this.section.insertAdjacentHTML("beforeend", html);
    const style = document.createElement("style");

    style.textContent = `

    /* ====== btn style ==================================================== */

    .select-opt-num .img-btn-close {
        /* layout */
        background-image: url("data:image/svg+xml,%3Csvg id='Icon_ionic-ios-close' data-name='Icon ionic-ios-close' xmlns='http://www.w3.org/2000/svg' width='10.426' height='10.423' viewBox='0 0 10.426 10.423'%3E%3Cpath id='Icon_ionic-ios-close-2' data-name='Icon ionic-ios-close' d='M17.734,16.5l3.724-3.724a.873.873,0,0,0-1.234-1.234L16.5,15.266l-3.724-3.724a.873.873,0,1,0-1.234,1.234L15.266,16.5l-3.724,3.724a.873.873,0,0,0,1.234,1.234L16.5,17.734l3.724,3.724a.873.873,0,0,0,1.234-1.234Z' transform='translate(-11.285 -11.289)' fill='%23707070'/%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;
        background-position: right center;
        width: 11px;
        display: inline-block;
        overflow: hidden;
        text-indent: -999px;
    
        /* effect */
        cursor: pointer;
    }
    
    .select-opt-num .img-btn-close:hover {
        opacity: 0.7;
    }
    
    .select-opt-num .btn-add-room {
        /* text */
        font-family: 'Minion Pro';
        font-size: 17px;
        font-weight: bold;
        color: #707070;
    
        /* effect */
        cursor: pointer;
    }
    
    .select-opt-num .btn-select {
        /* text */
        font-family: 'Minion Pro';
        font-size: 17px;
        font-weight: bold;
        color: #707070;
        
        /* layout */
        width: 120px;
        background-color: transparent;
        border: none;
    
        /* effect */
        cursor: pointer;
    }
    
    
    
    
    /* ====== outer block ================================================== */
    .select-opt-num {
        /* layout */
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.72);
        z-index: 1000;

        /* item layout */
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .select-opt-num form {
        /* layout */
        width: 300px;
        background-color: #EEEEEE;
        border-radius: 14px;
        position: relative;
        top: -100px;
        opacity: 0;

        transition: top .5s, opacity .5s;
    }

    /* 애니메이션 효과 */
    .select-opt-num form.show {
      top: 0px;
      opacity: 1;
    }
    
    
    .select-opt-num form fieldset {
        /* layout */
        /* width: 300px; */
        height: 120px;
        /* padding-top: 15px; */
        /* padding-left: 30px; */
        padding: 0;
        overflow: hidden;
    
        /* item layout */
        display: grid;
        grid-template-columns: 56px auto 11px;
        grid-template-rows: 11px 17px 17px;
        column-gap: 30px;
        row-gap: 25px;
        justify-content: center;
        transition: height 0.5s;
    }
    
    .select-opt-num form fieldset:nth-child(2),
    .select-opt-num form fieldset:nth-child(3) {
        /* padding-top: 0; */
        height: 130px;
        align-content: center;
    }
    
    .select-opt-num form fieldset.hide {
        height: 0px;
        /* padding: 0px; */
        border: none;
    }
    
    
    .select-opt-num form fieldset .img-btn-close {
            grid-column: 3/4;
            grid-row: 1/2;
        }
    
        .select-opt-num form fieldset .room-num-title {
            grid-column: 1/2;
            grid-row: 2/4;
            align-self: center;
        }
        
        .select-opt-num form fieldset .adult-num {
            width: 100%;
            grid-column: 2/4;
            grid-row: 2/3;
            display: flex;
            justify-content: space-evenly;
            padding-right: 25px;
        }
    
        .select-opt-num form fieldset .kid-num {
            width: 100%;
            grid-column: 2/4;
            grid-row: 3/4;
            display: flex;
            justify-content: space-evenly;
        }
    
        .select-opt-num form .btn-box {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 67px;
    }
    
        
    
    
    /* ======= content block =============================================== */
    
    .select-opt-num form fieldset {
        border-bottom: 1px solid #A9A9A9;
    }
    
    
    .select-opt-num form fieldset .room-num-title {
        /* text */
        font-family: 'Minion Pro';
        font-size: 17px;
        font-weight: bold;
        color: #707070;
    }
    
    .select-opt-num form fieldset div label {
         /* text */
         font-family: 'Minion Pro';
         font-size: 17px;
         font-weight: normal;
         color: #707070;
    
         /* layout */
         width: 44px;
         margin-right: auto;
    }
    
    .select-opt-num form fieldset div input {
        /* text */
        font-family: 'Minion Pro';
        font-size: 17px;
        font-weight: bold;
        color: #707070;
        
        /* layout */
        background-color: transparent;
        border: none;
        width: 24px;
        padding: 0;
        padding-top: 2px;
        margin-left: 25px;
        margin-right: 15px;
        text-align: center;
        display: flex;
    
    }
    
    .select-opt-num form .btn-box span {
        /* layout */
        /* margin-left: 35px; */
        width: 60%;
        display: flex;
        justify-content: center;
    }
    
    .select-opt-num form .btn-box input {
        /* layout */
        height: 100%;
        padding: 0;
        border-left: 1px solid #A9A9A9;
        display: flex;
        justify-content: center;
    }`;

    document.head.append(style);  // head에 style 태그 추가

    const form = this.section.querySelector("form");

    setTimeout(function() {
      form.classList.add("show");
    }, 0);

    const fieldset = form.querySelectorAll("fieldset");

    form.addEventListener("click", function(e) {

    
      if(e.target.nodeName != "SPAN" && e.target.className != "img-btn-close")
        return;
      
      
  
      for(let i = 0; i < fieldset.length; i++) {
        
        const adult = fieldset[i].querySelector(".adult-num");
        const kid = fieldset[i].querySelector(".kid-num");
        const adultInput = adult.querySelector("input");
        const kidInput = kid.querySelector("input");
        const adultPlus = adult.querySelector(".img-btn-plus");
        const adultMinus = adult.querySelector(".img-btn-minus");
        const kidPlus = kid.querySelector(".img-btn-plus");
        const kidMinus = kid.querySelector(".img-btn-minus");
        
        const adultValue = adultInput.value;
        const adultInt = parseInt(adultValue);
        const kidValue = kidInput.value;
        const kidInt = parseInt(kidValue);
      
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
        const btnClose = fieldset[i].querySelector(".img-btn-close");
        
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
      
    // 더하기 빼기 버튼 마우스 누름
    form.addEventListener("mousedown", function(e) {
      
      if(!(e.target.nodeName == "SPAN" || e.target.classList.contains("btn-select")))
        return;
  
      e.target.style.opacity = "0.7";
      
    });
    // 더하기 빼기 버튼 마우스 뗌
    form.addEventListener("mouseup", function(e) {
      
      if(!(e.target.nodeName == "SPAN" || e.target.classList.contains("btn-select")))
      return;
      
      e.target.style.opacity = "1";
    });

    const addRoom = form.querySelector(".btn-add-room");

    // add Room 버튼
    addRoom.onclick = function() {
        console.log("add!");
        
        
        for(let i = 1; i < fieldset.length; i++) {
          
          if(fieldset[i].classList.contains("hide")) {
            fieldset[i].classList.toggle("hide");
            return;
          }

          if(fieldset[i+1] == null) {
            alert("다객실 예약은 최대 3개까지만 가능합니다.");
          }
        }
    };

    const selectBtn = form.querySelector(".btn-select");
    
    selectBtn.onclick = function(e) {
      e.preventDefault();

      // for(let i = 0; i < fieldset.length; i++) {
          
      //   if(!(fieldset[i].classList.contains("hide"))) {
      //      this.adult[i] = fieldset[i].adultValue;
      //      this.kid[i] = fieldset[i].kidValue;
      //      this.onselect({adult: this.adult[i], kid: this.kid[i], num: i});
      //   }
      // }
      
      this.section.remove();

    }.bind(this);

  }

};



// window.addEventListener("load", function() {
 
//   var form = document.querySelector("form");
//   var fieldset = form.querySelectorAll("fieldset");
       
    
    
//   form.addEventListener("click", function(e) {

    
//     if(e.target.nodeName != "SPAN" && e.target.className != "img-btn-close")
//       return;
    
    

//     for(var i = 0; i < fieldset.length; i++) {
      
//       var adult = fieldset[i].querySelector(".adult-num");
//       var kid = fieldset[i].querySelector(".kid-num");
//       var adultInput = adult.querySelector("input");
//       var kidInput = kid.querySelector("input");
//       var adultPlus = adult.querySelector(".img-btn-plus");
//       var adultMinus = adult.querySelector(".img-btn-minus");
//       var kidPlus = kid.querySelector(".img-btn-plus");
//       var kidMinus = kid.querySelector(".img-btn-minus");
      
//       var adultValue = adultInput.value;
//       var adultInt = parseInt(adultValue);
//       var kidValue = kidInput.value;
//       var kidInt = parseInt(kidValue);
    
//       // adult 더하기 버튼
//       if(e.target == adultPlus) {
        
//         if(adultInt >= 2)
//           return;
          
//         adultInput.value = adultInt + 1;
//       } // adult 빼기 버튼
//       else if(e.target == adultMinus) {
//         if(adultInt <= 1)
//           return;
          
//           adultInput.value = adultInt - 1;
          
//         }
        
//         // kid 더하기 버튼
//       if(e.target == kidPlus) {
        
//         if(kidInt >= 1)
//         return;
        
//         kidInput.value = kidInt + 1;
//       }
//       else if(e.target == kidMinus) {
//         if(kidInt <= 0)
//         return;
        
//         kidInput.value = kidInt - 1;
  
//       }

//       // x 버튼
//       var btnClose = fieldset[i].querySelector(".img-btn-close");
      
//       if(e.target == btnClose) {

//         // room3가 열려있는 상태에서 room2를 삭제할 때
//         if(e.target.parentElement == fieldset[1] && !(fieldset[2].classList.contains("hide"))) {
//           fieldset[i+1].classList.toggle("hide");
//           fieldset[i+1].querySelector(".adult-num>input").value = 1;
//           fieldset[i+1].querySelector(".kid-num>input").value = 0;
//           return;
//         }

//         fieldset[i].classList.toggle("hide");
//         fieldset[i].querySelector(".adult-num>input").value = 1;
//         fieldset[i].querySelector(".kid-num>input").value = 0;
//       }
//     }
          
//   });
    
    
//     form.addEventListener("mousedown", function(e) {
      
//       if(e.target.nodeName != "SPAN")
//         return;
  
//       e.target.style.opacity = "0.7";
      
//     });
        
//     form.addEventListener("mouseup", function(e) {
      
//       if(e.target.nodeName != "SPAN")
//       return;
      
//       e.target.style.opacity = "1";
//     });

//     var addRoom = form.querySelector(".btn-add-room");

//     // add Room 버튼
//     addRoom.onclick = function() {
//         console.log("add!");
        
        
//         for(var i = 1; i < fieldset.length; i++) {
          
//           if(fieldset[i].classList.contains("hide")) {
//             fieldset[i].classList.toggle("hide");
//             return;
//           }

//           if(fieldset[i+1] == null) {
//             alert("다객실 예약은 최대 3개까지만 가능합니다.");
//           }
//         }
//     };


    

  
  
// });