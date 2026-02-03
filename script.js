let music = document.getElementById("bgMusic");

function playFirst() {
    document.getElementById("popup").style.display = "flex";
}

function realYes() {
    document.getElementById("popup").style.display = "none";
    document.querySelector(".container").style.display = "none";
    document.getElementById("final").style.display = "block";
    music.play();
    startFireworks();
}

function moveButton() {
    let btn = document.querySelector(".no-btn");
    btn.style.top = Math.random() * window.innerHeight + "px";
    btn.style.left = Math.random() * window.innerWidth + "px";
}

/* 🎆 FIREWORKS */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function startFireworks() {
    setInterval(() => {
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: canvas.width/2,
                y: canvas.height/2,
                angle: Math.random()*2*Math.PI,
                speed: Math.random()*5 + 2,
                life: 100
            });
        }
    }, 500);
    animate();
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => {
        p.x += Math.cos(p.angle)*p.speed;
        p.y += Math.sin(p.angle)*p.speed;
        p.life--;
        ctx.fillStyle = "pink";
        ctx.fillRect(p.x,p.y,3,3);
    });
    particles = particles.filter(p => p.life > 0);
}