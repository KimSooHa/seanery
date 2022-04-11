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
    const resetBtn = form.querySelector(".btn-reset");
    
    let minutes = countNum.querySelector(".minutes");
    let seconds = countNum.querySelector(".seconds");
    
    let isCountDown = false;

    

    // 인증번호 발송 버튼
    sendNumBtn.onclick = (e) => {

        // 이름 유효성 체크
        if(nameInput.value.length < 2) {
            nameOutput.classList.remove("d-none");
            nameOutput.innerText = "이름 2자리 이상 입력해주세요.";
            return;
        } else if(validNameCheck(nameInput.value) == false) {
            nameOutput.classList.remove("d-none");
            nameOutput.innerText = "유효한 이름의 형식이 아닙니다.";
            return;
        } else
            nameOutput.classList.add("d-none");
            
            // 이메일 유효성 체크
        if(validEmailCheck(emailInput.value) == false) {
            emailOutput.classList.remove("d-none");
            return;
        } else 
            emailOutput.classList.add("d-none");
        
        
        if(nameInput.value == "" && emailInput.value == "")
            return;
        else {
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
            
        }, 1000);

        
        if(minutesNum == 0 && secondsNum < 0) {
            clearInterval(tid);
            isCountDown = false;
            return;
        }

        // reset 버튼 누르면 리셋하기
        resetBtn.onclick = () => {
            minutes.innerText = "3";
            seconds.innerText = "00";
            
            clearInterval(tid);
            isCountDown = false;

            nameOutput.classList.add("d-none");
            emailOutput.classList.add("d-none");
            confirmLabel.classList.add("d-none");

            return;
        }

    }

});

// 이메일 유효성 검사
function validEmailCheck(email) {
    const pattern = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;

    return pattern.test(email);   // email이 정규표현식 pattern과 매칭한 결과를 boolean으로 반환
}

// 이름 유효성 검사
function validNameCheck(name) {

    const pattern = /^[가-힣a-zA-Z]+$/;

    return pattern.test(name);
}