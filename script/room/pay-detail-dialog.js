class Dialog{

    #section;
    

    constructor(params){
        this.#section = document.createElement("section");
        document.body.append(this.#section);
    
        this.oncancel = null;
        this.onreserv = null; 

        
    }

    confirm(){
        var html = `
        <div class="screen">
                <div class = "dlg">
                    <h1 class="d-none">객실별 인원수</h1>

                    <div class="top">
                        <div>옵션사항</div>
                        <div class="img-btn-close">닫기버튼</div>
                    </div>
                    
                    <div class="breakfast-title">조식</div>
                    <fieldset class="breakfast">
                        <legend class="d-none">조식 선택</legend>
                        <div>1박</div>
                        <label>성인</label>
                        <div class="adults-num">
                            <span class="img-btn-minus">빼기 버튼</span>
                            <input type="number" value="1" name="room1_adult-num" id="adult-num" readonly disabled>
                            <span class="img-btn-plus">더하기 버튼</span>
                        </div>
                        
                        <label>어린이</label>
                        <div class="kid-num">
                            <span class="img-btn-minus">빼기 버튼</span>
                            <input type="number" value="0" name="room1_kid-num" id="kid-num" readonly disabled>
                            <span class="img-btn-plus">더하기 버튼</span>
                        </div>
                    </fieldset>

                    <div class="view-title">전망</div>
                    <fieldset>
                        <legend class="d-none">전망 선택</legend> 

                        <div class="room-num">객실1</div>
                        <div class="room-view">
                            <label class="d-none">객실1 뷰</label>
                            <label>오션 뷰</label><div>a</div>
                            <label>빌리지 뷰</label><div>a</div>
                        </div>

                        <div class="room-num">객실2</div>
                        <div class="room-view">
                            <label class="d-none">객실2 뷰</label>
                            <label>오션 뷰</label><input type="radio" name="view">
                            <label>빌리지 뷰</label><input type="radio" name="view">
                        </div>
                    </fieldset>
                    <div>현재 오션 뷰는 객실 마감 되었습니다.</div>

                    <div class="div-line"></div>

                    <div class="ask-detail">
                        <div>
                            <div>요청사항</div>
                            <div>
                                <span>성인 3인 투숙 시, 별도 요금 발생 <br></span>
                                <span>※ 추가 요청 사항은 아래 기재 바랍니다.</span>
                            </div>
                        </div>
                        <fieldset>
                            <legend class="d-none">요청사항</legend>
                            <input type="text" placeholder="기재해 주신 요청사항은 예약 시 참고되며 &#13;&#10; 제공이 보장되지는 않습니다.">
                        </fieldset>

                        <div class="div-line"></div>
                    </div>


                    <div class="opt-check">
                        <div>Superior</div>
                        <div>
                            <span>객실1(성인1, 어린이1) <br></span>
                            <span>객실2(성인1, 어린이0)</span>
                        </div>
                    </div>


                    <div class="div-line"></div>


                    <div class="opt-total">
                        <div>Total</div>
                        <div>
                            <div>
                                <label>객실금액</label>
                                <span>145,000(1박) x 2(객실 수)<br>+오션뷰 20,000 (추가요금)</span>
                            </div>
                        </div>

                        <div>옵션</div>
                        <div>
                            <div>
                                <label>조식</label>
                                <span>0(1박)</span>
                            </div>
                        </div>
                    </div>

                    <div class="div-line"></div>

                    <div class="total-pay">
                        <div>
                            <span>총 예약금액</span>
                            <span>310,000원</span>
                        </div>
                    </div>
                    <div class="btn-reserv">
                        <a href=""><input type="button" value="예약하기"></a>
                    </div>
            </div>
        </div>
        `;
    

        this.#section.insertAdjacentHTML("beforeend", html);
        var style = document.createElement("style");
        
        style.textContent = `
        .img-btn-close {
            /* layout */
            background-image: url("data:image/svg+xml,%3Csvg id='Icon_feather-plus' data-name='Icon feather-plus' xmlns='http://www.w3.org/2000/svg' width='31.776' height='31.776' viewBox='0 0 31.776 31.776'%3E%3Cg id='Icon_feather-plus-2' data-name='Icon feather-plus' transform='matrix(0.719, 0.695, -0.695, 0.719, 39.735, -35.779)'%3E%3Cpath id='패스_12' data-name='패스 12' d='M18,29.972V7.5' transform='translate(0.736 34.995)' fill='none' stroke='%23707070' stroke-linecap='round' stroke-linejoin='round' stroke-width='3'/%3E%3Cpath id='패스_13' data-name='패스 13' d='M7.5,18H29.972' transform='translate(0 35.731)' fill='none' stroke='%23707070' stroke-linecap='round' stroke-linejoin='round' stroke-width='3'/%3E%3C/g%3E%3C/svg%3E%0A");            background-repeat: no-repeat;
            background-position: right center;
            height: 30px;
            width: 30px;
            display: inline-block;
            overflow: hidden;
            text-indent: -999px;
        
            /* effect */
            cursor: pointer;
        }
        
        .btn-add-room {
            /* text */
            font-family: 'Minion Pro';
            font-size: 17px;
            font-weight: bold;
            color: #707070;
        
            /* effect */
            cursor: pointer;
        }
        
        .btn-select {
            /* text */
            font-family: 'Minion Pro';
            font-size: 17px;
            font-weight: bold;
            color: #707070;
            
            /* layout */
            width: 120px;
            background-color: transparent;
            border: none;
        
            /* effect */
            cursor: pointer;
        }
        
        .img-btn-minus{
            height: 10px;
            width: 1px;
        
            padding: 0 10px;
            margin-right: 18px;
        }
        
        .img-btn-plus{
            height: 10px;
            width: 10px; 
        
            padding: 0 10px;
            
        
        }
        
        
        .btn-reserv{
            margin-top: 40px;
        }
        
        .btn-reserv>a>input{
            font-family: 'Minion Pro';
            font-size: 14px;
            font-weight: bold;
            color: white;
        
            background-color: #B19D74;
            border-radius: 25px 25px 20px 20px;
            border: none;
        
        
            width: 360px;
            height: 64px;
        }
        
        /* -----------------line------------------------------------- */
        .div-line{
            margin: 20px 20px;
            border-bottom: 1px solid #BFBFBF;
        }
        
        
        
        /* ====== outer block ================================================== */

        .screen{
            position: absolute;
            left:0;
            top:0;
            background-color: rgba(0, 0, 0, 0.486);
            width:100vw;
            height: 120vh;
            z-index: 100;
        
            display: flex;
            justify-content: center;
            align-items: center;
        }

        /* --------------inner block----------------------------------------------------------------- */
        


        
        .dlg {
            /* layout */
            width: 360px;
            background-color: #EEEEEE;
            border-radius: 20px;
            position : relative;
        }
        
        .top{
            display: flex;
            justify-content: space-between;
            padding: 20px 17px 10px 26px;
        
        }
        
         .dlg fieldset {
            display: flex;
            padding: 0;
            margin: 0;
        }
             .dlg>div>div:first-child{
                font-family: 'Minion Pro';
                font-size: 17px;
                font-weight: bold;
                color: #707070;
            }
        
        
        
        .breakfast-title{
            margin: 16px 0 14px 0;
        }
        
             .dlg .breakfast{
                font-family: 'Minion Pro';
                font-size: 14px;
                font-weight: bold;
                color: #707070;
                
                margin: 0;
                padding-left: 19px;
            }
                 .dlg .breakfast>div:nth-child(2){
                    padding-right: 10px;            
                }
                 .dlg .breakfast>label{
                    margin-right: 10px; 
                    margin-left: 10px;
        
                }
        
         
             .dlg>div:nth-child(3){
                font-family: 'Minion Pro';
                font-size: 14px;
                font-weight: bold;
                color: #707070;
        
        
                padding-left: 28px;
            }
             .dlg>div:nth-child(5){
                font-family: 'Minion Pro';
                font-size: 14px;
                font-weight: bold;
                color: #707070;
        
        
                padding-left: 28px;
            }
        
             .dlg>div:nth-child(7){
                font-family: 'Minion Pro';
                font-size: 12px;
                font-weight: normal;
                color: #9A0436;
        
                margin-top: 20px;
                margin-left: 31px;
            }
        
             .dlg fieldset div input {
                /* text */
                font-family: 'Minion Pro';
                font-size: 14px;
                font-weight: bold;
                color: #707070;
                
                /* layout */
                border: none;
                width: 22px;
                padding: 0;
        
                text-align: center;
                display: flex;
                justify-content: center;
            }
        
            .adults-num{
                display: flex;
                align-items: center;
            }
        
            .kid-num{
                display: flex;
                align-items: center;
            }
        
        
        .view-title{
            margin-top: 30px;
        }
        .room-num{
            display: flex;
            align-items: center;
        
            font-family: 'Minion Pro';
            font-size: 12px;
            font-weight: bold;
        
            margin-right: 10px;
            margin-left: 20px;
        
        }
        
            .room-view{
                display: grid;
                grid-template-columns: 70px 25px;
                grid-template-rows: repeat(2,30px);
                margin: 0 5px;
        
                align-items: center;
        
            }
            
            .room-view>label:nth-child(2n){
                font-family: 'Minion Pro';
                font-size: 14px;
                font-weight: normal;
            }
            
            .room-view>div{
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13.5' height='13.5' viewBox='0 0 13.5 13.5'%3E%3Cpath id='Icon_material-check-box-outline-blank' data-name='Icon material-check-box-outline-blank' d='M16.5,6V16.5H6V6H16.5m0-1.5H6A1.5,1.5,0,0,0,4.5,6V16.5A1.5,1.5,0,0,0,6,18H16.5A1.5,1.5,0,0,0,18,16.5V6A1.5,1.5,0,0,0,16.5,4.5Z' transform='translate(-4.5 -4.5)' fill='%23707070'/%3E%3C/svg%3E%0A");
                background-repeat:no-repeat;
                height:13.5px;
                width:13.5px;
                
            }

            .room-view>div::visited{
                background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='13.5' height='13.5' viewBox='0 0 13.5 13.5'%3E%3Cpath id='Icon_material-check-box' data-name='Icon material-check-box' d='M16.5,4.5H6A1.5,1.5,0,0,0,4.5,6V16.5A1.5,1.5,0,0,0,6,18H16.5A1.5,1.5,0,0,0,18,16.5V6A1.5,1.5,0,0,0,16.5,4.5ZM9.75,15,6,11.25l1.057-1.057L9.75,12.877l5.693-5.693L16.5,8.25Z' transform='translate(-4.5 -4.5)' fill='%23707070'/%3E%3C/svg%3E%0A");
                background-repeat:no-repeat;
            }
        
        .ask-detail{
            margin-left: 26px;
        }
            .ask-detail>div>div{
                margin-bottom: 14px;
            }
            
            .ask-detail>div>div:nth-child(2){
                font-family: 'Minion Pro';
                font-size: 14px;
                font-weight: bold;
                color: #707070;
            }
        
            .ask-detail>fieldset>input{
                width: 280px;
                height: 120px;
                color: #707070;
            }
        
            
        .opt-check{
            margin-left: 26px;
        }
            .opt-check>div{
                font-family: 'Minion Pro';
                font-size: 14px;
                font-weight: bold;
                color: #707070;
            }
            .opt-check>div:first-child{
                font-family: 'Minion Pro';
                font-size: 17px;
                font-weight: bold;
                color: #707070;
        
                margin-bottom: 10px;
            }
        
        .opt-total{
            margin-left: 26px;
        }
        
            .opt-total>div:first-child{
                font-family: 'Minion Pro';
                font-size: 17px;
                font-weight: bold;
                color: #707070;
        
                margin-bottom: 13px;
            }
        
            .opt-total>div:nth-child(4){
                font-family: 'Minion Pro';
                font-size: 14px;
                font-weight: bold;
                color: #707070;
        
                margin-top: 30px;
                margin-bottom: 13px;
            }
            .opt-total>div>div{
                font-family: 'Minion Pro';
                font-size: 14px;
                font-weight: normal;
                color: #707070;
                
                display: flex;
                justify-content: space-between;
            }
        
            .opt-total>div>div>span{
                margin-right: 17px;
                text-align: right;
            }
        
        .total-pay{
            margin-left: 26px;
        }
            .total-pay>div{
                display: flex;
                justify-content: space-between;
            }
            .total-pay>div>span:nth-child(2){
                margin-right: 17px;
            }
        `;

        document.head.append(style);

        var dlg = this.#section.querySelector(".dlg");

        var cancelButton = this.#section.querySelector(".img-btn-close");
        
        cancelButton.onclick = function(e){
            e.preventDefault();

            console.log("cancel");

            this.#section.remove();

            this.oncancel();


        }.bind(this);
    }
}
