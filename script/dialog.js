class Dialog {

  #section;
  #title;
  #confirmBtn;
  #cancelBtn;
  #boxWidth;
  #boxHeight;
  #acceptHref;
  #rejectHref;
  #acceptBtnPd;
  #rejectBtnPd;

  constructor(params) {
    this.#section = document.createElement("section");
  
    document.body.append(this.#section);
    this.#section.classList.add("dialog");
  
    if(typeof params == "string") {
      this.#title = arguments[0];

      // 확인/취소 버튼
      this.#confirmBtn = arguments[1];
      this.#cancelBtn = arguments[2];

      this.#acceptBtnPd = arguments[3] || "8px 40px";
      this.#rejectBtnPd = arguments[4] || "8px 31px";
      
      // 확인/취소버튼 링크
      this.#acceptHref = arguments[5];
      this.#rejectHref = arguments[6];
      
      // 대화상자 너비, 높이
      this.#boxWidth = arguments[7] || "328px"; 
      this.#boxHeight = arguments[8] || "270px";
    }

  }

  open() {
    const html = `
    <h1 class="d-none">대화상자</h1>
    <div class="box">
      <p>${this.#title}</p>
      
      <div>
          <a class="btn-reject" href="${this.#rejectHref}">${this.#cancelBtn}</a>
          <a class="btn-accept" href="${this.#acceptHref}">${this.#confirmBtn}</a>
      </div>
    </div>`;

    // section.append(html);
    this.#section.insertAdjacentHTML("beforeend", html);
    const style = document.createElement("style");

    style.textContent = `

    /* ====== btn style ==================================================== */
    .dialog .btn-reject {
        /* text */
        font-family: 'Segoe UI';
        font-size: 18px;
        font-weight: normal;
        color: #000000;
        
        /* layout */
        border-radius: 20px;
        border: 2px solid #5782B9;
        padding: ${this.#rejectBtnPd};

        transition: .3s;
    }

    .dialog .btn-reject:hover {
        /* text */
        color: #fff;

        /* layout */
        background-color: #5782B9;
    }

    .dialog .btn-accept {
        /* text */
        font-family: 'Segoe UI';
        font-size: 18px;
        font-weight: normal;
        color: #000000;
        
        /* layout */
        border-radius: 20px;
        border: 2px solid #5782B9;
        padding: ${this.#acceptBtnPd};
        background-color: #5782B9;

        transition: .3s;
    }

    .dialog .btn-accept:hover {

      /* layout */
      background-color: transparent;
  }


    /* ====== outer block ================================================== */
    .dialog {
        /* layout */
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.72);
        z-index: 1000;

        /* item layout */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .dialog .box {
        /* layout */
        width: ${this.#boxWidth};
        height: ${this.#boxHeight};
        background-color: #EEEEEE;
        border-radius: 38px;
        box-sizing: border-box;
        position: relative;
        top: -100px;
        opacity: 0;
        
        /* item layout */
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        transition: top .5s, opacity .5s;
    }

    /* 애니메이션 효과 */
    .dialog .box.show {
      top: 0px;
      opacity: 1;
    }

    .dialog .box div {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }


    /* ======= content block =============================================== */

    .dialog .box p {
        /* text */
        font-family: 'Segoe UI';
        font-size: 18px;
        font-weight: normal;
        color: #000000;
        text-align: center;

        /* layout */
        margin-top: 20px;
    }`;

    document.head.append(style); // head에 style 태그 추가

    const box = this.#section.querySelector(".box");

    setTimeout(function () {
      box.classList.add("show");
    }, 0);

    
    const acceptBtn = box.querySelector(".btn-accept");

    // 확인 버튼
    acceptBtn.onclick = function (e) {
      if(this.#acceptHref == null)
        e.preventDefault();

      this.#section.remove();

    }.bind(this);

    const rejectBtn = box.querySelector(".btn-reject");

    // 취소 버튼
    rejectBtn.onclick = function (e) {
      if(this.#rejectHref == null)
        e.preventDefault();

      this.#section.remove();

    }.bind(this);

  }

}


