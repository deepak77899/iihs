const ham = document.querySelector(".hamburger-menu");
let menuOpen = false;
ham.addEventListener("click", () => {
    if (!menuOpen) {
        ham.classList.add('open');
        menuOpen = true;
        document.querySelector(".menu-for-mobile").style.left = "0";
    }
    else {
        ham.classList.remove('open');
        menuOpen = false;
        document.querySelector(".menu-for-mobile").style.left = "-100%";
    }
});
