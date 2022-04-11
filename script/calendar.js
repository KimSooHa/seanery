export default class Calendar{
    #selectedDates;
    #startDay;
    #endDay;
    #today;
    #html;
    #css;
    #document;

    #calendarSection;

    /* select-dates */
    #monthSections;

    /* Month navigator 조작*/
    #nav;
    #ol;

    /* selection 버튼 조작 */
    #btnSelection;

    constructor(document){
        this.#document = document;
        this.#selectedDates = [];
        this.#startDay = null;
        this.#endDay = null;

        this.#calendarSection = null;
        this.#monthSections = null;
        this.#nav = null;
        this.#ol = null;
        this.#btnSelection = null;

        this.#html =
        `
            <section id="young-in-calendar">
                <h1 class="d-none">날짜 선택</h1>

                <nav class="month-nav">
                    <h1 class="d-none">month navgator</h1>
                    <ol>
                        <li>
                            <a href="" class="btn-next svg-base arrow-down-white">다음</a>
                        </li>
                        <li>
                            <a href="" class="btn-prev svg-base arrow-up-white">이전</a>
                        </li>
                    </ol>
                </nav>

                <section class="month month-first">
                    <h1>11월<span>2021</span></h1>
                    <div class="month-table">
                        <div class="month-table-head">
                            <span>SUN</span>
                            <span>MON</span>
                            <span>TUE</span>
                            <span>WEN</span>
                            <span>THU</span>
                            <span>FRI</span>
                            <span>SAT</span>
                        </div>
                        <div class="month-table-body row1">
                            <span></span>
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>5</span>
                            <span>6</span>
                        </div>
                        <div class="month-table-body row2">
                            <span>7</span>
                            <span>8</span>
                            <span>9</span>
                            <span>10</span>
                            <span>11</span>
                            <span>12</span>
                            <span>13</span>
                        </div>
                        <div class="month-table-body row3">
                            <span>14</span>
                            <span>15</span>
                            <span>16</span>
                            <span>17</span>
                            <span>18</span>
                            <span>19</span>
                            <span>20</span>
                        </div>
                        <div class="month-table-body row4">
                            <span>21</span>
                            <span>22</span>
                            <span>23</span>
                            <span>24</span>
                            <span>25</span>
                            <span>26</span>
                            <span>27</span>
                        </div>
                        <div class="month-table-body row5">
                            <span>28</span>
                            <span>29</span>
                            <span>30</span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div class="month-table-body row6">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                </section>

                <hr>

                <section class="month month-second">
                    <h1>12월<span>2021</span></h1>
                    <div class="month-table">
                        <div class="month-table-head">
                            <span>SUN</span>
                            <span>MON</span>
                            <span>TUE</span>
                            <span>WEN</span>
                            <span>THU</span>
                            <span>FRI</span>
                            <span>SAT</span>
                        </div>
                        <div class="month-table-body row1">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                        </div>
                        <div class="month-table-body row2">
                            <span>5</span>
                            <span>6</span>
                            <span>7</span>
                            <span>8</span>
                            <span>9</span>
                            <span>10</span>
                            <span>11</span>
                        </div>
                        <div class="month-table-body row3">
                            <span>12</span>
                            <span>13</span>
                            <span>14</span>
                            <span>15</span>
                            <span>16</span>
                            <span>17</span>
                            <span>18</span>
                        </div>
                        <div class="month-table-body row4">
                            <span>19</span>
                            <span>20</span>
                            <span>21</span>
                            <span>22</span>
                            <span>23</span>
                            <span>24</span>
                            <span>25</span>
                        </div>
                        <div class="month-table-body row5">
                            <span>26</span>
                            <span>27</span>
                            <span>28</span>
                            <span>29</span>
                            <span>30</span>
                            <span>31</span>
                            <span></span>
                        </div>
                        <div class="month-table-body row6">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </section>

                <section class="expected-weather">
                    <h1 class="d-none">선택 날짜 날씨 예상</h1>
                    <dl>
                        <li>
                            <dt>11/11 :</dt>
                            <dd>흐림</dd>
                        </li>
                        <li>
                            <dt>11/12 :</dt>
                            <dd>맑음</dd>
                        </li>
                    </dl>
                </section>

                <form class="selection">
                    <button name="check-in-and-out-dates" value="">선택 완료</button>
                </form>
            </section>
        `;

        this.#css =
        `
            /* 저작자 : 조영인 */
            /* === layout block ========================= */
            /* --- section(#young-in-calendar)-------------------------- */
            #young-in-calendar{
                /* layout */
                background-color: rgba(0, 0, 0, 0.72);

                padding-top: 35px;

                position: fixed;
                top: 0;
                left: 0;

                width: 100vw;
                height: 100vh;

                z-index: 1000;

                overflow: scroll;
                

                /* item layout */
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }
                #young-in-calendar.calendar-d-none{
                    display: none;
                }

            /* --- month-nav -------------------------- */
            #young-in-calendar .month-nav{
                width: 297px;

                /* item layout */
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-end;

                position: relative;
            }
            #young-in-calendar .month-nav ol{
                /* layout */
                width: 65px;

                position: absolute;
                top: 40px;
                right: 30px;

                /* item layout */
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }

            #young-in-calendar .svg-base{
                /* text */
                text-indent: -9999px;

                /* layout */
                display: inline-block;
                width: 25px;
                height: 25px;

                background-repeat: no-repeat;
                background-size: contain;
                background-position: center;
            }
                #young-in-calendar .arrow-up-white{
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30.705' height='18.634' viewBox='0 0 30.705 18.634'%3E%3Cpath id='Icon_awesome-chevron-up' data-name='Icon awesome-chevron-up' d='M16.943,9.177,30.608,22.842a1.687,1.687,0,0,1,0,2.386l-1.594,1.594a1.687,1.687,0,0,1-2.384,0L15.75,16,4.869,26.825a1.687,1.687,0,0,1-2.384,0L.892,25.229a1.687,1.687,0,0,1,0-2.386L14.557,9.178A1.687,1.687,0,0,1,16.943,9.177Z' transform='translate(-0.398 -8.683)' fill='%23fff'/%3E%3C/svg%3E%0A");
                }

                #young-in-calendar .arrow-down-white{
                    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30.705' height='18.634' viewBox='0 0 30.705 18.634'%3E%3Cpath id='Icon_awesome-chevron-down' data-name='Icon awesome-chevron-down' d='M14.557,26.823.892,13.158a1.687,1.687,0,0,1,0-2.386L2.486,9.177a1.687,1.687,0,0,1,2.384,0L15.75,20,26.631,9.175a1.687,1.687,0,0,1,2.384,0l1.594,1.594a1.687,1.687,0,0,1,0,2.386L16.943,26.823A1.688,1.688,0,0,1,14.557,26.823Z' transform='translate(-0.398 -8.683)' fill='%23fff'/%3E%3C/svg%3E%0A");
                }

            /* --- month -------------------------- */
            #young-in-calendar .month{
                /* layout */
                width: 297px;
                height: 294px;

                /* item layout  */
            }
            /* --- month-first -------------------------- */
            #young-in-calendar .month-first{
                /* layout */
                padding-top: 33px;
            }
            /* --- month-second ------------------------- */
            #young-in-calendar .month-second{
                /* layout */
                padding-top: 43px;
            }
            /* --- expected-weather --------------------- */
            #young-in-calendar .expected-weather{
                /* layout */
                padding-top: 36.6px;
            }

            /* === content block ======================== */
            /* --- month -------------------------- */
            #young-in-calendar .month>h1{
                /* text */
                font-family: "Montserrat";
                font-size: 23px;
                font-weight: bold;
                color: #fff;

                /* layout */
                margin-left: 35px;
            }
                #young-in-calendar .month>h1>span{
                    /* text */
                    font-family: "Montserrat";
                    font-size: 16px;
                    font-weight: bold;
                    color: #fff;

                    /* layout */
                    margin-left: 10px;
                }

            #young-in-calendar .month .month-table{
                /* layout */
                margin-top: 23px;

                /* item layout */
                display: grid;
                grid-template-rows: repeat(7, 41.6px);
            }
                #young-in-calendar .month .month-table>div{
                    /* layout */
                    display: grid;
                    grid-template-columns: repeat(7, 40.6px);

                    overflow: hidden;

                    /* item layout */
                    align-items: center;
                    justify-items: center;
                }

                    #young-in-calendar .month .month-table .month-table-head span{
                        /* text */
                        font-family: "Montserrat";
                        font-size: 9px;
                        font-weight: 600;
                        color: rgba(255, 255, 255, 0.2);
                    }

                    #young-in-calendar .month .month-table .month-table-body span{
                        /* text */
                        font-family: "Montserrat";
                        font-size: 9px;
                        font-weight: 400;
                        color: #fff;

                        /* util */
                        cursor: pointer;
                    }

                    #young-in-calendar .month .month-table .month-table-body>.past-date{
                        /* text */
                        font-family: "Montserrat";
                        font-size: 9px;
                        font-weight: 600;
                        color: rgba(255, 255, 255, 0.2);
                    }

                    #young-in-calendar .month .month-table .month-table-body span:hover{
                        /* text */
                        text-align: center;
                        line-height: 36px;

                        /* layout */
                        background-color: rgba(112, 112, 112, 0.72);
                        border-radius: 30px;

                        display: inline-block;
                        width: 34.8px;
                        height: 34.8px;
                    }

            #young-in-calendar .select, #young-in-calendar .select-middle,
            #young-in-calendar .select-start-complete, #young-in-calendar .select-end-complete{
                /* text */
                text-align: center;
                line-height: 34.8px;

                /* layout */
                background-color: #83AECE !important;

                display: inline-block;
                width: 34.8px;
                height: 34.8px;
                border-radius: 30px;

                /* item layout */
                position: relative;
            }

            #young-in-calendar .select-middle{
                /* layout */
                background-color: #5782B9 !important;
                border-radius: 0 !important;
                width: 46px !important;
            }

                #young-in-calendar .select-start-complete::after, #young-in-calendar .select-end-complete::after{
                    /* text */
                    content: "";

                    /* layout */
                    background-color: #5782B9;

                    display: inline-block;
                    width: 17.4px;
                    height: 34.8px;

                    position: absolute;
                    top: 0;
                    right: 1;
                    z-index: -1;
                }

                #young-in-calendar .select-end-complete::after{
                    /* layout */
                    width: 23px;
                    left: -6px;
                }

            /* --- expected-weather --------------------- */
            #young-in-calendar .expected-weather{
                /* text */
                font-family: Sitka Heading;
                font-size: 15px;
                font-weight: normal;
                color: #fff;
            }
                #young-in-calendar .expected-weather dl{
                    /* layout */
                    width: 297px;

                    /* item layout */
                }

                #young-in-calendar .expected-weather li{
                    /* layout */
                    margin-bottom: 14.3px;

                    /* item layout */
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                }

                #young-in-calendar .expected-weather dd{
                    /* reset */
                    margin: 6px;
                }


            #young-in-calendar hr{
                /* layout */
                width: 297px;
                height: 1px;
                background-color: rgba(255, 255, 255, 0.1);

                /* reset */
                border: none;
            }

            /* --- selection ------------------------------------------ */
            #young-in-calendar .selection {
                /* layout */
                display: inline-block;
                width: 297px;

                /* item layout */
            }

                #young-in-calendar .selection button{
                    /* reset */
                    border: none;

                    /* text */
                    font-family: "Montserrat";
                    font-size: 13px;
                    color: #fff;

                    /* layout */
                    background-color: #B19D74;
                    border-radius: 30px;
                    padding: 5px 40px 8px 42px;

                    position: relative;
                    top: -70px;
                    left: 130px;

                    /* util */
                    cursor: pointer;
                }
        `;
    }

    load(){
        if(this.#calendarSection != null) {
            this.#calendarSection.classList.remove("calendar-d-none");
            return;
        }

        /* embeding html, css template */
        const styleElement = this.#document.createElement("style");
        styleElement.insertAdjacentText("beforeend", this.#css);
        this.#document.head.insertAdjacentElement("afterbegin", styleElement);
        this.#document.body.insertAdjacentHTML("afterbegin", this.#html);

        this.#calendarSection = this.#document.querySelector("#young-in-calendar");

        /* 페이지를 열 때 현재 달로 수정되어 로드되기 */
        this.#monthSections = this.#calendarSection.querySelectorAll(".month");
        console.log(this.#monthSections);
        const h1OfFirstSec = this.#monthSections[0].querySelector("h1");
        const h1OfSecondSec = this.#monthSections[1].querySelector("h1");

        this.#today = new Date();


        h1OfFirstSec.innerHTML = (this.#today.getMonth() + 1) + "월" + "<span>" + this.#today.getFullYear() + "</span>";

        if (this.#today.getMonth() + 1 == 12) 
            h1OfSecondSec.innerHTML = "1월" + "<span>" + (this.#today.getFullYear() + 1) + "</span>";
        else 
            h1OfSecondSec.innerHTML = (this.#today.getMonth() + 2) + "월" + "<span>" + this.#today.getFullYear() + "</span>";

        this.#engraveDatesOfMonth();

        /* select-dates */
        for (let i = 0; i < this.#monthSections.length; i++){
            this.#monthSections[i].onclick = (x=>{
                return (e)=>{
                    if (!this.#checkDateOrNot(e.target))
                        return;

                    const date = parseInt(e.target.innerText);
                    const month = parseInt(this.#monthSections[x].querySelector("h1").innerText.split("월")[0]);
                    const year = parseInt(this.#monthSections[x].querySelector("h1>span").innerText);
            
                    if (this.#startDay != null && this.#endDay != null) {
                        this.#clearIndicated();
                        this.#startDay = this.#endDay = null;
                    }
            
                    if (this.#startDay == null) {
                        if (this.#isPastDate(year, month, date)) {
                            alert("입력이 잘 못되었습니다. 다시 입력하세요.");
                            return;
                        }

                        this.#startDay = {"year": year, "month": month, "date": date, "node": e.target};
                        this.#startDay.node.classList.add("select");
                        return;
                    }
                    else{
                        this.#endDay = {"year": year, "month": month, "date": date, "node": e.target};
                        this.#endDay.node.classList.add("select");
                    }

                    if(!this.#checkValidRangeOfDates(this.#startDay, this.#endDay)){
                        alert("입력이 잘 못되었습니다. 다시 입력하세요.");
                        this.#clearIndicated();
                        this.#startDay = this.#endDay = null;
                        return;
                    }

                    this.#indicateRangeOfDates();
                };
            })(i);
        }

        /* Month navigator 조작*/
        this.#nav = this.#calendarSection.querySelector(".month-nav");
        this.#ol = this.#nav.querySelector("ol");

        this.#ol.onclick = (e)=>{
            if (e.target.nodeName != "A")
                return;

            e.preventDefault();

            const firstMonth = this.#calendarSection.querySelector(".month-first>h1");
            const yearOfFirstMonth = firstMonth.querySelector("span");
    
            const secondMonth = this.#calendarSection.querySelector(".month-second>h1");
            const yearOfSecondMonth = secondMonth.querySelector("span");
    
            let firstMonthInt = parseInt(firstMonth.innerText);
            let secondMonthInt = parseInt(secondMonth.innerText);
            let yearOfFirstMonthInt = parseInt(yearOfFirstMonth.innerText);
            let yearOfSecondMonthInt = parseInt(yearOfSecondMonth.innerText);


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

            this.#engraveDatesOfMonth();

            this.#clearIndicated()
            this.#indicateRangeOfDates();
        };


        /* selection 버튼 조작 */
        this.#btnSelection = this.#calendarSection.querySelector(".selection>button");
        this.#btnSelection.onclick = (e)=>{

            e.preventDefault();
            
            const viewerStartDate = this.#document.querySelector(".select-date #start-date");
            const viewerEndDate = this.#document.querySelector(".select-date #end-date");

            viewerStartDate.value = `${this.#startDay.year}-${this.#startDay.month}-${this.#startDay.date}`;
            viewerEndDate.value = `${this.#endDay.year}-${this.#endDay.month}-${this.#endDay.date}`;

            this.#calendarSection.classList.add("calendar-d-none");
        }
    }

    #clearIndicated(){
        if (this.#startDay != null) {
            this.#startDay.node.classList.remove("select");
            this.#startDay.node.classList.remove("select-start-complete");
        }

        if (this.#endDay != null) {
            this.#endDay.node.classList.remove("select");
            this.#endDay.node.classList.remove("select-end-complete");
        }

        for (let i = 0; i < this.#selectedDates.length; i++) 
            this.#selectedDates[i].classList.remove("select-middle");

        this.#selectedDates = [];
    }

    #indicateRangeOfDates(){
        const monthOfFirstSec = parseInt(this.#monthSections[0].querySelector("h1").innerText.split("월")[0]);
        const yearOfFirstSec = parseInt(this.#monthSections[0].querySelector("h1>span").innerText);
        const spanListOfFirstSec = this.#monthSections[0].querySelectorAll(".month-table-body span");

        const monthOfSecondSec = parseInt(this.#monthSections[1].querySelector("h1").innerText.split("월")[0]);
        const yearOfSecondSec = parseInt(this.#monthSections[1].querySelector("h1>span").innerText);
        const spanListOfSecondSec = this.#monthSections[1].querySelectorAll(".month-table-body span");

        for (let i = 0; i < spanListOfFirstSec.length; i++) {
            if (!this.#checkDateOrNot(spanListOfFirstSec[i]))
                continue;

            let date = parseInt(spanListOfFirstSec[i].innerText);

            if (this.#startDay != null && this.#startDay.date == date && this.#startDay.month == monthOfFirstSec && this.#startDay.year == yearOfFirstSec){
                this.#startDay.node.classList.remove("select");
                this.#startDay.node.classList.remove("select-start-complete");
                this.#startDay.node = spanListOfFirstSec[i];
                this.#startDay.node.classList.add("select");

                if (this.#endDay != null) 
                    this.#startDay.node.classList.add("select-start-complete");
            }

            if (this.#endDay != null && this.#endDay.date == date && this.#endDay.month == monthOfFirstSec && this.#endDay.year == yearOfFirstSec){
                this.#endDay.node.classList.remove("select");
                this.#endDay.node.classList.remove("select-end-complete");
                this.#endDay.node = spanListOfFirstSec[i];
                this.#endDay.node.classList.add("select");
                this.#endDay.node.classList.add("select-end-complete");
            }

            if (!this.#isIncludedRangeOfDates(date, monthOfFirstSec, yearOfFirstSec))
                continue;

            spanListOfFirstSec[i].classList.add("select-middle");
            this.#selectedDates.push(spanListOfFirstSec[i]);
        }

        for (let i = 0; i < spanListOfSecondSec.length; i++) {
            if (!this.#checkDateOrNot(spanListOfSecondSec[i]))
                continue;
            
            let date = parseInt(spanListOfSecondSec[i].innerText);

            if (this.#startDay != null && this.#startDay.date == date && this.#startDay.month == monthOfSecondSec && this.#startDay.year == yearOfSecondSec){
                this.#startDay.node.classList.remove("select");
                this.#startDay.node.classList.remove("select-start-complete");
                this.#startDay.node = spanListOfSecondSec[i];
                this.#startDay.node.classList.add("select");

                if (this.#endDay != null) 
                    this.#startDay.node.classList.add("select-start-complete");
            }

            if (this.#endDay != null && this.#endDay.date == date && this.#endDay.month == monthOfSecondSec && this.#endDay.year == yearOfSecondSec){
                this.#endDay.node.classList.remove("select");
                this.#endDay.node.classList.remove("select-end-complete");
                this.#endDay.node = spanListOfSecondSec[i];
                this.#endDay.node.classList.add("select");
                this.#endDay.node.classList.add("select-end-complete");
            }

            if (!this.#isIncludedRangeOfDates(date, monthOfSecondSec, yearOfSecondSec))
                continue;
            
            spanListOfSecondSec[i].classList.add("select-middle");
            this.#selectedDates.push(spanListOfSecondSec[i]);
        }
    }

    #checkValidRangeOfDates(startDay, endDay){
        if (startDay == null || endDay == null)
            return false;

        const start = this.#getStringYYYYMMDD(startDay.year, startDay.month, startDay.date);
        const end = this.#getStringYYYYMMDD(endDay.year, endDay.month, endDay.date);

        console.log(end-start);

        return (end - start) > 0 ? true : false;
    }

    #isIncludedRangeOfDates(date, month, year){
        if (this.#startDay == null || this.#endDay == null)
            return false;

        const middle = this.#getStringYYYYMMDD(year, month, date);
        const start = this.#getStringYYYYMMDD(this.#startDay.year, this.#startDay.month, this.#startDay.date);
        const end = this.#getStringYYYYMMDD(this.#endDay.year, this.#endDay.month, this.#endDay.date);

        const b1 = middle - start > 0 ? true : false;
        const b2 = end - middle > 0 ? true : false;

        return b1 && b2;
    }

    #checkDateOrNot(dateOrNot){
        const date = dateOrNot.innerText;
        
        return (dateOrNot.nodeName == "SPAN") 
            && (date.length == 1 || date.length == 2) 
            && ("number" == typeof(parseInt(date)));
    }

    #getStringYYYYMMDD(year, month, date){
        const stringYYYY = year.toString();
        let stringMM = month.toString();
        let stringDD = date.toString();

        if (stringMM.length == 1)
            stringMM = "0" + stringMM;

        if (stringDD.length == 1)
            stringDD = "0" + stringDD;

        return stringYYYY + stringMM + stringDD;
    }

    #engraveDatesOfMonth(){
        // var base = {"year": 2020, "month": 1, "date": 1, "day": 3}; // 윤년
        const base = {"year": 1976, "month": 1, "date": 1, "day": 4}; // 윤년
        const addFactor = [3, 0, 3, 2, 3, 2, 3, 3, 2, 3, 2, 3]; // 다음달 첫날이 몇 요일인지 구하기위해 이번달 요일번호(예:일요일 0번, 수요일 3번)에 각 월마다 정해진 인자를 더함

        const firstSection = this.#calendarSection.querySelector(".month-first");
        const firstMonth = firstSection.querySelector("h1").innerText.split('월')[0];
        const firstYear = firstSection.querySelector("h1>span").innerText;

        // month-first, month-second에 새겨질 달의 시작일이 몇요일인지 계산
        let dayNumberOfFirst = 0;
        let dayNumberOfSecond = 0;

        const monthSize = Math.abs(firstYear - base.year) * 12 + parseInt(firstMonth);
        let dayNumber = base.day;
        for (let i = 0; i < monthSize; i++){
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

        this.#clearDates();
        this.#deletePastDateStyle();

        this.#writeDates(dayNumberOfFirst, dayNumberOfSecond, firstMonth, firstYear);
        this.#indicatePastDate();
    }

    #clearDates(){
        const bodies = this.#calendarSection.querySelectorAll(".month-table-body");

        for (let i = 0; i < bodies.length; i++){
            let spanList = bodies[i].querySelectorAll("span");

            for (let j = 0; j < spanList.length; j++) 
                spanList[j].innerText = "";
        }
    }

    #writeDates(firstStartDayNumber, secondStartDayNumber, firstMonth, firstYear){
        const firstSection = this.#calendarSection.querySelector(".month-first");

        let bodies = firstSection.querySelectorAll(".month-table-body");

        let datesSizeListOfMonth = null;
        if (Math.abs(firstYear - 2020) % 4 == 0)
            datesSizeListOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        else
            datesSizeListOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

        let date = 1;
        for (let i = 0; i < bodies.length; i++) {
            let spanList = bodies[i].querySelectorAll("span");

            if (i == 0) 
                for (let j = firstStartDayNumber; j < spanList.length; j++)  
                    spanList[j].innerText = date++;
            else 
                for (let j = 0; j < spanList.length; j++) {
                    if (datesSizeListOfMonth[firstMonth - 1] >= date)
                        spanList[j].innerText = date++;
                }
        }


        const secondMonth = firstMonth == 12 ? 1 : parseInt(firstMonth)+ 1;
        const secondSection = this.#calendarSection.querySelector(".month-second");

        bodies = secondSection.querySelectorAll(".month-table-body");

        date = 1;
        for (let i = 0; i < bodies.length; i++) {
            let spanList = bodies[i].querySelectorAll("span");

            if (i == 0) {
                for (let j = secondStartDayNumber; j < spanList.length; j++)  
                    spanList[j].innerText = date++;
            } else 
                for (let j = 0; j < spanList.length; j++) {
                    if (datesSizeListOfMonth[secondMonth - 1] >= date)
                        spanList[j].innerText = date++;
                }
        }
    }

    #indicatePastDate(){
        const firstSection = this.#calendarSection.querySelector(".month-first");
        const monthOfFirstSec = firstSection.querySelector("h1");
        const yearOfFristSec = firstSection.querySelector("h1>span");
        const tableBodiesOfFirstSec = firstSection.querySelectorAll(".month-table-body");

        console.log(`year of first section is ${yearOfFristSec.innerText}`)
        console.log(`month of first section is ${monthOfFirstSec.innerText.split("월")[0]}`);

        for (let i = 0; i < tableBodiesOfFirstSec.length; i++) {
            const spanList = tableBodiesOfFirstSec[i].querySelectorAll("span");
            for (let j = 0; j < spanList.length; j++) {
                if(!this.#checkDateOrNot(spanList[j]))
                    continue;
                
                if (this.#isPastDate(parseInt(yearOfFristSec.innerText), parseInt(monthOfFirstSec.innerText.split("월")[0]), parseInt(spanList[j].innerText)))
                    spanList[j].classList.add("past-date");
            }
        }

        const secondSection = this.#calendarSection.querySelector(".month-second");
        const monthOfSecondSec = secondSection.querySelector("h1");
        const yearOfSecondSec = secondSection.querySelector("h1>span");
        const tableBodiesOfSecondSec = secondSection.querySelectorAll(".month-table-body");

        console.log(`year of second section is ${yearOfSecondSec.innerText}`);
        console.log(`month of second section is ${monthOfSecondSec.innerText.split("월")[0]}`);

        for (let i = 0; i < tableBodiesOfSecondSec.length; i++) {
            const spanList = tableBodiesOfSecondSec[i].querySelectorAll("span");
            for (let j = 0; j < spanList.length; j++) {
                if(!this.#checkDateOrNot(spanList[j]))
                    continue;
                
                if (this.#isPastDate(parseInt(yearOfSecondSec.innerText), parseInt(monthOfSecondSec.innerText.split("월")[0]), parseInt(spanList[j].innerText)))
                    spanList[j].classList.add("past-date");
            }
        }

    }

    #isPastDate(year, month, date){
        const yearOfToday = this.#today.getFullYear();
        const monthOfToday = this.#today.getMonth() + 1;
        const dateOfToday =  parseInt(this.#today.toString().split(" ")[2]);

        const todayStringYYYYMMDD = this.#getStringYYYYMMDD(yearOfToday, monthOfToday, dateOfToday);
        const paramStringYYYYMMDD = this.#getStringYYYYMMDD(year, month, date);

        return todayStringYYYYMMDD - paramStringYYYYMMDD > 0 ? true : false;
    }

    #deletePastDateStyle() {
        const bodies = this.#calendarSection.querySelectorAll(".month-table-body");
        for (let i = 0; i < bodies.length; i++) {
            const spanList = bodies[i].querySelectorAll("span");
            for (let j = 0; j < spanList.length; j++) 
                spanList[j].classList.remove("past-date");
        }
    }
}