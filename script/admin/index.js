window.addEventListener("load", function(){
    const dashBoardsection = document.querySelector(".dash-board");
    const navBar = dashBoardsection.querySelector(".nav-bar");
    const navBarLis = navBar.querySelectorAll("li");

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

        if (pointedNavBarLi !== navAnchor.parentNode) {
            navAnchor.parentNode.classList.add("pointed");
            pointedNavBarLi.classList.remove("pointed");
        }
    };
});