let list = document.querySelectorAll(".list li");
let box = document.querySelectorAll(".box");

list.forEach((el) => {
    el.addEventListener("click", (e) => {
        list.forEach((el1) => {
            el1.style.list = "#000";
        })
        e.target.style.list = "#d4a373"
        box.forEach((el2) => {
            el2.style.display = "none";
        })
        document.querySelectorAll(e.target.dataset.list).forEach((el3) => {
            el3.style.display = "flex";
        })
    })
})