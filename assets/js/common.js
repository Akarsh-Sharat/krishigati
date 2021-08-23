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


// var news = 
// {
//     "name": "hello world",
//     "source": {
//         "id": null,
//         "name": "Autoblog"
//     },
//     "author": "Reuters",
//     "title": "Ford will request GM's 'Cruise' and 'Super Cruise' trademarks be rescinded",
//     "description": "Filed under:\nGovernment/Legal,Ford,GM,Technology\n\nContinue reading Ford will request GM's 'Cruise' and 'Super Cruise' trademarks be rescinded\n\nFord will request GM's 'Cruise' and 'Super Cruise' trademarks be rescinded originally appeared on Autoblog on Sat, 1…",
//     "url": "https://www.autoblog.com/2021/08/14/ford-blue-cruise-counterattack/",
//     "urlToImage": "https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1062x597/format/jpg/quality/100/https://s.aolcdn.com/os/ab/_cms/2021/08/04105249/BlueCruise_Ford-F-150_01.jpg",
//     "publishedAt": "2021-08-14T12:57:00Z",
//     "content": "DETROIT Ford said late on Friday it will ask the U.S. Patent Office to rescind trademarks obtained by rival General Motors for the terms \"Cruise\" and \"Super Cruise,\" escalating a brawl GM began by su… [+1851 chars]"
// }

// {
//     "pagination": {
//         "limit": 100,
//         "offset": 0,
//         "count": 100,
//         "total": 293
//     },
//     "data": [
//         {
//             "author": "TMZ Staff",
//             "title": "Rafael Nadal Pulls Out Of U.S. Open Over COVID-19 Concerns",
//             "description": "Rafael Nadal is officially OUT of the U.S. Open ... the tennis legend said Tuesday it's just too damn unsafe for him to travel to America during the COVID-19 pandemic. \"The situation is very complicated worldwide,\" Nadal wrote in a statement. \"The…",
//             "url": "https://www.tmz.com/2020/08/04/rafael-nadal-us-open-tennis-covid-19-concerns/",
//             "source": "TMZ.com",
//             "image": "https://imagez.tmz.com/image/fa/4by3/2020/08/04/fad55ee236fc4033ba324e941bb8c8b7_md.jpg",
//             "category": "general",
//             "language": "en",
//             "country": "us",
//             "published_at": "2020-08-05T05:47:24+00:00"
//         },
//         [...]
//     ]
// }