document.addEventListener("DOMContentLoaded", function () {
    let pos = 0;
    let item1 = document.querySelector(".item");
    let item2 = document.querySelector(".item:nth-child(2)");
    item1.addEventListener("click", function () {
        item2.innerText = "hello world!";
        item1.innerText = 2 ** 3;
        alert("start!");
        setInterval(function () {
            if (pos < 2500) {
                pos++;
                item1.style.top = 0.1 * pos + "px";
                item1.style.left = 0.1 * pos + "px";
                item1.style.backgroundColor = `rgb(${0.1 * pos}, ${0.1 * pos}, ${0.1 * pos})`;
            }
        }, 5);
    });





});
//動畫是一格一格畫快速切換的