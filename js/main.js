const toggleMenu = document.querySelector(".toggle-menu");
const unOrderList = document.querySelector("header .container ul");
const TextLanding = document.querySelector(".landing .text");
const linksOfMenu = document.querySelectorAll("header .container ul li a");
const angle = document.querySelectorAll(".change-bg");



toggleMenu.addEventListener("click", (eo) => {
    if (unOrderList.classList.contains("after-click-on-ul")) {
        unOrderList.classList.remove("after-click-on-ul");
        TextLanding.style.display='block'
        angle.forEach(item => {
            item.style.display='block'
        });
    } else {
        unOrderList.classList.add("after-click-on-ul");
        angle.forEach(item => {
            item.style.display='none'
        });
        TextLanding.style.display='none'
        linksOfMenu.forEach(item => {
            item.style.padding='20px'
            item.style.transition='all .3s'

            
        });
    }
});
