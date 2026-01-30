const formEl = document.querySelector("form");
const scoreEl = document.getElementById("score");
const num1El = document.getElementById("num1");
const num2El = document.getElementById("num2");
const inputEl = document.getElementById("input");

const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

let score = JSON.parse(localStorage.getItem("score"));
if (!score) {
    score = 0;
}

num1El.innerText = num1;
num2El.innerText = num2;
scoreEl.innerText = score;


function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}

formEl.addEventListener("submit", () => {
    const userInput = +inputEl.value;
    if (userInput === (num1 * num2)) {
        score++;
        updateLocalStorage();
    } else {
        score--;
        updateLocalStorage();
    }
})