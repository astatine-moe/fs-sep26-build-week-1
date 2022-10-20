const togglePane = (paneId) => {
    const pane = document.querySelector("#" + paneId);
    const allPanes = document.querySelectorAll(".pane");

    allPanes.forEach((p) => {
        p.style.display = "none";
    });

    pane.style.removeProperty("display");
};

window.onload = () => {
    togglePane("welcome-pane");
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

const timer = new Timer("question-timer", 15);

// timer.start();

timer.addEventListener("done", () => {
    togglePane("results-pane");
});

/* QUESTIONS */
const startQuestions = document.querySelector("#startQuestions");

startQuestions.addEventListener("click", () => {
    startQuestions.style.display = "none";
    document.querySelector(".question").classList.remove("hidden");
    document.querySelector(".question-counter").classList.remove("hidden");
    timer.start();
});

/* Results */

const rateUs = document.querySelector("#rate-us");

rateUs.addEventListener("click", () => {
    togglePane("feedback-pane");
});

/* feedback pane */

/* panes list */
const paneLi = document.querySelectorAll(".pane-list ul li");

paneLi.forEach((li) => {
    li.addEventListener("click", () => {
        const paneId = li.innerText;
        togglePane(paneId);
    });
});
