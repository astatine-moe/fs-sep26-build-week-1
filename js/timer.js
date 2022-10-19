const canvas = document.getElementById("timer");
const ctx = canvas.getContext("2d");

//create clockwise timer with a border and  text in middle that counts down from X

const startTime = new Date();
const time = 5 * 1000; // 60 seconds
let arc = 0;
let timeRemaining = 0;
const thickness = 10;
let finished = false;

const moveCircle = () => {
    let now = new Date();
    let timeElapsed = (startTime - now) * -1;
    let percentageElapsed = timeElapsed / time;

    if (percentageElapsed < 1) {
        arc = Math.PI * 1.5 - Math.PI * 2 * percentageElapsed;
    }
};

const drawCircle = () => {
    ctx.beginPath();
    ctx.arc(
        canvas.width / 2,
        canvas.height / 2,
        canvas.height / 3,
        0,
        Math.PI * 2,
        true
    );
    ctx.lineWidth = thickness;
    ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(
        canvas.width / 2,
        canvas.height / 2,
        canvas.height / 3,
        Math.PI * 1.5,
        arc,
        true
    );
    ctx.lineWidth = thickness;
    ctx.strokeStyle = "rgb(0, 254, 255)";
    ctx.stroke();
};

const updateText = () => {
    let now = new Date();
    let timeElapsed = (startTime - now) * -1;

    if (timeElapsed >= time) {
        timeRemaining = "0";
        finished = true;
    } else {
        timeRemaining = Math.floor((time - timeElapsed) / 1000);
    }
};

function drawTime() {
    ctx.font = canvas.height / 4 + "px Outfit";

    ctx.font = canvas.height / 4 + "px Outfit";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fillText(
        !finished ? timeRemaining : "-",
        canvas.width / 2,
        canvas.height / 2
    );
}

function drawText() {
    ctx.font = canvas.height / (!finished ? 20 : 10) + "px Outfit";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "rgb(255,255,255)";

    ctx.fillText(
        !finished ? "SECONDS" : "TIMES",
        canvas.width / 2,
        canvas.height / 3
    );
    ctx.fillText(
        !finished ? "REMAINING" : "UP",
        canvas.width / 2,
        canvas.height / 1.5
    );
}
const render = () => {
    //clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    moveCircle();
    drawCircle();
    updateText();
    drawTime();
    drawText();
};

let requestId = null;

(function animationLoop() {
    requestId = window.requestAnimationFrame(animationLoop);

    if (!finished) {
        render();
    } else {
        //disable animation loop
        window.cancelAnimationFrame(requestId);
        //timer done
    }
})();
