// 저작자: 김수하
import validIdCheck, {validPawwsordCheck} from "../valid-check.js";

window.addEventListener("load", function() {
    const form = document.querySelector("form");
    const idInput = form.querySelector(".id>input");
    const idOutput = form.querySelector(".id>output");
    const passwordInput = form.querySelector(".password>input");
    const passwordOutput = form.querySelector(".password>output");
    const submitBtn = form.querySelector(".btn-submit");
    

    submitBtn.onclick = () => {
        if(validIdCheck(idInput.value)== false)
            idOutput.classList.remove("d-none");
        else
            idOutput.classList.add("d-none");

        
        if(validPawwsordCheck(passwordInput.value)== false)
            passwordOutput.classList.remove("d-none");
        else
            passwordOutput.classList.add("d-none");  
    };
    
});



