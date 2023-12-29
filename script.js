const body = document.querySelector("body"),
    menu=body.querySelector(".menu"),
    toggle = body.querySelector(".toggle");

toggle.addEventListener("click", () =>{
    menu.classList.toggle("close");
})


