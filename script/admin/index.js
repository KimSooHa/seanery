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