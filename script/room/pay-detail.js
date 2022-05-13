window.addEventListener("load", function(){

  const roomList = this.document.querySelectorAll(".room-list");

  for(let i = 0; i < roomList.length; i++) {
    
    const checkPrice = roomList[i].querySelector(".check-price");

    checkPrice.onclick = function(e){
        e.preventDefault();

        const dlg = new Dialog();
        dlg.confirm();
    }
          

  };
});


function clickCheck1(e) {
  const checkBox = document.getElementsByName("view1");

    checkBox.forEach((cb) => {
      cb.checked = false;
    })
    e.checked = true;

    checkBox.forEach((cb) => {
      cb.checked = false;
    })
    e.checked = true;


}

function clickCheck2(e) {
  const checkBox = document.getElementsByName("view2");

    checkBox.forEach((cb) => {
      cb.checked = false;
    })
    e.checked = true;
}

