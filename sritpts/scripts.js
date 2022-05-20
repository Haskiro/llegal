const burger = document.querySelector(".icons-list__button");
const nav = document.querySelector(".nav")
burger.addEventListener("click", () => {
    nav.classList.toggle("active");
})