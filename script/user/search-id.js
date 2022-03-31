window.addEventListener("load", function() {
    const form = document.querySelector("form");
    const nameInput = form.querySelector(".name>input");
    const nameOutput = form.querySelector(".name output");
    const emailInput = form.querySelector(".email>input");
    const emailOutput = form.querySelector(".email output");
    const sendNumBtn = form.querySelector(".btn-send-num");
    const confirmNum = form.querySelector(".confirm-num");
    const confirmLabel = confirmNum.querySelector("label");
    const countNum = confirmNum.querySelector(".count-num");
    let minutes = countNum.querySelector(".minutes");
    let seconds = countNum.querySelector(".seconds");
    let isCountDown = false;

    // 인증번호 발송 버튼
    sendNumBtn.onclick = (e) => {

        if(nameInput.value == "" || emailInput.value == "")
            return;
        else if(nameInput.value.length < 2) {
            nameOutput.classList.remove("d-none");
            return;
        }

        if(nameInput.value != "" && emailInput.value != "") {
            confirmLabel.classList.remove("d-none");
        }
        
        if(isCountDown)
            return;
        
        
        let minutesNum = parseInt(minutes.innerText);
        let secondsNum = parseInt(seconds.innerText);
        
        if(minutesNum == 0 && secondsNum == 0) {
            minutesNum = 3;
        }

        // 인증번호 시간 count down
        let tid = setInterval(() => {
            
            isCountDown = true;
            
            if(secondsNum < 0) {
                secondsNum = 59;
                minutesNum--;
            }
            
            if(secondsNum < 10)
                seconds.innerText = "0" + secondsNum;
            else
                seconds.innerText = secondsNum;
            

            secondsNum--;
            minutes.innerText = minutesNum;
            
            
            if(minutesNum == 0 && secondsNum < 0) {
                clearInterval(tid);
                isCountDown = false;
                return;
            }
            
        }, 1000);

    }
});