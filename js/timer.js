const timerCanvas = document.getElementById("timer");
const timerCtx = timerCanvas.getContext("2d");

//create clockwise timer with a border and  text in middle that counts down from X

class Timer {
    constructor(x, y, radius, startAngle, endAngle, color, text, time) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.color = color;
        this.text = text;
        this.time = time;
    }

    draw() {
        timerCtx.beginPath();
        timerCtx.arc(
            this.x,
            this.y,
            this.radius,
            this.startAngle,
            this.endAngle
        );
        timerCtx.lineWidth = 10;
        timerCtx.strokeStyle = this.color;
        timerCtx.stroke();
        timerCtx.closePath();
        timerCtx.font = "30px Arial";
        timerCtx.textAlign = "center";
        timerCtx.fillText(this.text, this.x, this.y + 10);
    }

    update() {
        timerCtx.clearRect(0, 0, timerCanvas.width, timerCanvas.height);
        this.draw();
    }
}

const timer = new Timer(100, 100, 50, 0, 2 * Math.PI, "black", "10", 10);

timer.draw();

setInterval(function () {
    timer.time--;
    timer.text = timer.time;
    timer.update();
}, 1000);
