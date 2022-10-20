class Timer extends EventTarget {
    constructor(id, seconds, thickness = 12.5) {
        super();
        this.id = id;
        this.startTime = 0;
        this.time = seconds * 1000;
        this.timeRemaining = 0;
        this.thickness = thickness;
        this.arc = 0;
        this.finished = false;
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext("2d");
    }

    moveCircle() {
        let now = new Date();
        let timeElapsed = (this.startTime - now) * -1;
        let percentageElapsed = timeElapsed / this.time;

        if (percentageElapsed < 1) {
            this.arc = Math.PI * 1.5 - Math.PI * 2 * percentageElapsed;
        }
    }

    drawCircle() {
        this.ctx.beginPath();
        this.ctx.arc(
            this.canvas.width / 2,
            this.canvas.height / 2,
            this.canvas.height / 3,
            0,
            Math.PI * 2,
            true
        );
        this.ctx.lineWidth = this.thickness;
        this.ctx.strokeStyle = "rgba(255, 255, 255, 0.5)";
        this.ctx.stroke();
        this.ctx.beginPath();
        this.ctx.arc(
            this.canvas.width / 2,
            this.canvas.height / 2,
            this.canvas.height / 3,
            Math.PI * 1.5,
            this.arc,
            true
        );
        this.ctx.lineWidth = this.thickness;
        this.ctx.strokeStyle = "rgb(0, 254, 255)";
        this.ctx.stroke();
    }

    updateText() {
        let now = new Date();
        let timeElapsed = (this.startTime - now) * -1;

        if (timeElapsed >= this.time) {
            this.timeRemaining = "0";
            this.finished = true;
        } else {
            this.timeRemaining = Math.floor((this.time - timeElapsed) / 1000);
        }
    }

    drawTime() {
        this.ctx.font = this.canvas.height / 4 + "px Outfit";

        this.ctx.font = this.canvas.height / 4 + "px Outfit";
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "rgb(255,255,255)";
        this.ctx.fillText(
            !this.finished ? this.timeRemaining : "-",
            this.canvas.width / 2,
            this.canvas.height / 2
        );
    }

    drawText() {
        this.ctx.font =
            this.canvas.height / (!this.finished ? 20 : 10) + "px Outfit";
        this.ctx.textAlign = "center";
        this.ctx.textBaseline = "middle";
        this.ctx.fillStyle = "rgb(255,255,255)";

        this.ctx.fillText(
            !this.finished ? "SECONDS" : "TIMES",
            this.canvas.width / 2,
            this.canvas.height / 3
        );
        this.ctx.fillText(
            !this.finished ? "REMAINING" : "UP",
            this.canvas.width / 2,
            this.canvas.height / 1.5
        );
    }

    render() {
        //clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.moveCircle();
        this.drawCircle();
        this.updateText();
        this.drawTime();
        this.drawText();
    }

    animationLoop() {
        this.int = setInterval(() => {
            if (!this.finished) {
                this.render();
            } else {
                //disable animation loop
                clearInterval(this.int);
                //timer done
                this.dispatchEvent(new Event("done"));
            }
        }, 10);
    }

    start() {
        this.startTime = new Date();
        this.render();
        this.animationLoop();
    }
    stop() {
        clearInterval(this.int);
    }
}

// const timer = new Timer("timer", 10);

// timer.addEventListener("done", () => {
//     console.log("finished");
// });

// setTimeout(() => {
//     timer.start();
// }, 1000);
