import Calendar from "../calendar.js"

window.addEventListener("load", function(){
    const form = document.querySelector("form");
    const startDateBox = form.querySelector(".select-date>#start-date");
    const endDateBox = form.querySelector(".select-date>#end-date");

    const calendar = new Calendar(document);

    startDateBox.onclick = (e)=>{
        e.preventDefault();
        calendar.load();
    }

    endDateBox.onclick = (e)=>{
        e.preventDefault();
        calendar.load();
    }
});

window.addEventListener("load", function(){
    const form = document.querySelector("form");
    const selectNum = form.querySelector(".select-num");
    const listOfSelectNum = selectNum.querySelectorAll("li");

    const selectRoom = form.querySelector(".select-room");

    selectRoom.onclick = (e)=>{
        let roomCount = 0;
        for (let i = 0; i < listOfSelectNum.length; i++) 
            if (!listOfSelectNum[i].classList.contains("d-none"))
                roomCount++;

        const dlg = new SelectOptRoom(roomCount);
        dlg.load();
    };
});

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