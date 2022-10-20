/* QUESTIONS */
const startQuestions = document.querySelector("#startQuestions");

startQuestions.addEventListener("click", () => {
    startQuestions.style.display = "none";
    document.querySelector(".question").classList.remove("hidden");
    document.querySelector(".question-counter").classList.remove("hidden");
});

let questionIndex = 0;

const getQuestion = (index) => {
    const question = questions[index];

    return question;
};

const questionTitle = document.querySelector("#title");
const questionOptions = document.querySelector(".options");

const showQuestion = (question) => {
    questionTitle.innerText = question.question;

    for (const option in question.options) {
        const containerDiv = document.createElement("div");
        const optionDiv = document.createElement("div");
        optionDiv.classList.add("option");
        optionDiv.innerText = question.options[option];

        optionDiv.addEventListener("click", () => {
            if (question.answer === option) {
                alert("Correct");
            } else {
                alert("Wrong");
            }
        });

        containerDiv.appendChild(optionDiv);

        questionOptions.appendChild(containerDiv);
    }
};
