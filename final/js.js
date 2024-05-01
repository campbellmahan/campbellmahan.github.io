let currentVolume = 50;

function updateVolumeDisplay() {
    document.getElementById("volume-display").innerText = `Volume: ${currentVolume}`;
}

const phrases = [
    "Better luck next time",
    "Change the volume already", 
    "Boo hoo",
    "Nice try",
    "Keep going",
    "You're almost there",
    "Volume adjustment in progress...",
    "Nearly perfect",
    "Maybe give up",
    "Just a bit more"
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

function resetScreen() {
    currentVolume = 50;
    updateVolumeDisplay();

    document.getElementById("balls-container").innerHTML = "";
}

function confirmVolume() {
    const confirmed = confirm(`Are you sure you want to set the volume to ${currentVolume}?`);
    return confirmed;
}