function navbarToggle(){
    let menuIcon = document.querySelector(".menu-icon");
    let navList = document.querySelector(".nav-list");
    menuIcon.addEventListener("click", ()=>{
        if (menuIcon.innerHTML === "close"){
            menuIcon.innerHTML = "menu";
        }else{
            menuIcon.innerHTML = "close";
        }
        navList.classList.toggle("menu-active");
    });
}

function navbarSticky() {
    let navbar = document.querySelector(".navbar");
    let heroBg = document.querySelector(".hero-bg");
    window.onscroll = function() {
        if (window.pageYOffset > 0) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    };
}

// functions call
(function() {
    navbarToggle();
    navbarSticky();
})();