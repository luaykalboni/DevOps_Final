
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;

}
function themeChange() {
    if (localStorage.getItem('theme') === 'theme1') {
        setTheme('theme2');
    } else {
        setTheme('theme1');
    }
}
(function () {
    if (localStorage.getItem('theme') === 'theme1') {
        setTheme('theme1');
    } else {
        setTheme('theme2');
    }
})();

//Calculator
const keys = document.querySelector(".calc-items");
const display = document.querySelector("#result");
let calcBool = false;
let num1;
let num2;
let operator;
let res;

keys.addEventListener("click", e => {
    if (e.target.matches("button")) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = display.innerHTML;

        if (!action) {
            if (displayedNum === "0" || calcBool == true) {
                display.innerHTML = keyContent;
                calcBool = false;
            }
            else {
                display.innerHTML += keyContent;
                calcBool = false;
            }
        }

        if (action === 'clear') {
            display.innerHTML = "0";
        }
        if (action === 'decimal') {
            display.textContent += '.';
        }
        if (action === 'plus' || action === 'minus' || action === 'mul' || action === 'divide') {
            operator = action;

            num1 = parseFloat(display.innerHTML);
            display.innerHTML = "";
        }

        if (action === 'calculate') {
            num2 = parseFloat(display.innerHTML);

            switch (operator) {
                case ("plus"):
                    res = num1 + num2;
                    break;
                case ("minus"):
                    res = num1 - num2;
                    break;
                case ("mul"):
                    res = num1 * num2;
                    break;
                case ("divide"):
                    res = num1 / num2;
                    break;
            }
            calcBool = true;
            display.innerHTML = res;

        }
    }
});