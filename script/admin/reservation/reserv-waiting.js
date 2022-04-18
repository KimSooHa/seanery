window.addEventListener("load", function() {
    const section = document.querySelector("section");
    const allSelectBtn = section.querySelector(".btn-all-select");
    const ul = section.querySelector("ul");
    const li = ul.querySelectorAll("li");
    let isAllChecked = false;
    // 전체선택 버튼
    allSelectBtn.onclick = () => {
        
        for(let i=0; i<li.length; i++) {
            const checkbox = li[i].querySelector("input[type=checkbox]");
            
            checkbox.checked = !checkbox.checked;
            isAllChecked = !isAllChecked;
        }
    }
});