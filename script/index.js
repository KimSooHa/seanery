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


