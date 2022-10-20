// creating an array and passing the number, questions, options, and answers
let questions = [
    {
        numb: 1,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language",
        ],
        timerToAnswerInSeconds: 20,
    },
    {
        numb: 2,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options: [
            "Common Style Sheet",
            "Colorful Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet",
        ],
    },
    {
        numb: 3,
        question: "What does PHP stand for?",
        answer: "Hypertext Preprocessor",
        options: [
            "Hypertext Preprocessor",
            "Hypertext Programming",
            "Hypertext Preprogramming",
            "Hometext Preprocessor",
        ],
        timerToAnswerInSeconds: 40,
    },
    {
        numb: 4,
        question: "Which of the following is not an HTML tag?",
        answer: "Doctype",
        options: ["P", " Table", "Doctype", "Style"],
    },
    {
        numb: 5,
        question: "What does XML stand for?",
        answer: "eXtensible Markup Language",
        options: [
            "eXtensible Markup Language",
            "eXecutable Multiple Language",
            "eXTra Multi-Program Language",
            "eXamine Multiple Language",
        ],
        timerToAnswerInSeconds: 30,
    },

    {
        numb: 6,
        question: "How many ways can you apply colors in CSS?",
        answer: "3",
        options: ["3", "2", "5", "4"],
    },

    {
        numb: 7,
        question: "What should be the very last thing in an HTML document? ",
        answer: "Doc type",
        options: ["The heading", "Title", "Body", "Doc type"],
        timerToAnswerInSeconds: 45,
    },

    {
        numb: 8,
        question:
            "A webpage displays a picture. What tag was used to display the picture?",
        answer: "img",
        options: ["img", "image", "src", "picture"],
    },

    {
        numb: 9,
        question: "Every node in the DOM represents what?",
        answer: "an HTML element",
        options: ["an HTML element", "a section", "a link", "a view"],
    },

    {
        numb: 10,
        question:
            "Which method selects the first matching element in the document?",
        answer: "document.querySelector()",
        options: [
            "document.getElementsByClass()",
            "document.querySelectorAll()",
            "document.querySelector()",
            "document.getElementsByTagName()",
        ],
    },

    {
        numb: 11,
        question: "Which command adds the we just created to the DOM?",
        answer: "document.body.appendChild(button)",
        options: [
            "document.insert(button)",
            "document.body.appendChild(button)",
            "window.appendChild(button)",
            "document.insertBefore(button)",
        ],
    },

    {
        numb: 12,
        question: "What method allows us to add an attribute to a DOM element?",
        answer: "element.setAttribute()",
        options: [
            "element.getAttribute()",
            "element.createAttribute()",
            "element.setAttribute()",
            "element.makeAttribute()",
        ],
    },

    {
        numb: 13,
        question: "Which are valid CSS property names in JavaScript?",
        answer: "background",
        options: [
            "fontFamily",
            "background-position",
            "marginTop",
            "background",
        ],
    },

    {
        numb: 14,
        question:
            "How can we access the data attributes of an HTML element from within JavaScript?",
        answer: "element.dataset()",
        options: [
            "element.getData()",
            "element.dataset()",
            "element.db()",
            "element.fetchData()",
        ],
    },

    {
        numb: 15,
        question:
            "Select the first element with the selector statement .main .title .t1.?",
        answer: 'document.querySelector(".main .title .t1")',
        options: [
            'document.querySelectorAll(".main .title .t1")',
            'document.querySelector(".main .title .t1")',
            'document.getElementsByClassname("main")',
            'document.getElementByClassname(".main .title .t1")',
        ],
    },
];
