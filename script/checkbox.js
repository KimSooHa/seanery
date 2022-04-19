// 저작자: 김수하

const section = document.querySelector("section");
const allSelectBtn = section.querySelector(".btn-all-select");
const ul = section.querySelector("ul");
const li = ul.querySelectorAll("li");

let isAllChecked = false;

export default function allSelect() {
    // 전체선택 버튼
    allSelectBtn.onclick = () => {
        let checked = ul.querySelectorAll("input[type=checkbox]:checked");
        
        if(checked.length == li.length)
            isAllChecked = true;

        for(let i=0; i<li.length; i++) {
            const checkbox = li[i].querySelector("input[type=checkbox]");
            
            if(isAllChecked) 
            checkbox.checked = false;
            
            else 
            checkbox.checked = true;
            
        }
        isAllChecked = !isAllChecked;
    };
    
}


export function checkbox() {
    // 체크박스 클릭
    for(let i=0; i<li.length; i++) {
        const checkbox = li[i].querySelector("input[type=checkbox]");
        let checked = ul.querySelectorAll("input[type=checkbox]:checked");
        
        checkbox.onclick = () => {
            if(checkbox.checked == false || checked.length != li.length)
                isAllChecked = false;
        };
    }

}