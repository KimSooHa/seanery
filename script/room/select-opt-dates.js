/* First Month : select-start, select-end */
window.addEventListener("load", function(){
    var monthFirst = document.querySelector(".month-first");
    var spanList = monthFirst.querySelectorAll(".month-table-body span");
    var startDay = null;
    var endDay = null;

    monthFirst.onclick = function(e){
        var value = e.target.nodeName == "SPAN"
            && (e.target.innerText.length == 1 || e.target.innerText.length == 2)
            && !e.target.classList.contains("day-opaque");


        if (!value)
            return;

        if (startDay == null)
            startDay = e.target;
        else if (endDay == null)
            endDay = e.target;

        startDay.classList.add("select-start");

        var start = Number.parseInt(startDay.innerText);
        var end = Number.parseInt(endDay.innerText);
        if (start >= end) {
            alert("다시입력하세요!")
            startDay.classList.remove("select-start");
            startDay = null;
            endDay = null;
            return;
        }

        endDay.classList.add("select-end");

        for (var i =0; i < spanList.length; i++){
            var middle = Number.parseInt(spanList[i].innerText);
            if (start < middle && middle < end && !spanList[i].classList.contains("day-opaque"))
                spanList[i].classList.add("select-middle");
        }
    };
});

/* Second Month : select-start, select-end */
window.addEventListener("load", function(){
    var monthSecond= document.querySelector(".month-second");
    var spanList = monthSecond.querySelectorAll(".month-table-body span");
    var startDay = null;
    var endDay = null;

    monthSecond.onclick = function(e){
        var value = e.target.nodeName == "SPAN"
            && (e.target.innerText.length == 1 || e.target.innerText.length == 2)
            && !e.target.classList.contains("day-opaque");

        if (!value)
            return;

        if (startDay == null)
            startDay = e.target;
        else if (endDay == null)
            endDay = e.target;

        startDay.classList.add("select-start");

        var start = Number.parseInt(startDay.innerText);
        var end = Number.parseInt(endDay.innerText);
        if (start >= end) {
            alert("다시입력하세요!")
            startDay.classList.remove("select-start");
            startDay = null;
            endDay = null;
            return;
        }

        endDay.classList.add("select-end");

        for (var i =0; i < spanList.length; i++){
            var middle = Number.parseInt(spanList[i].innerText);
            if (spanList[i].contains("day-opaque"))
                break;

            if (start < middle && middle < end)
                spanList[i].classList.add("select-middle");
        }
    };
});