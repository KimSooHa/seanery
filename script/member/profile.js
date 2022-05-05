import validIdCheck, {validNameCheck, validEmailCheck, validPhoneNumCheck} from "../valid-check.js";

window.addEventListener("load", function(){
    const form = document.querySelector(".modification form");
    const submitButton = form.querySelector("button[type='submit']");
    const nameInput = form.querySelector("input[name='name']");
    const emailInput = form.querySelector("input[name='email']");
    const passwordInput = form.querySelector("input[name='password']");
    const passwordConfirmInput = form.querySelector("input[name='password-confirm']");
    const phoneInput = form.querySelector("input[name='phone']");

    submitButton.onclick = (e)=>{
        e.preventDefault();

        if(validNameCheck(nameInput.value) == false)
            form.querySelector("input[name='name']+output").classList.remove("d-none");
        else
            form.querySelector("input[name='name']+output").classList.add("d-none");

        if (validEmailCheck(emailInput.value) == false)
            form.querySelector("input[name='email']+output").classList.remove("d-none");
        else
            form.querySelector("input[name='email']+output").classList.add("d-none");

        if (passwordConfirmInput.value != passwordInput.value)
            form.querySelector("input[name='password-confirm']+output").classList.remove("d-none");
        else
            form.querySelector("input[name='password-confirm']+output").classList.add("d-none");



        if (validPhoneNumCheck(phoneInput.value) == false)
            form.querySelector("input[name='phone']+output").classList.remove("d-none");
        else
            form.querySelector("input[name='phone']+output").classList.add("d-none");
    };
});