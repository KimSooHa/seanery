// 저작자: 김수하

window.addEventListener("load", function() {
    const form = document.querySelector("form");
    const photoBox = form.querySelector(".member-photo");
    // const memberPhoto = photoBox.querySelector("div");
    const memberImg = photoBox.querySelector("img");
    const fileInput = photoBox.querySelector("input[type=file]");
    const btnBox = form.querySelector(".btn-box");
    const btnReset = btnBox.querySelector("input[type=reset]");
    let cloneArr;

    if(memberImg.src != "")
        init();
    

    // 이미지 변경
    fileInput.onchange = (e) => {
        
        let file = fileInput.files[0];  // files: File 객체의 컬렉션
        
        if(file) {
            // FileReader 객체 생성
            var reader = new FileReader();

            reader.onload = (e) => {
                // memberPhoto.style.backgroundImage = `url(${e.target.result})`;
                memberImg.src = e.target.result;
                memberImg.classList.remove("d-none");
            }
            // reader가 이미지 읽도록 하기
            reader.readAsDataURL(file);
        }

        // 브라우저상에서만 변경
        // memberPhoto.style.backgroundImage = `url(${URL.createObjectURL(file)})`;  // 바이너리(업로드)된 이미지 데이터(로드된 결과물의 이벤트 객체를 전달)
        // URL.revokeObjectURL(file);  // 이벤트 발생마다 생성되는 객체 URL 해제
    };

    btnReset.onclick = (e) => {
        if(cloneArr[0].value == "") {
            console.log(cloneArr[0]);
            fileInput.value = "";
            memberImg.classList.add("d-none");
        } else {
            cloneArr[1] = cloneArr[0].cloneNode(true);
            fileInput.replaceWith(cloneArr[1]);
            memberImg.src = e.target.result;
        }

        // // memberPhoto.style.backgroundImage = `url(${fileInput.value})`;
        // if(memberImg.src == "") {
            // memberImg.classList.add("d-none");
        // } else
        // fileInput.files[0].select();
        // document.selection.clear();

    }

    function init() {
        // fileInput.value = memberImg.src;
        cloneArr = [fileInput.cloneNode(true)];
    }
});