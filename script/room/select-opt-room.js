window.addEventListener("load", function(){
    var roomBoxList = document.querySelectorAll(".select-room-box");

    for (var i = 0; i < roomBoxList.length; i++) {
        roomBoxList[i].onclick = (function(x){
            return function(e){
                if (e.target.nodeName != "A")
                    return;

                e.preventDefault();

                var selectList = roomBoxList[x].querySelector(".select-list");
                selectList.classList.toggle("active");
                e.target.classList.toggle("open");
            };
        })(i);
    }

    // select-list에서 방 선택 후 header에 있는 span에 해당 방을 표시해주고, 
    // hidden 된 input 태그에 value 값을 넣어주는 코드 작성하기 (다음에 !!) 
});
