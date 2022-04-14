window.addEventListener("load", function() {
    const section = document.querySelector("section");
    const allSelectBtn = section.querySelector(".btn-all-select");
    const ul = section.querySelector("ul");
    const li = ul.querySelectorAll("li");
    
    // 전체선택 버튼
    allSelectBtn.onclick = () => {
        
        for(let i=0; i<li.length; i++) {
            const checkbox = li[i].querySelector("input[type=checkbox]");
            
            
            if(checkbox.checked == true)
                checkbox.checked = false;
            else
                checkbox.checked = true;
            
        }
    }
});