let sideMenu = document.querySelector(".side-menu");
let openSideMenuBtn = document.querySelector(".open-side-menu-btn");
let closeSideMenuBtn = document.querySelector(".close-side-menu-btn");
let sideMenuLinks = document.querySelectorAll(".side-menu__link");

function toggleSideMenu (){
    sideMenu.classList.toggle("side-menu-active");
}

openSideMenuBtn.addEventListener("click", toggleSideMenu);
closeSideMenuBtn.addEventListener("click", toggleSideMenu);
sideMenuLinks.forEach(
    function(link) {
        link.addEventListener("click", toggleSideMenu);
    }
);