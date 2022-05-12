const navMenu = document.querySelector("nav");

document.addEventListener("scroll", () => {
    if(window.scrollY > 50) {
        return navMenu.classList.add("scrolled");
    }
    navMenu.classList.remove("scrolled");
})