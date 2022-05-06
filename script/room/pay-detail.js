window.addEventListener("load", function(){
  var section = document.querySelector("#payDetail");
  var reservButton = section.querySelector(".btn-reserv1");

  
  reservButton.onclick = function(e){
      e.preventDefault();

      var dlg = new Dialog();
      dlg.confirm("정말 예약하시겠습니까?");

          

  };
});


function clickCheck1(e) {
  var checkBox = document.getElementsByName("view1");

    checkBox.forEach((cb) => {
      cb.checked = false;
    })
    e.checked = true;
}

function clickCheck2(e) {
  var checkBox = document.getElementsByName("view2");

    checkBox.forEach((cb) => {
      cb.checked = false;
    })
    e.checked = true;
}

