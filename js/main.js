window.onload = function(){
    const burger = document.querySelector(".burger-menu");
    const nav = document.querySelector(".nav");
    const body = document.querySelector("body");
    burger.addEventListener("click", function(){
        burger.classList.toggle("active");
        nav.classList.toggle("active");
        body.classList.toggle("hidden");
    })
}