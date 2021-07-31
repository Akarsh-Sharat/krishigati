(function navbarToggle(){
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
})();