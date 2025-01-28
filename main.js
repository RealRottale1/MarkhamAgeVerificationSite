const input = document.getElementById("input");
const button = document.getElementById("button");
const p = document.getElementById("p");
let age;

function getInput() {
    age = input.value;
    age = Number(age);
    if (age === 0) {
        return("How are you 0?");
    } else if (age < 0) {
        return("How is your age negative?");
    } else if (age >= 18 && age < 100) {
        return("You are an adults!");
    } else if (age < 18) {
        return("You are a kid!");
    } else {
        return("You are to old!");
    }
}

button.addEventListener('click', function() {
    const myResult = getInput();
    p.textContent = myResult;
});