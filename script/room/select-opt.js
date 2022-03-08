window.addEventListener("load", function() {
    // const body = document.querySelector("body");
    const selectNum = document.querySelector(".select-num");
    const lis = selectNum.querySelectorAll("li");
    
    selectNum.onclick = function(e) {
        let dlg = new SelectOptNum();
        
        dlg.open();
        dlg.onselect = function(e) {

            for(let i=0; i<e.num; i++) {
                lis[i].classList.remove("d-none");
                // console.log(lis.length);
            }
            
            for(let i=0; i<lis.length; i++) {
                const adultNum = lis[i].querySelector(".adult-num");
                const kidNum = lis[i].querySelector(".kid-num");

                adultNum.value = e.adult;
                kidNum.value = e.kid;
            }

        };
    };

});