// select-num
window.addEventListener("load", function() {
 
  var section = document.querySelector("section");
  var selectNum = section.querySelector(".breakfast");
  var adult = selectNum.querySelector(".adults-num");
  var kid = selectNum.querySelector(".kid-num");
  var adultInput = adult.querySelector("input");
  var kidInput = kid.querySelector("input");
  var adultPlus = adult.querySelector(".img-btn-plus");
  var adultMinus = adult.querySelector(".img-btn-minus");
  var kidPlus = kid.querySelector(".img-btn-plus");
  var kidMinus = kid.querySelector(".img-btn-minus");
  


  selectNum.addEventListener("click", function(e) {


    if(e.target.nodeName != "SPAN")
        return;

    // console.log("clicked");

    // 성인
    var adultValue = adultInput.value;
    var adultInt = parseInt(adultValue);

    // 더하기 버튼
    if(e.target == adultPlus) {
      
      if(adultInt >= 2)
        return;
        
      adultInput.value = adultInt + 1;
    } 
    // 빼기 버튼
    else if(e.target == adultMinus) {
      if(adultInt <= 1)
        return;

      adultInput.value = adultInt - 1;

    }

    // 아동
    var kidValue = kidInput.value;
    var kidInt = parseInt(kidValue);

    // 더하기 버튼
    if(e.target == kidPlus) {
      
      if(kidInt >= 1)
        return;
        
      kidInput.value = kidInt + 1;
    } 
    // 빼기 버튼
    else if(e.target == kidMinus) {
      if(kidInt <= 0)
        return;

      kidInput.value = kidInt - 1;

    }
  });
});