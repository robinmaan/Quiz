const data = [
  {
    id: 1,
    question: "What is asynchronous operation?",
    answers: [
      { answer: "prmoise", isCorrect: "true" },
      { answer: "loops", isCorrect: "false" },
      { answer: "event", isCorrect: "false" },
      { answer: "variable", isCorrect: "false" },
    ],
  },
  {
    id: 2,
    question: "which language is trending today?",
    answers: [
      { answer: "Java", isCorrect: "false" },
      { answer: "Python", isCorrect: "false" },
      { answer: "Javascript", isCorrect: "true" },
      { answer: "Php", isCorrect: "false" },
    ],
  },
  {
    id: 3,
    question: "What is your Expection in tech salary?",
    answers: [
      { answer: "2lpa", isCorrect: "false" },
      { answer: "4lpa", isCorrect: "false" },
      { answer: "6lpa", isCorrect: "true" },
      { answer: "8lpa", isCorrect: "false" },
    ],
  },
  {
    id: 4,
    question: "What is your age?",
    answers: [
      { answer: "23", isCorrect: "false" },
      { answer: "34", isCorrect: "false" },
      { answer: "21", isCorrect: "false" },
      { answer: "20", isCorrect: "true" },
    ],
  },
];

const gamescreen = document.querySelector(".game");
const play = document.querySelector(".play");
const resultScreen = document.querySelector(".result");
const asnwerContainer = document.querySelector(".answers");
const question = document.querySelector(".question");
const submit = document.querySelector(".submit");

let indexNumber = 0;
let correctasn = 0;
let wrongAnswer = 0;
let selectedAnswer;
let total = 0;

const playbtn = () => {
  
    
  showans(indexNumber)
     indexNumber = 0;
     total = 0;
     correctasn = 0;
     wrongAnswer = 0;

};
play.addEventListener('click',()=>{
    
    resultScreen.style.display = "none";
  gamescreen.style.display = "block";
  playbtn()
})

const showresult = () => {
  resultScreen.style.display = "block";
  gamescreen.style.display = "none";

  resultScreen.querySelector(
    ".correct"
  ).textContent = `Correct Ans = ${correctasn}`;
  resultScreen.querySelector(
    ".wrong"
  ).textContent = `Wrong Ans = ${wrongAnswer}`;
  resultScreen.querySelector(".score").textContent = `Score = ${
    (correctasn - wrongAnswer) * 10
  }`;
};

const showans = (qNumber) => {
  if (indexNumber === data.length) return showresult();
  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  asnwerContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `
    <div class="answer">
        <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
        <label for="1">${item.answer}</label>
    </div>
    `
    )
    .join("");

  selectAnswer();
};
const selectAnswer = () => {
  asnwerContainer.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      selectedAnswer = e.target.value;
    });
  });
};

const submitbutton = () => {
  submit.addEventListener("click", () => {
    if (selectedAnswer !== null) {
      selectedAnswer === "true" ? correctasn++ : wrongAnswer++;
      indexNumber++;
      showans(indexNumber);
    } else alert("Select an answer");
  });
};

showans(indexNumber);
submitbutton();
