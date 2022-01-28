// // commonjs
// const flatpickr = require("flatpickr");
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
    // "plugins": [new rangePlugin('#end-date')]
  });

 
//   flatpickr("#end-date", {
//     mode: "range",
//     minDate: "today",
//     allowInput: true,
//     dateFormat: "m/d/Y"
// });
// flatpickr({
//     "plugins": [new rangePlugin({ input: "#end-date"})]
// });


