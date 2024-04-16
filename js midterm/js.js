let currentVolume = 50;

function updateVolumeDisplay() {
    document.getElementById("volume-display").innerText = `Volume: ${currentVolume}`;
}

function createBall() {
    const ball = document.createElement("div");
    ball.className = "ball";
    ball.style.left = `${Math.random() * window.innerWidth}px`;
    ball.style.top = `${Math.random() * window.innerHeight}px`;
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