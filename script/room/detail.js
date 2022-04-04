// 저작자: 김수하

// 이미지 슬라이드
window.addEventListener("load", function() {
    var article = document.querySelector(".room-info");
    var infoImgBox = article.querySelector(".room-info-img-box");
    var imgBox = infoImgBox.querySelector(".img-box");
    var imgGroup = imgBox.querySelector("div");
    var leftBtn = infoImgBox.querySelector(".img-btn-left-arrow");
    var rightBtn = infoImgBox.querySelector(".img-btn-right-arrow");
    var imgIndex = 0;
    var imgWidth = imgBox.offsetWidth;

    window.onresize = () => {
        imgWidth = imgBox.offsetWidth;
        imgGroup.style.transform = "translateX("+-imgWidth*imgIndex+"px)";
        imgGroup.classList.add("resize");
    }

    rightBtn.onclick = function(e) {
        imgGroup.classList.remove("resize");

        if(imgIndex == 3)
            return;

        // imgGroup.style.transform += "translateX("+-imgWidth+"px)";
        imgIndex++;
        imgGroup.style.transform = "translateX("+-imgWidth*imgIndex+"px)";
    };

    leftBtn.onclick = function(e) {

        imgGroup.classList.remove("resize");

        if(imgIndex == 0)
            return;

        // imgGroup.style.transform += "translateX("+imgWidth+"px)";
        imgGroup.style.transform += "translateX("+imgWidth+"px)";
        imgIndex--;
    };
});