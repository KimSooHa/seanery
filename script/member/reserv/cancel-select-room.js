// 취소할 객실을 선택하여 누를 때 selected 스타일 입히기
window.addEventListener("load", function(){
    var form = document.querySelector(".cancel-room");

    form.onclick = function(e){
        if (!e.target.classList.contains("room"))
            return;

        e.target.classList.toggle("selected");
    };
});