window.addEventListener("load", function(){
  var section = document.querySelector("#s14");
  var reservButton = section.querySelector(".btn-reserv1");

  
  reservButton.onclick = function(e){
      e.preventDefault();

      var dlg = new Dialog();
      dlg.oncancel = function(e){
          console.log("취소되었습니다.");

      };
      dlg.onreserv = function(){
          console.log("예약되었습니다.");
      };

      dlg.confirm("정말 예약하시겠습니까?");
          

  };
});
