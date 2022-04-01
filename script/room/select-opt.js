window.addEventListener("load", function() {
    const form = document.querySelector("form");
    const selectNum = document.querySelector(".select-num");
    const lis = selectNum.querySelectorAll("li");
    const searchBtn = form.querySelector(".btn-search");
    let num = null;

    // select-num
    selectNum.onclick = function(e) {
        const dlg = new SelectOptNum();
        
        dlg.open();
        
        dlg.onselect = function(e) {

            for(let i=0; i<lis.length; i++) {
                lis[i].classList.add("d-none");
            }


            num = e.count;

            for(let i=0; i<num+1; i++) {
                let adultNum = lis[i].querySelector(".adult-num");
                let kidNum = lis[i].querySelector(".kid-num");
                
                adultNum.value = e.adult[i];
                kidNum.value = e.kid[i];

                lis[i].classList.remove("d-none");
            }
            
            
        };

    };

    searchBtn.onclick = function(e) {
        e.preventDefault();
        
        if(num+1 >= 2) {
            let dlg = new Dialog("객실(1,2)을 따로 선택하시겠습니까?", "네", "동일한 객실 선택", "8px 33px", "8px 18px", "./select-room.html", "./select-room.html");
            dlg.open();
        }else {
            let dlg = new Dialog("해당 조건으로 조회하시겠습니까?", "네", "취소", "", "",  "./select-room.html");
            dlg.open();
        }
    
        

    };

});