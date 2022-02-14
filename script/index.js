// // commonjs
// const flatpickr = require("flatpickr");
const flapickr = document.querySelectorAll(".flatpickr");
// const startDate = document.querySelector(".start-date");
// const endDate = document.querySelector(".end-date");

// flatpickr(".datepicker");
// Flatpickr.setDefaults({});
// flatpickr("#flatpickr-demo", {})
// import rangePlugin from "plugins/rangePlugin";

flatpickr("#start-date", {
  mode: "range",
  minDate: "today",
  allowInput: true,
  dateFormat: "Y-m-d",
  // "plugins": [new rangePlugin({ input: "#end-date"})]
});
  
  
flatpickr("#end-date", {
  mode: "range",
  minDate: "today",
  allowInput: true,
  dateFormat: "Y-m-d",
});

// rangePlugin 호환문제 해결 못함...
// 참고: https://flatpickr.js.org/plugins/
// flatpickr({
//   "plugins": [new rangePlugin({ input: ""#end-date"})]
// });


window.addEventListener("load", function() {
 
  var section = document.querySelector(".simple-search");
  var selectNum = section.querySelector(".select-num");
  var adult = selectNum.querySelector(".adult");
  var kid = selectNum.querySelector(".kid");
  var adultInput = adult.querySelector("input");
  var kidInput = kid.querySelector("input");
  var adultPlus = adult.querySelector(".img-btn-plus");
  var adultMinus = adult.querySelector(".img-btn-minus");
  var kidPlus = kid.querySelector(".img-btn-plus");
  var kidMinus = kid.querySelector(".img-btn-minus");
  // var minus = box.querySelector(".img-btn-minus");
  


  selectNum.addEventListener("click", function(e) {


    if(e.target.nodeName != "SPAN")
        return;

    // console.log("clicked");
    var adultValue = adultInput.value;
    var adultInt = parseInt(adultValue);

    
    if(e.target == adultPlus) {
      
      if(adultInt >= 1)
        return;
        
      adultInput.value = adultInt + 1;
    } 
    else if(e.target == adultMinus) {
      if(adultInt <= 0)
        return;

      adultInput.value = adultInt - 1;

    }

    var kidValue = kidInput.value;
    var kidInt = parseInt(kidValue);

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

    

  });

  selectNum.addEventListener("mousedown", function(e) {

    if(e.target.nodeName != "SPAN")
        return;

    e.target.style.opacity = "0.7";
    
  });

  selectNum.addEventListener("mouseup", function(e) {

    if(e.target.nodeName != "SPAN")
        return;

    e.target.style.opacity = "1";
  });


});