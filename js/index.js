const togglePane = (paneId) => {
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

/* QUESTIONS */
const startQuestions = document.querySelector("#startQuestions");

startQuestions.addEventListener("click", () => {
    startQuestions.style.display = "none";
    document.querySelector(".question").classList.remove("hidden");
    document.querySelector(".question-counter").classList.remove("hidden");
});

/* Results */

const rateUs = document.querySelector("#rate-us");

rateUs.addEventListener("click", () => {
    togglePane("feedback-pane");
});

/* feedback pane */
const stars = document.querySelectorAll(".star");

stars.forEach((s) => {
    s.addEventListener("click", () => {
        stars.forEach((s) => {
            s.classList.remove("active");
        });

        const starId = parseInt(s.id.split("-")[1]);

        starsRated = starId;

        for (let i = 1; i <= starId; i++) {
            // console.log(i);
            document.querySelector("#star-" + i).classList.add("active");
        }
    });
});

/* panes list */
const paneLi = document.querySelectorAll(".pane-list ul li");

paneLi.forEach((li) => {
    li.addEventListener("click", () => {
        const paneId = li.innerText;
        togglePane(paneId);
    });
});
