let currentVolume = 50;

function updateVolumeDisplay() {
    document.getElementById("volume-display").innerText = `Volume: ${currentVolume}`;
}

const phrases = [
    "Better luck next time",
    "You're bad at this",
    "Change the volume already", 
    "Boo hoo",
    "Make it louder",
    "That's too loud.. quieter",
];

function createBall() {
    const ball = document.createElement("div");
    ball.className = "ball";
    ball.style.left = `${Math.random() * window.innerWidth}px`;
    ball.style.top = `${Math.random() * window.innerHeight}px`;
    document.getElementById("balls-container").appendChild(ball);

    const text = document.createElement("p");
    const randomIndex = Math.floor(Math.random() * phrases.length);
    text.textContent = phrases[randomIndex];

    text.classList.add("ball-text");

    ball.appendChild(text);

    document.getElementById("balls-container").appendChild(ball);
}

function increaseVolume() {
    const change = Math.floor(Math.random() * 10) + 1;
    currentVolume += change;
    updateVolumeDisplay();
    console.log(`Volume increased by ${change}. Current volume: ${currentVolume}`);
    createBall();
}

function decreaseVolume() {
    const change = Math.floor(Math.random() * 10) + 1;
    currentVolume -= change;
    if (currentVolume < 0) {
        currentVolume = 0;
    }
    updateVolumeDisplay();
    console.log(`Volume decreased by ${change}. Current volume: ${currentVolume}`);
    createBall();
}

function muteVolume() {
    currentVolume = 0;
    updateVolumeDisplay();
    console.log("Volume muted. Shhh...");
    createBall();
}