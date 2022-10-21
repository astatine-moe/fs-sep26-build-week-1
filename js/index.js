let questionIndex = 0;
let clicked = false;
let score = 0;
let questionsShown = false;
let invalidated = false;
let invalidateInt;
let questionsChosen = [];

let pieChart = document.querySelector(".pie-chart");

const togglePane = (paneId) => {
    pieChart.style.display = "none";
    if (paneId === "results-pane") {
        pieChart.style.display = "block";
    }
    const pane = document.querySelector("#" + paneId);
    const allPanes = document.querySelectorAll(".pane");

    allPanes.forEach((p) => {
        p.style.display = "none";
    });

    pane.style.removeProperty("display");
};

let starsRated = 1;

window.onload = () => {
    togglePane("welcome-pane");
    document.getElementById("questionTotal").innerText = questions.length;
};

const welcome = {
    proceedButton: document.querySelector("#proceed"),
    promiseCheckbox: document.querySelector("#promise"),
};

welcome.proceedButton.addEventListener("click", () => {
    if (welcome.promiseCheckbox.checked) {
        togglePane("questions-pane");
    } else {
        alert("Please check the box to proceed.");
    }
});

welcome.promiseCheckbox.addEventListener("change", () => {
    welcome.proceedButton.disabled = !welcome.promiseCheckbox.checked;
});

/* Results */

const rateUs = document.querySelector("#rate-us");

rateUs.addEventListener("click", () => {
    togglePane("feedback-pane");
});

const showResults = (score) => {
    const answers = document.querySelector("#answers");
    //loop questions chosen

    questionsChosen.forEach((question) => {
        //use lists embedded in other lists
        //set title
        const questionTitle = document.createElement("li");
        questionTitle.innerText = question.question;
        answers.appendChild(questionTitle);

        const options = document.createElement("ul");

        question.options.forEach((option) => {
            const optionLi = document.createElement("li");
            optionLi.innerText = option;
            options.appendChild(optionLi);

            if (option === question.answer) {
                optionLi.classList.add("correct");
                if (option === question.userAnswer) {
                    optionLi.classList.add("yourAnswerCorrect");
                }
            } else {
                optionLi.classList.add("incorrect");
                if (option === question.userAnswer) {
                    optionLi.classList.add("yourAnswerIncorrect");
                }
            }
        });

        answers.appendChild(options);
    });

    questionsShown = false;
    console.log(
        `Amount of questions correct: ${score}`,
        `Total amount of questions: ${questions.length}`
    );

    let total = questions.length;
    let correct = score;
    let incorrect = total - score;

    const correctPercentage = function (score) {
        return (100 * score) / questions.length;
    };

    const wrongPercentage = function (score) {
        return ((questions.length - score) / questions.length) * 100;
    };

    var data = anychart.data.set([
        ["Wrong", wrongPercentage(score)],
        ["Correct", correctPercentage(score)],
    ]);

    var chart = anychart.pie(data); // create pie chart with data

    chart.innerRadius(`70%`);
    chart.background("transparent");
    chart.container(`container`);
    chart.draw();

    // create a color palette
    let palette = anychart.palettes.distinctColors();

    // set the colors according to the brands
    palette.items([{ color: "#d20094" }, { color: "#00ffff" }]);

    // apply the donut chart color palette
    chart.palette(palette);

    chart.legend(false);
    chart.labels(false);

    // create label for display in middle
    let label = anychart.standalones.label();

    // configure the label
    // loop that checks results and gives a second text failed that works dynamically with test results below 60%

    let html =
        '<span style = "color: white; font-size:20px;"> Congratulations! <br/> You passed the exam</span>' +
        '<br/><br/></br><span style="color:white; font-size: 14px;"><i> Well send you the certificate <br/>in a few minutes.</i><br/>Check your email (including <br/> promotions / spam folder) </span>';

    //if less than 60% correct

    if (correctPercentage(score) < 60) {
        html =
            '<span style = "color: white; font-size:20px;"> Sorry! <br/> You failed the exam</span></span>';
    }

    label
        .useHtml(true)
        .text(html)
        .position("center")
        .anchor("center")
        .hAlign("center")
        .vAlign("middle");

    // set the label as the center content
    chart.center().content(label);

    // switch h3 with DOM
    document.getElementById("correctPercent").innerHTML =
        correctPercentage(score).toFixed(2) + "%";

    document.getElementById("incorrectPercent").innerHTML =
        wrongPercentage(score).toFixed(2) + "%";

    //switch h4 with DOM
    document.getElementById("correcth4").innerHTML =
        score + "/" + questions.length + " questions";

    document.getElementById("incorrecth4").innerHTML =
        questions.length - score + "/" + questions.length + " questions";

    togglePane("results-pane");
    pieChart.style.display = "block";
};

/* feedback pane */
const stars = document.querySelectorAll(".star");

stars.forEach((s) => {
    s.addEventListener("click", () => {
        stars.forEach((s) => {
            s.classList.remove("active");
        });

        const starId = parseInt(s.id.split("-")[1]);

        starsRated = starId;

        document.getElementById("starsGiven").innerText = starId;

        for (let i = 1; i <= starId; i++) {
            // console.log(i);
            document.querySelector("#star-" + i).classList.add("active");
        }
    });
});

document.getElementById("feedback"),
    addEventListener("input", (e) => {
        const feedback = e.target.value;

        if (feedback.length > 0) {
            document.getElementById("feedbackGiven").innerText = feedback;
        } else {
            document.getElementById("feedbackGiven").innerText =
                "No feedback given";
        }
    });

/* panes list */
const paneLi = document.querySelectorAll(".pane-list ul li");

paneLi.forEach((li) => {
    li.addEventListener("click", () => {
        const paneId = li.innerText;
        togglePane(paneId);
    });
});

document.querySelector(".goToResults").addEventListener("click", () => {
    togglePane("results-pane");
});
document.querySelector(".navigateToFeedback").addEventListener("click", () => {
    togglePane("feedback-pane");
});

document.querySelector(".navigateToOverview").addEventListener("click", () => {
    togglePane("overview-pane");
});

document.querySelector(".navigateToAnswers").addEventListener("click", () => {
    togglePane("answers-pane");
});

const debug = () => {
    document.getElementById("debug").style.display = "block";
};
document.querySelector(".navigateToResults").addEventListener("click", () => {
    togglePane("results-pane");
});
