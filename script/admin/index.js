// 저작자 : 조영인
// nav-bar, board-type2 관련
window.addEventListener("load", function(){
    const dashBoardsection = document.querySelector(".dash-board");
    const navBar = dashBoardsection.querySelector(".nav-bar");
    const navBarLis = navBar.querySelectorAll("li");

    const todayBoard = dashBoardsection.querySelector(".today.board-type2");
    const weekBoard = dashBoardsection.querySelector(".week.board-type2");
    const monthBoard = dashBoardsection.querySelector(".month.board-type2");


    navBar.onclick = (e)=>{
        e.preventDefault();

        if (e.target.nodeName != "A")
            return;
        
        const navAnchor = e.target;

        let pointedNavBarLi = null;

        for (let i = 0; i < navBarLis.length; i++) {
            if (navBarLis[i].classList.contains("pointed")) {
                pointedNavBarLi = navBarLis[i];
                break;
            }
        }

        if (pointedNavBarLi === navAnchor.parentNode) 
            return;

        navAnchor.parentNode.classList.add("pointed");
        pointedNavBarLi.classList.remove("pointed");

        const pointedBoard = 
            pointedNavBarLi.querySelector("A").innerText == "Today" 
            ? todayBoard 
            : pointedNavBarLi.querySelector("A").innerText == "Week" 
            ? weekBoard
            : monthBoard;

        pointedBoard.classList.add("d-none");

        if (navAnchor.innerText == "Today") 
            todayBoard.classList.remove("d-none");
        else if (navAnchor.innerText == "Week") 
            weekBoard.classList.remove("d-none");
        else if (navAnchor.innerText == "Month") 
            monthBoard.classList.remove("d-none");
    };
});

// board-type3 그래프 그리기 관련
window.addEventListener("load", function(){
    const dashBoardsection = document.querySelector(".dash-board");
    const board = dashBoardsection.querySelector(".ratio-info.board-type3");
    const numSuper = parseInt(board.querySelector("dl li:first-child dd").innerText);
    const numStand = parseInt(board.querySelector("dl li:nth-child(2) dd").innerText);
    const numStudio = parseInt(board.querySelector("dl li:nth-child(3) dd").innerText);
    const numRoyal = parseInt(board.querySelector("dl li:nth-child(4) dd").innerText);

    const numTotal = numSuper + numStand + numStudio + numRoyal;
    const deg1 = 360 * (numStudio / numTotal);
    const deg2 = 360 * (numStand / numTotal);
    const deg3 = 360 * (numSuper / numTotal);

    const ringGraph = board.querySelector(".circle-graph .ring");

    let transitionDeg1 = 0;
    let transitionDeg2 = deg1;
    let transitionDeg3 = deg1 + deg2;
    let transitionDeg4 = deg1 + deg2 + deg3;

    let bTriggerInterval = false;

    const boardHeight = parseInt(window.getComputedStyle(board).getPropertyValue("height").split("px")[0]);
    const boardOffsetTop = board.offsetTop;
    document.onscroll = (e) =>{

        // 첫번째 조건식 : 그래프가 화면에 조금 보이기 시작하는 시점인지 확인. 조금 보이기 시작하는 시점부터 그래프가 그려짐
        if (window.scrollY + window.innerHeight < boardHeight + boardOffsetTop - 100 || bTriggerInterval == true)
            return;

        bTriggerInterval = true;

        const intervalId = setInterval(() => {
            ringGraph.style.background = 
            `
                conic-gradient(
                    rgba(87, 139, 185, 1) 0deg ${deg1 > transitionDeg1 ? transitionDeg1 += 1 : deg1}deg,
                    rgba(255, 255, 255, 1) ${deg1 > transitionDeg1 ? transitionDeg1 : deg1}deg ${deg1}deg,

                    rgba(67, 106, 129, 1) ${deg1}deg ${(deg1 + deg2) > transitionDeg2 ? transitionDeg2 += 1 : deg1 + deg2}deg,
                    rgba(255, 255, 255, 1) ${(deg1 + deg2) > transitionDeg2 ? transitionDeg2 : deg1 + deg2}deg ${deg1 + deg2}deg,

                    rgba(30, 49, 70, 1) ${deg1 + deg2}deg ${(deg1 + deg2 + deg3) > transitionDeg3 ? transitionDeg3 += 1 : deg1 + deg2 + deg3}deg,
                    rgba(255, 255, 255, 1) ${(deg1 + deg2 + deg3) > transitionDeg3 ? transitionDeg3 : deg1 + deg2 + deg3}deg ${deg1 + deg2 + deg3}deg,

                    rgba(136, 165, 181, 1) ${deg1 + deg2 + deg3}deg ${360 > transitionDeg4 ? transitionDeg4 += 1 : 360}deg,
                    rgba(255, 255, 255, 1) ${360 > transitionDeg4 ? transitionDeg4 : 360}deg 360deg
                )
            `;

            if ((transitionDeg1 >= deg1) 
                && (transitionDeg2 >= (deg1 + deg2))
                && (transitionDeg3 >= (deg1 + deg2 + deg3))
                && (transitionDeg4 >= 360)
            ) 
                clearInterval(intervalId);
        }, 1);
    };

    document.onscroll(); // 처음 페이지 로드 될 때 애니메이션이 실행가능하다면 실행하기 위해 한번 호출해줌
});