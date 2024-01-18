import {addToResult, calculateResult, changeSign, clearDisplay, toggleStyle} from "./functions.js";
import './styles.css';

const operators = document.getElementsByClassName("operator");
const equals = document.getElementById("equals");
const clear = document.getElementById("clear");
const change = document.getElementById("change");
const style = document.getElementById("changeStyle");

for (let operator of operators) {
    operator.addEventListener("click", function() {
        addToResult(operator.textContent);
    });
}
equals.addEventListener("click", calculateResult)
clear.addEventListener("click", clearDisplay)
change.addEventListener("click", changeSign)
style.addEventListener("click", toggleStyle)