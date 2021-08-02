function navbarToggle(){
    menuIcon = document.querySelector(".menu-icon");
    navList = document.querySelector(".nav-list");
    menuIcon.addEventListener("click", ()=>{
        if (menuIcon.innerHTML === "close"){
            menuIcon.innerHTML = "menu";
        }else{
            menuIcon.innerHTML = "close";
        }
        navList.classList.toggle("menu-active");
        console.log("click");
    });
}

function navbarSticky() {
    let navbar = document.querySelector(".navbar");
    let heroBg = document.querySelector(".hero-bg");
    window.onscroll = function() {
        if (window.pageYOffset > 0) {
            navbar.classList.add('sticky');
            heroBg.style.marginTop = "100px";
        } else {
            navbar.classList.remove('sticky');
            heroBg.style.marginTop = "0";
        }
    };
}

// functions call
navbarToggle();
navbarSticky();