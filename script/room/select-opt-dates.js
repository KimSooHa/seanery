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

            if (spanList[i].classList.contains("day-opaque"))
                break;

            if (start < middle && middle < end)
                spanList[i].classList.add("select-middle");
            else if (start == middle){
                spanList[i].classList.remove("select-start");
                spanList[i].classList.add("select-start-complete");
            }
            else if (end == middle){
                spanList[i].classList.remove("select-end");
                spanList[i].classList.add("select-end-complete");
            }
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

            if (spanList[i].classList.contains("day-opaque"))
                break;

            if (start < middle && middle < end)
                spanList[i].classList.add("select-middle");
            else if (start == middle){
                spanList[i].classList.remove("select-start");
                spanList[i].classList.add("select-start-complete");
            }
            else if (end == middle){
                spanList[i].classList.remove("select-end");
                spanList[i].classList.add("select-end-complete");
            }
        }
    };
});

/* Month navigator 조작*/
window.addEventListener("load", function(){
    var nav = document.querySelector(".month-nav");
    var ol = nav.querySelector("ol");

    var firstMonth = document.querySelector(".month-first>h1");
    var yearOfFirstMonth = firstMonth.querySelector("span");

    var secondMonth = document.querySelector(".month-second>h1");
    var yearOfSecondMonth = secondMonth.querySelector("span");

    var firstMonthInt = Number.parseInt(firstMonth.innerText);
    var secondMonthInt = Number.parseInt(secondMonth.innerText);
    var yearOfFirstMonthInt = Number.parseInt(yearOfFirstMonth.innerText);
    var yearOfSecondMonthInt = Number.parseInt(yearOfSecondMonth.innerText);

    ol.onclick = function(e){
        if (e.target.nodeName != "A")
            return;

        e.preventDefault();


        if (e.target.classList.contains("btn-next")){
            firstMonthInt += 1;
            secondMonthInt += 1;
        }

        if (e.target.classList.contains("btn-prev")){
            firstMonthInt -= 1;
            secondMonthInt -= 1;
        }

        if (firstMonthInt == 0) {
            firstMonthInt = 12;
            yearOfFirstMonthInt -= 1;
        }
        else if (firstMonthInt > 12) {
            firstMonthInt = 1;
            yearOfFirstMonthInt += 1;
        }

        if (secondMonthInt == 0) {
            secondMonthInt = 12;
            yearOfSecondMonthInt -= 1;
        }
        else if (secondMonthInt > 12) {
            secondMonthInt = 1;
            yearOfSecondMonthInt += 1;
        }

        // firstMonth.innerText = firstMonthInt + "월";
        // secondMonth.innerText = secondMonthInt+ "월";
        firstMonth.innerHTML = firstMonthInt + "월" + "<span>" + yearOfFirstMonthInt + "</span>";
        secondMonth.innerHTML = secondMonthInt + "월" + "<span>" + yearOfSecondMonthInt + "</span>";

        engraveDatesOfMonth();
    };

    function engraveDatesOfMonth(){
        // var base = {"year": 2020, "month": 1, "date": 1, "day": 3}; // 윤년
        var base = {"year": 1976, "month": 1, "date": 1, "day": 4}; // 윤년
        var addFactor = [3, 0, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3]; // 다음달 첫날이 몇 요일인지 구하기위해 이번달 요일번호(예:일요일 0번, 수요일 1번)에 각 월마다 정해진 인자를 더함

        var firstSection = document.querySelector(".month-first");
        var firstMonth = firstSection.querySelector("h1").innerText.split('월')[0];
        var firstYear = firstSection.querySelector("h1>span").innerText;

        // month-first, month-second에 새겨질 달의 시작일이 몇요일인지 계산
        var dayNumberOfFirst = 0;
        var dayNumberOfSecond = 0;

        var monthSize = Math.abs(firstYear - base.year) * 12 + Number.parseInt(firstMonth);
        var dayNumber = base.day;
        for (var i = 0; i < monthSize; i++){
            if (i % 12 == 1 && (Number.parseInt(i / 12)) % 4 == 0) // 윤년일 2월일 때
                dayNumber = (dayNumber + addFactor[i % 12] + 1) % 7;
            else 
                dayNumber = (dayNumber + addFactor[i % 12]) % 7;

            if (monthSize - 2 == i)
                dayNumberOfFirst = dayNumber

            if (monthSize - 1 == i)
                dayNumberOfSecond= dayNumber
        }

        console.log("first 첫날 요일 : " + dayNumberOfFirst);
        console.log("second 첫날 요일 : " + dayNumberOfSecond);

        clearDates();

        writeDates(dayNumberOfFirst, dayNumberOfSecond, firstMonth, firstYear);
    }

    function clearDates(){
        var bodies = document.querySelectorAll(".month-table-body");

        for (var i = 0; i < bodies.length; i++){
            var spanList = bodies[i].querySelectorAll("span");

            for (var j = 0; j < spanList.length; j++) {
                spanList[j].innerText = "";
            }
        }
    }

    function writeDates(firstStartDayNumber, secondStartDayNumber, firstMonth, firstYear){
        var firstSection = document.querySelector(".month-first");
        var bodies = firstSection.querySelectorAll(".month-table-body");

        var datesSizeListOfMonth = null;
        if (Math.abs(firstYear - 2020) % 4 == 0)
            datesSizeListOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        else
            datesSizeListOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        var date = 1;
        for (var i = 0; i < bodies.length; i++) {
            var spanList = bodies[i].querySelectorAll("span");

            if (i == 0) {
                for (var j = firstStartDayNumber; j < spanList.length; j++)  
                    spanList[j].innerText = date++;
            } 
            else {
                for (var j = 0; j < spanList.length; j++) {
                    if (datesSizeListOfMonth[firstMonth - 1] >= date)
                        spanList[j].innerText = date++;
                }
            }
        }

        var secondMonth = firstMonth == 12 ? 1 : Number.parseInt(firstMonth)+ 1;

        var secondSection = document.querySelector(".month-second");
        bodies = secondSection.querySelectorAll(".month-table-body");

        date = 1;
        for (var i = 0; i < bodies.length; i++) {
            var spanList = bodies[i].querySelectorAll("span");

            if (i == 0) {
                for (var j = secondStartDayNumber; j < spanList.length; j++)  
                    spanList[j].innerText = date++;
            } else {
                for (var j = 0; j < spanList.length; j++) {
                    if (datesSizeListOfMonth[secondMonth - 1] >= date)
                        spanList[j].innerText = date++;
                }
            }
        }
    }

});