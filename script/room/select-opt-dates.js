// 저작자 : 조영인
window.addEventListener("load", function(){
    /* 페이지를 열 때 현재 달로 수정되어 로드되기 */
    var monthSections = document.querySelectorAll(".month");

    var h1OfFirstSec = monthSections[0].querySelector("h1");
    var h1OfSecondSec = monthSections[1].querySelector("h1");

    var today = new Date();

    console.log(typeof(today.getMonth()));
    console.log(typeof(today.getFullYear()));

    h1OfFirstSec.innerHTML = (today.getMonth() + 1) + "월" + "<span>" + today.getFullYear() + "</span>";

    if (today.getMonth() + 1 == 12) 
        h1OfSecondSec.innerHTML = "1월" + "<span>" + (today.getFullYear() + 1) + "</span>";
    else 
        h1OfSecondSec.innerHTML = (today.getMonth() + 2) + "월" + "<span>" + today.getFullYear() + "</span>";

    engraveDatesOfMonth();

    /* select-dates */
    var selectedDates = [];
    var startDay = null;
    var endDay = null;

    for (var i = 0; i < monthSections.length; i++){
        monthSections[i].onclick = (function(x){
            return function(e){
                if (!checkDateOrNot(e.target))
                    return;

                var date = parseInt(e.target.innerText);
                var month = parseInt(monthSections[x].querySelector("h1").innerText.split("월")[0]);
                var year = parseInt(monthSections[x].querySelector("h1>span").innerText);
        
                if (startDay != null && endDay != null) {
                    clearIndicated();
                    startDay = endDay = null;
                }
        
                if (startDay == null) {
                    startDay = {"year": year, "month": month, "date": date, "node": e.target};
                    startDay.node.classList.add("select");
                    return;
                }
                else{
                    endDay = {"year": year, "month": month, "date": date, "node": e.target};
                    endDay.node.classList.add("select");
                }

                if(!checkValidRangeOfDates(startDay, endDay)){
                    alert("입력이 잘 못되었습니다. 다시 입력하세요.");
                    clearIndicated();
                    startDay = endDay = null;
                    return;
                }

                indicateRangeOfDates();
            };
        })(i);
    }
   
    function clearIndicated(){
        if (startDay != null) {
            startDay.node.classList.remove("select");
            startDay.node.classList.remove("select-start-complete");
        }

        if (endDay != null) {
            endDay.node.classList.remove("select");
            endDay.node.classList.remove("select-end-complete");
        }

        for (var i = 0; i < selectedDates.length; i++) 
            selectedDates[i].classList.remove("select-middle");

        selectedDates = [];
    }

    function indicateRangeOfDates(){
        var monthOfFirstSec = parseInt(monthSections[0].querySelector("h1").innerText.split("월")[0]);
        var yearOfFirstSec = parseInt(monthSections[0].querySelector("h1>span").innerText);
        var spanListOfFirstSec = monthSections[0].querySelectorAll(".month-table-body span");

        var monthOfSecondSec = parseInt(monthSections[1].querySelector("h1").innerText.split("월")[0]);
        var yearOfSecondSec = parseInt(monthSections[1].querySelector("h1>span").innerText);
        var spanListOfSecondSec = monthSections[1].querySelectorAll(".month-table-body span");

        for (var i = 0; i < spanListOfFirstSec.length; i++) {
            if (!checkDateOrNot(spanListOfFirstSec[i]))
                continue;

            var date = parseInt(spanListOfFirstSec[i].innerText);

            if (startDay != null && startDay.date == date && startDay.month == monthOfFirstSec && startDay.year == yearOfFirstSec){
                startDay.node.classList.remove("select");
                startDay.node.classList.remove("select-start-complete");
                startDay.node = spanListOfFirstSec[i];
                startDay.node.classList.add("select");

                if (endDay != null) 
                    startDay.node.classList.add("select-start-complete");
            }

            if (endDay != null && endDay.date == date && endDay.month == monthOfFirstSec && endDay.year == yearOfFirstSec){
                endDay.node.classList.remove("select");
                endDay.node.classList.remove("select-end-complete");
                endDay.node = spanListOfFirstSec[i];
                endDay.node.classList.add("select");
                endDay.node.classList.add("select-end-complete");
            }

            if (!isIncludedRangeOfDates(date, monthOfFirstSec, yearOfFirstSec))
                continue;

            spanListOfFirstSec[i].classList.add("select-middle");
            selectedDates.push(spanListOfFirstSec[i]);
        }

        for (var i = 0; i < spanListOfSecondSec.length; i++) {
            if (!checkDateOrNot(spanListOfSecondSec[i]))
                continue;
            
            var date = parseInt(spanListOfSecondSec[i].innerText);

            if (startDay != null && startDay.date == date && startDay.month == monthOfSecondSec && startDay.year == yearOfSecondSec){
                startDay.node.classList.remove("select");
                startDay.node.classList.remove("select-start-complete");
                startDay.node = spanListOfSecondSec[i];
                startDay.node.classList.add("select");

                if (endDay != null) 
                    startDay.node.classList.add("select-start-complete");
            }

            if (endDay != null && endDay.date == date && endDay.month == monthOfSecondSec && endDay.year == yearOfSecondSec){
                endDay.node.classList.remove("select");
                endDay.node.classList.remove("select-end-complete");
                endDay.node = spanListOfSecondSec[i];
                endDay.node.classList.add("select");
                endDay.node.classList.add("select-end-complete");
            }

            if (!isIncludedRangeOfDates(date, monthOfSecondSec, yearOfSecondSec))
                continue;
            
            spanListOfSecondSec[i].classList.add("select-middle");
            selectedDates.push(spanListOfSecondSec[i]);
        }
    }

    function checkValidRangeOfDates(startDay, endDay){
        if (startDay == null || endDay == null)
            return false;

        var start = getStringYYYYMMDD(startDay.year, startDay.month, startDay.date);
        var end = getStringYYYYMMDD(endDay.year, endDay.month, endDay.date);

        console.log(end-start);

        return (end - start) > 0 ? true : false;
    }

    function isIncludedRangeOfDates(date, month, year){
        if (startDay == null || endDay == null)
            return false;

        var middle = getStringYYYYMMDD(year, month, date);
        var start = getStringYYYYMMDD(startDay.year, startDay.month, startDay.date);
        var end = getStringYYYYMMDD(endDay.year, endDay.month, endDay.date);

        var b1 = middle - start > 0 ? true : false;
        var b2 = end - middle > 0 ? true : false;

        return b1 && b2;
    }

    function checkDateOrNot(dateOrNot){
        var date = dateOrNot.innerText;
        
        return (dateOrNot.nodeName == "SPAN") 
            && (date.length == 1 || date.length == 2) 
            && ("number" == typeof(parseInt(date)));
    }

    function getStringYYYYMMDD(year, month, date){
        var stringYYYY = year.toString();
        var stringMM = month.toString();
        var stringDD = date.toString();

        if (stringMM.length == 1)
            stringMM = "0" + stringMM;

        if (stringDD.length == 1)
            stringDD = "0" + stringDD;

        return stringYYYY + stringMM + stringDD;
    }


    /* Month navigator 조작*/
    var nav = document.querySelector(".month-nav");
    var ol = nav.querySelector("ol");

    var firstMonth = document.querySelector(".month-first>h1");
    var yearOfFirstMonth = firstMonth.querySelector("span");

    var secondMonth = document.querySelector(".month-second>h1");
    var yearOfSecondMonth = secondMonth.querySelector("span");

    var firstMonthInt = parseInt(firstMonth.innerText);
    var secondMonthInt = parseInt(secondMonth.innerText);
    var yearOfFirstMonthInt = parseInt(yearOfFirstMonth.innerText);
    var yearOfSecondMonthInt = parseInt(yearOfSecondMonth.innerText);

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

        firstMonth.innerHTML = firstMonthInt + "월" + "<span>" + yearOfFirstMonthInt + "</span>";
        secondMonth.innerHTML = secondMonthInt + "월" + "<span>" + yearOfSecondMonthInt + "</span>";

        engraveDatesOfMonth();

        clearIndicated()
        indicateRangeOfDates();
    };

    function engraveDatesOfMonth(){
        // var base = {"year": 2020, "month": 1, "date": 1, "day": 3}; // 윤년
        var base = {"year": 1976, "month": 1, "date": 1, "day": 4}; // 윤년
        var addFactor = [3, 0, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3]; // 다음달 첫날이 몇 요일인지 구하기위해 이번달 요일번호(예:일요일 0번, 수요일 3번)에 각 월마다 정해진 인자를 더함

        var firstSection = document.querySelector(".month-first");
        var firstMonth = firstSection.querySelector("h1").innerText.split('월')[0];
        var firstYear = firstSection.querySelector("h1>span").innerText;

        // month-first, month-second에 새겨질 달의 시작일이 몇요일인지 계산
        var dayNumberOfFirst = 0;
        var dayNumberOfSecond = 0;

        var monthSize = Math.abs(firstYear - base.year) * 12 + parseInt(firstMonth);
        var dayNumber = base.day;
        for (var i = 0; i < monthSize; i++){
            if (i % 12 == 1 && parseInt(i / 12) % 4 == 0) // 윤년일 2월일 때
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

        var secondMonth = firstMonth == 12 ? 1 : parseInt(firstMonth)+ 1;

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
