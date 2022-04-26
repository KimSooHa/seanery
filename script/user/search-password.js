// 저작자: 김수하
import validIdCheck, {validEmailCheck} from "../valid-check.js";

window.addEventListener("load", function() {
    const form = document.querySelector("form");
    const idInput = form.querySelector(".id>input");
    const idOutput = form.querySelector(".id>output");
    const emailInput = form.querySelector(".email>input");
    const emailOutput = form.querySelector(".email>output");
    const submitBtn = form.querySelector(".btn-submit");
    

    submitBtn.onclick = () => {
        if(validIdCheck(idInput.value)== false)
            idOutput.classList.remove("d-none");
        else
            idOutput.classList.add("d-none");

        
        if(validEmailCheck(emailInput.value)== false)
            emailOutput.classList.remove("d-none");
        else
            emailOutput.classList.add("d-none");
            
    };
    
});

