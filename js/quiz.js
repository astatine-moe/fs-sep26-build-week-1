/* QUESTIONS */

const getQuestion = (index) => {
    const question = questions[index];

    return question;
};

const questionTitle = document.querySelector("#title");
const questionOptions = document.querySelector(".options");
const questionCurrent = document.querySelector("#questionCurrent");

let timer;

const showQuestion = (question) => {
    questionsShown = true;
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
            clearTimeout(invalidateInt);
            if (!clicked) {
                timer.stop();
                clicked = true;
                questionsChosen.push({ ...question, userAnswer: option });
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
        clearTimeout(invalidateInt);
        //timer ended
        //don't add to score, just move on to next question and count as incorrect
        questionsChosen.push({
            ...getQuestion(questionIndex),
            userAnswer: null,
        });
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

const onFocus = () => {
    if (questionsShown) {
        clearTimeout(invalidateInt);
        togglePane("questions-pane");

        if (invalidated) {
            //don't start next question till the user tabs back in
            invalidated = false;
            questionsChosen.push({
                ...getQuestion(questionIndex),
                userAnswer: null,
            });
            if (questionIndex === questions.length - 1) {
                //if last question
                showResults(score);
            } else {
                questionIndex++;
                showQuestion(getQuestion(questionIndex));
            }
        }
    }
};

const onBlur = () => {
    if (questionsShown) {
        togglePane("tabout-pane");

        clearTimeout(invalidateInt);
        invalidateInt = setTimeout(() => {
            timer.stop();

            invalidated = true;

            console.log("Last question invalidated");
            //invalidate after 10 seconds
        }, 10 * 1000);
    }
};

window.onfocus = onFocus;
window.onblur = onBlur;
