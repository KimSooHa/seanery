// 저작자: 김수하
import {validNameCheck, validPhoneNumCheck} from "../valid-check.js";

window.addEventListener("load", function() {
    const form = document.querySelector("form");
    const nameInput = form.querySelector(".name>input");
    const nameOutput = form.querySelector(".name>output");
    const phoneNumInput = form.querySelector(".phone-num>input");
    const phoneNumOutput = form.querySelector(".phone-num>output");
    const submitBtn = form.querySelector(".btn-submit");
    

    submitBtn.onclick = () => {
        if(validNameCheck(nameInput.value)== false)
            nameOutput.classList.remove("d-none");
        else
            nameOutput.classList.add("d-none");

        
        if(validPhoneNumCheck(phoneNumInput.value)== false)
            phoneNumOutput.classList.remove("d-none");
        else
            phoneNumOutput.classList.add("d-none");
            
    };
    
});

