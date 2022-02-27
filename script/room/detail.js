// 이미지 슬라이드
window.addEventListener("load", function() {
    var article = document.querySelector(".room-info");
    var infoImgBox = article.querySelector(".room-info-img-box");
    var imgBox = infoImgBox.querySelector(".img-box");
    var imgGroup = imgBox.querySelector("div");
    var leftBtn = infoImgBox.querySelector(".img-btn-left-arrow");
    var rightBtn = infoImgBox.querySelector(".img-btn-right-arrow");
    var imgIndex = 0;

    rightBtn.onclick = function(e) {
        var imgWidth = imgBox.offsetWidth;

        if(imgIndex == 3)
            return;

        imgGroup.style.transform += "translateX("+-imgWidth+"px)";
        imgIndex++;
    };

    leftBtn.onclick = function(e) {
        var imgWidth = imgBox.offsetWidth;

        if(imgIndex == 0)
            return;

        imgGroup.style.transform += "translateX("+imgWidth+"px)";
        imgIndex--;
    };
});