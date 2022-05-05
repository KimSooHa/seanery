window.addEventListener("load", function(){
    const inqurySection = document.querySelector(".inqury");
    const selectorAllButton = inqurySection.querySelector(".selector-all");

    const checkBoxes = inqurySection.querySelectorAll("input[name='inqury-box-check']");

    let bAllSelected = false;
    selectorAllButton.onclick = (e)=>{
        e.preventDefault();

        if (bAllSelected) {
            for (let i = 0; i < checkBoxes.length; i++)
                checkBoxes[i].checked = false;

            bAllSelected = false;
            return;
        }

        for (let i = 0; i < checkBoxes.length; i++) {
            if (checkBoxes[i].checked == false) 
                checkBoxes[i].checked = true;
        }

        bAllSelected = true;
    };
});