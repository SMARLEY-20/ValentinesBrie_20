function playFirst() {
    document.getElementById("popup").style.display = "flex";
}

function realYes() {
    document.getElementById("popup").style.display = "none";
    document.querySelector(".container").style.display = "none";
    document.getElementById("final").style.display = "block";
}

function moveButton() {
    let btn = document.querySelector(".no-btn");
    btn.style.top = Math.random() * window.innerHeight + "px";
    btn.style.left = Math.random() * window.innerWidth + "px";
}