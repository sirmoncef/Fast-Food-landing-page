let sun = document.getElementById("moon");
let body = document.querySelector("body");
let isSun = false; 

sun.onclick = function (event) {
    event.preventDefault();
    let elementsToChangeColor = document.querySelectorAll(".color-change");

    if (isSun) {
        sun.innerHTML = "<i class='bx bx-moon'></i>";
        isSun = false;
        body.style.backgroundColor = "#ffffff"; 
        elementsToChangeColor.forEach(element => {
            element.style.color = "black";
        });
    } else {
        sun.innerHTML = "<i class='bx bx-sun'></i>";
        isSun = true;
        body.style.backgroundColor = "#041A40"; 
        elementsToChangeColor.forEach(element => {
            element.style.color = "white";
        });
    }
};
