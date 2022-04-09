class SelectOptRoom{
    #html;
    #css;
    #roomCount;

    constructor(roomCount){
        this.#roomCount = roomCount;
        this.#html = 
        `
            <section class="select-opt-room">
                <h1 class="d-none">객실 선택</h1>
                <form>
                    <fieldset class="select-room-box">
                        <header>
                            <legend>Room1</legend>
                            <div>
                                <span>Select Room</span>
                                <a href="">방 리스트 보기</a>
                                <input type="hidden" name="room-1-select" value="">
                            </div>
                        </header>
                        
                        <div class="select-list">
                            <span>Superior Ocean View</span>
                            <span>Standard Ocean View</span>
                            <span>Studio Twin Ocean View</span>
                            <span>Loyal Suite Ocean View</span>
                            <span>Superior Village View</span>
                            <span>Standard Village View</span>
                            <span>Studio Twin Village View</span>
                            <span>Loyal Suite Village View</span>
                        </div>
                    </fieldset>
            
                    <fieldset class="select-room-box">
                        <header>
                            <legend>Room2</legend>
                            <div>
                                <span>Select Room</span>
                                <a href="">방 리스트 보기</a>
                                <input type="hidden" name="room-2-select" value="">
                            </div>
                        </header>
                        
                        <div class="select-list">
                            <span>Superior Ocean View</span>
                            <span>Standard Ocean View</span>
                            <span>Studio Twin Ocean View</span>
                            <span>Loyal Suite Ocean View</span>
                            <span>Superior Village View</span>
                            <span>Standard Village View</span>
                            <span>Studio Twin Village View</span>
                            <span>Loyal Suite Village View</span>
                        </div>
                    </fieldset>
                    <fieldset class="select-room-box">
                        <header>
                            <legend>Room3</legend>
                            <div>
                                <span>Select Room</span>
                                <a href="">방 리스트 보기</a>
                                <input type="hidden" name="room-3-select" value="">
                            </div>
                        </header>
                        
                        <div class="select-list">
                            <span>Superior Ocean View</span>
                            <span>Standard Ocean View</span>
                            <span>Studio Twin Ocean View</span>
                            <span>Loyal Suite Ocean View</span>
                            <span>Superior Village View</span>
                            <span>Standard Village View</span>
                            <span>Studio Twin Village View</span>
                            <span>Loyal Suite Village View</span>
                        </div>
                    </fieldset>
                    <input type="submit" name="select-opt-room" value="Select">
                </form>
            </section>
        `

        this.#css =
        `
            /* 저작자 : 조영인 */
            /* === layout ============================== */
            .select-opt-room{
                /* layout */
                background-color: rgba(0, 0, 0, 0.72);
                height: 100vh;

                position: absolute;
                top: 0;
                left: 0;
                width: 100vw;
                height: 100vh;

                z-index: 1000;


                /* item layout */
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            /* === content block ============================== */
            /* --- select-room ------------------------------ */
            .select-opt-room form{
                /* layout */
                background-color: #EEEEEE;
                display: block;
                width: 255px;
                border-radius: 14px;
                border: 1px solid #707070;

                position: relative;
                top: -100px;
                opacity: 0;

                transition: top .5s, opacity .5s;
            }

            .select-opt-room form.show {
                top: 0px;
                opacity: 1;
            }

                .select-opt-room form>fieldset{
                    /* layout */
                    border-bottom: 1px solid #A9A9A9;

                    /* item layout */
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    /* reset */
                    padding: 0px;
                }

                    .select-opt-room form>fieldset header{
                        /* layout */
                        box-sizing: border-box;
                        width: 100%;
                        padding-top: 35px;
                        padding-left: 27px;
                        padding-right: 16px;

                        /* item layout */
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                    }

                        .select-opt-room form>fieldset header>legend{
                            /* text */
                            font-family: "Minion Pro";
                            font-size: 17px;
                            font-weight: bold;
                            color: #707070;

                            /* layout */
                            align-self: flex-start;
                        }

                        .select-opt-room form>fieldset header>div{
                            /* layout */
                            display: inline-block;
                            width: 117px;
                            border-bottom: 1px solid #707070;

                            align-self: flex-end;
                        }

                            .select-opt-room form>fieldset header>div>span{
                                /* text */
                                font-family: "Minion Pro";
                                font-size: 17px;
                                font-weight: normal;
                                color: #707070;
                            }

                            .select-opt-room form>fieldset header>div>a{
                                /* text */
                                text-indent: -9999px;
                                overflow: hidden;

                                /* layout */
                                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8.596' height='4.798' viewBox='0 0 8.596 4.798'%3E%3Cg id='Icon_feather-chevron-down' data-name='Icon feather-chevron-down' transform='translate(0.707 0.707)'%3E%3Cpath id='Icon_feather-chevron-down-2' data-name='Icon feather-chevron-down' d='M9,13.5l3.591,3.591L16.182,13.5' transform='translate(-9 -13.5)' fill='none' stroke='%23707070' stroke-linecap='round' stroke-linejoin='round' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E%0A");
                                background-repeat: no-repeat;
                                background-size: contain;
                                background-position: center;

                                display: inline-block;
                                width: 10px;
                                height: 5px;

                                margin-bottom: 3px;
                            }

                            .select-opt-room form>fieldset header>div>a.open{
                                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8.596' height='4.798' viewBox='0 0 8.596 4.798'%3E%3Cg id='Icon_feather-chevron-down' data-name='Icon feather-chevron-down' transform='translate(7.889 4.091) rotate(180)'%3E%3Cpath id='Icon_feather-chevron-down-2' data-name='Icon feather-chevron-down' d='M9,13.5l3.591,3.591L16.182,13.5' transform='translate(-9 -13.5)' fill='none' stroke='%23707070' stroke-linecap='round' stroke-linejoin='round' stroke-width='1'/%3E%3C/g%3E%3C/svg%3E%0A");
                                background-repeat: no-repeat;
                                background-size: contain;
                                background-position: center;
                            }

                    .select-opt-room form .select-list, form fieldset>div:nth-child(3){
                        /* layout */
                        width: 100%;
                        height: 0;
                        overflow: hidden;

                        margin-top: 15px;
                        margin-bottom: 25px;

                        /* item layout */
                        display: flex;
                        flex-direction: column;
                        align-items: center;

                        /* effect */
                        transition: height 1s;
                    }

                    .select-opt-room form .select-list.active{
                        height: 270px;
                    }

                        .select-opt-room form .select-list span{
                            /* layout */
                            display: block;
                            margin-top: 10px;
                        }

                        .select-opt-room form .select-list span:hover{
                            /* layout */
                            background-color: #707070;
                            border-radius: 15px;
                            padding: 5px;

                            /* util */
                            cursor: pointer;
                        }


                .select-opt-room form>input{
                    /* text */
                    font-family: "Minion Pro";
                    font-size: 17px;
                    font-weight: bold;
                    color: #707070;

                    /* layout */
                    margin-top: 15.8px;
                    margin-left: 97px;
                    padding-bottom: 15px;

                    /* utils */
                    background-color: #EEEEEE;
                    cursor: pointer;

                    /* reset */
                    border: none;
                }
        `
    }

    load(){
        /* select-opt-room html 문서 임베딩*/
        const styleElement = document.createElement("style");
        styleElement.insertAdjacentText("beforeend", this.#css);
        document.head.insertAdjacentElement("afterbegin", styleElement);
        document.body.insertAdjacentHTML("beforeend", this.#html);


        const form = document.querySelector(".select-opt-room form");
        var roomBoxList = form.querySelectorAll(".select-room-box");

        /* roomCount로 보여질 opt-room 갯수 설정 */
        for (let i = 0; i < roomBoxList.length - this.#roomCount; i++) 
            roomBoxList[roomBoxList.length - i - 1].classList.add("d-none");

        /* show style 넣기 */
        setTimeout(()=>{
            form.classList.add("show");
        }, 0);
        console.log(form.classList.contains("show"));
    
        form.addEventListener("click", (e)=>{
            if (e.target.nodeName != "A")
                return;
    
            e.preventDefault();
    
            for (let i = 0; i < roomBoxList.length; i++) {
                const anchor = roomBoxList[i].querySelector("a");
    
                if (e.target === anchor) {
                    roomBoxList[i].querySelector(".select-list").classList.toggle("active");
                    e.target.classList.toggle("open");
                }
            }
        });
    
        form.addEventListener("click", (e)=>{
            if (!e.target.parentNode.classList.contains("select-list"))
                return;
    
            console.log(e.target.innerText);
    
            for (let i = 0; i < roomBoxList.length; i++) {
                if (roomBoxList[i].querySelector(".select-list") === e.target.parentNode){
                    const spanOfselected = roomBoxList[i].querySelector("header>div>span");
                    spanOfselected.innerText = e.target.innerText;
    
                    const hiddenInput = roomBoxList[i].querySelector("input[type='hidden']");
                    console.log(hiddenInput.name);
                    hiddenInput.value = e.target.innerText;
    
                    roomBoxList[i].querySelector(".select-list").classList.toggle("active");
                    e.target.classList.toggle("open");
                }
            }
        });
    }
}

// window.addEventListener("load", function(){
//     const form = document.querySelector("form");
//     var roomBoxList = form.querySelectorAll(".select-room-box");

//     form.addEventListener("click", (e)=>{
//         if (e.target.nodeName != "A")
//             return;

//         e.preventDefault();

//         for (let i = 0; i < roomBoxList.length; i++) {
//             const anchor = roomBoxList[i].querySelector("a");

//             if (e.target === anchor) {
//                 roomBoxList[i].querySelector(".select-list").classList.toggle("active");
//                 e.target.classList.toggle("open");
//             }
//         }
//     });

//     form.addEventListener("click", (e)=>{
//         if (!e.target.parentNode.classList.contains("select-list"))
//             return;

//         console.log(e.target.innerText);

//         for (let i = 0; i < roomBoxList.length; i++) {
//             if (roomBoxList[i].querySelector(".select-list") === e.target.parentNode){
//                 const spanOfselected = roomBoxList[i].querySelector("header>div>span");
//                 spanOfselected.innerText = e.target.innerText;

//                 const hiddenInput = roomBoxList[i].querySelector("input[type='hidden']");
//                 console.log(hiddenInput.name);
//                 hiddenInput.value = e.target.innerText;

//                 roomBoxList[i].querySelector(".select-list").classList.toggle("active");
//                 e.target.classList.toggle("open");
//             }
//         }
//     });
// });
