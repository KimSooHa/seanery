import Calendar from "./calendar.js"

window.addEventListener("load", function(){
  const section = document.querySelector(".simple-search");
  const startDateBox = section.querySelector("#start-date");
  const endDateBox = section.querySelector("#end-date");

  const calendar = new Calendar(document);

  startDateBox.onclick = (e)=>{
    e.preventDefault();
    calendar.load();
  };

  endDateBox.onclick = (e)=>{
    e.preventDefault();
    calendar.load();
  };
});



// *************************************************

// // commonjs
// const flatpickr = require("flatpickr");
// const flapickr = document.querySelectorAll(".flatpickr");
// // const startDate = document.querySelector(".start-date");
// // const endDate = document.querySelector(".end-date");

// // flatpickr(".datepicker");
// // Flatpickr.setDefaults({});
// // flatpickr("#flatpickr-demo", {})
// // import rangePlugin from "plugins/rangePlugin";

// flatpickr("#start-date", {
//   mode: "range",
//   minDate: "today",
//   allowInput: true,
//   dateFormat: "Y-m-d",
//   // "plugins": [new rangePlugin({ input: "#end-date"})]
// });
  
  
// flatpickr("#end-date", {
//   mode: "range",
//   minDate: "today",
//   allowInput: true,
//   dateFormat: "Y-m-d",
// });

// rangePlugin 호환문제 해결 못함...
// 참고: https://flatpickr.js.org/plugins/
// flatpickr({
//   "plugins": [new rangePlugin({ input: ""#end-date"})]
// });

// --- header-bottom --------------------------------------
// --- date-weather-info -----------------------------------------

// 날짜
window.addEventListener("load", function() {
  const section = document.querySelector(".date-weather-info");
  const dateText = section.querySelector(".date");
  const dayText = section.querySelector(".day");
  
  function getDate() {
    
    const today = new Date();
    const dayNames = [
      'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'
    ]
    const day = dayNames[today.getDay()];
    const month = today.getMonth() + 1;
    const date = today.getDate();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let seconds = today.getSeconds();
  
    console.log(month + "월" + date + "일" + day + "요일");
    
    
    if(date < 10)
      dateText.innerText = month + "/" + "0" + date;
    else
      dateText.innerText = month + "/" + date;

    dayText.innerText = day;
    
  }

  function init() {
    getDate();
    setInterval(getDate, 1000);
  }

  init();

});

// --- img-box --------------------------------------
window.addEventListener("load", function() {

  const section = document.querySelector(".header-bottom-bg-box");
  const imgBox = section.querySelector(".img-box");
  // const ul = imgBox.querySelector("ul");
  // const li = ul.querySelectorAll("li");
  const img = imgBox.querySelectorAll("img");
  let imgCount = img.length;
  let current = 1;
  let imgWidth = imgBox.clientWidth;

  makeClone();
  init();

  // 화면 너비 달라질 때
  window.onresize = () => {
    imgWidth = imgBox.clientWidth;
    imgBox.classList.add("init");
    imgBox.style.left = -imgWidth*current + "px";
  }

  // 이미지 첫번째, 마지막 인덱스 복제하기
  function makeClone() {
    const cloneFirst = img[0].cloneNode(true);
    const cloneLast = imgBox.lastElementChild.cloneNode(true);
    imgBox.append(cloneFirst);
    imgBox.insertBefore(cloneLast, imgBox.firstElementChild);
    imgCount = img.length;
  }

  function init() {
    imgBox.style.left = -imgWidth*current + "px";
  }

  setInterval(() => {
    
    if(current == imgCount-1) {
      setTimeout(() => {
        current = 0;
        imgBox.classList.add("init");
        imgBox.style.left = -imgWidth*current + "px";
      }, 500);
    }
    
    imgBox.classList.remove("init");
    current++;
    imgBox.style.left = -imgWidth*current + "px";

  }, 7000);

});


// --- simple-search --------------------------------------

// select-num
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

  // 마우스 눌릴때
  selectNum.addEventListener("mousedown", function(e) {

    if(e.target.nodeName != "SPAN")
        return;

    e.target.style.opacity = "0.7";
    
  });

  // 마우스 올라갈 때
  selectNum.addEventListener("mouseup", function(e) {

    if(e.target.nodeName != "SPAN")
        return;

    e.target.style.opacity = "1";
  });


});

// --- rooms --------------------------------------

window.addEventListener("load", function() {

  var section = document.querySelector(".rooms");
  var ul = section.querySelector("ul");
  var imgBox = section.querySelector(".img-box");
  var img = imgBox.querySelectorAll("img");
  
  var lis = ul.children;
  
  
  ul.addEventListener("mouseover", function(e) {
    
    if(e.target.nodeName != "A")
    return;
    
    for(var i=0; i<lis.length; i++) {
      
      if(imgBox.children[i].classList.contains("over"))
        img[i].classList.remove("over");
      
      if(e.target == lis[i].firstElementChild)
        img[i].classList.add("over");
      
    }

  });
  
});

// --- gallery --------------------------------------

window.addEventListener("load", function() {
  var section = document.querySelector(".gallery");
  var ul = section.querySelector("ul");

  var mouseDown = false;
  var offsetX;

  
  // 마우스 움직일 때
  section.onmousemove = function(e) {

    if(!mouseDown)
      return;
    
    
    // if(section.offsetHeight >= 250)
    //   return;

    e.preventDefault();
    ul.style.left = e.pageX - e.target.offsetLeft - offsetX + "px"; // 문서기준 위치 - 타겟 이미지 위치 좌표 - 이미지로부터 현재 위치
    console.log(e.target.offsetLeft);
    console.log(offsetX);
  };

  
  
  // 마우스 누를 때
  section.onmousedown = function(e) {
    e.preventDefault();
    
    if(!(e.target.nodeName == "LI" || e.target.nodeName == "IMG"))
        return;

    mouseDown = true;
    offsetX = e.offsetX;
    
    
    // console.log(e.target);
    console.log("x:" + e.x + " offsetX:" + offsetX + " pageX:" + e.pageX + " offsetLeft:" + e.target.offsetLeft + " offsetWidth:" + section.offsetWidth);

  };

  
  // 마우스 뗄 때
  section.onmouseup = function(e) {
    e.preventDefault();

    // if(!(e.target.nodeName == "UL" || e.target.nodeName == "LI" || e.target.nodeName == "IMG"))
    //     return;

    mouseDown = false;
    offsetX = 0;
  };
  
});