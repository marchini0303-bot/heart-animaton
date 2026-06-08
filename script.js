const words = [];
const total = 200;

for (let i = 0; i < total; i++) {
    const span = document.createElement("span");
    span.className = "word";
    span.textContent = "I love you";
    document.body.appendChild(span);
    words.push(span);
}

let offset = 0;

function animate() {
    offset += 0.002;

    for (let i = 0; i < total; i++) {

        const t = (i / total) * Math.PI * 2 + offset;

        const x = 16 * Math.pow(Math.sin(t), 3);

        const y = -(
            13 * Math.cos(t)
            - 5 * Math.cos(2 * t)
            - 2 * Math.cos(3 * t)
            - Math.cos(4 * t)
        );

        const scale = 20;

        const posX = window.innerWidth / 2 + x * scale;
        const posY = window.innerHeight / 2 + y * scale;

        words[i].style.left = posX + "px";
        words[i].style.top = posY + "px";
    }

    requestAnimationFrame(animate);
}

const words = [];
const total = 200;

for (let i = 0; i < total; i++) {
    const span = document.createElement("span");
    span.className = "word";
    span.textContent = "I love you";
    document.body.appendChild(span);
    words.push(span);
}

let offset = 0;

function animate() {
    offset += 0.002;

    for (let i = 0; i < total; i++) {

        const t = (i / total) * Math.PI * 2 + offset;

        const x = 16 * Math.pow(Math.sin(t), 3);

        const y = -(
            13 * Math.cos(t)
            - 5 * Math.cos(2 * t)
            - 2 * Math.cos(3 * t)
            - Math.cos(4 * t)
        );

        const scale = 20;

        const posX = window.innerWidth / 2 + x * scale;
        const posY = window.innerHeight / 2 + y * scale;

        words[i].style.left = posX + "px";
        words[i].style.top = posY + "px";
    }

    requestAnimationFrame(animate);
}

animate();