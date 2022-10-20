/* QUESTIONS */

let questionIndex = 0;
let clicked = false;
let score = 0;

const getQuestion = (index) => {
    const question = questions[index];

    return question;
};

const questionTitle = document.querySelector("#title");
const questionOptions = document.querySelector(".options");
const questionCurrent = document.querySelector("#questionCurrent");

let timer;

const showQuestion = (question) => {
    questionTitle.innerText = question.question;
    questionOptions.innerHTML = "";
    questionCurrent.innerText = questionIndex + 1;

    timer = new Timer("question-timer", question.timerToAnswerInSeconds || 30);

    for (const option of question.options) {
        const containerDiv = document.createElement("div");
        const optionDiv = document.createElement("div");
        optionDiv.classList.add("option");
        optionDiv.innerText = option;

        optionDiv.addEventListener("click", () => {
            if (!clicked) {
                timer.stop();
                clicked = true;
                if (question.answer === option) {
                    score++;
                }
                //if last question
                if (questionIndex === questions.length - 1) {
                    showResults(score);
                } else {
                    questionIndex++;
                    showQuestion(getQuestion(questionIndex));
                    clicked = false;
                }
            }
        });

        containerDiv.appendChild(optionDiv);

        questionOptions.appendChild(containerDiv);
    }

    timer.start();

    timer.addEventListener("done", function () {
        //timer ended
        //don't add to score, just move on to next question and count as incorrect
        if (questionIndex === questions.length - 1) {
            //if last question
            showResults(score);
        } else {
            questionIndex++;
            showQuestion(getQuestion(questionIndex));
            clicked = false;
        }
    });
};

const startQuestions = document.querySelector("#startQuestions");

startQuestions.addEventListener("click", () => {
    startQuestions.style.display = "none";
    document.querySelector(".question").classList.remove("hidden");
    document.querySelector(".question-counter").classList.remove("hidden");

    const question = getQuestion(questionIndex);

    showQuestion(question);
});

document.addEventListener("visibilitychange", function () {
    if (document.visibilityState === "hidden") {
        //user tabbed out, show pane
    } else {
        timer.resume();
    }
});
