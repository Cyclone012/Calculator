const runCons = document.getElementById("run");
runCons.addEventListener("click", () => {
    let fNum = parseFloat(prompt("Enter First Number"));
    let opt = prompt("Enter Operator");
    let sNum = parseFloat(prompt("Enter Second Number"));

    let result = "";

    if (opt == '+') {
        result = fNum + sNum;
        alert("Result = "+result);
        console.log(fNum,"+",sNum,"=" , +result)
    }

    else if (opt == '-') {
        result = fNum - sNum;
        alert("Result = "+result);
        console.log(fNum,"-",sNum,"=" , +result)
    }

    else if (opt == '*') {
        result = fNum * sNum;
        alert("Result = "+result);
        console.log(fNum,"*",sNum,"=" , +result)
    }

    else if (opt == '/') {
        result = fNum / sNum;
        alert("Result = "+result);
        console.log(fNum,"/",sNum,"=" , +result)
    }

    else {
        alert("No Operator Founded");
        console.log("Error!")
    }
})

const reSult = document.getElementById("result");
const buttons = document.querySelectorAll(".btn");
const btndot = document.querySelector(".btnDot");
let dotCount = 0;
reSult.disabled = true;

for (const button of buttons) {
    button.addEventListener("click", () => {
        const value = reSult.value;
        const text = button.textContent;

        if (text === "=") {
            reSult.value = eval(value);
            dotCount = 0;
            console.log(value,"=",eval(value));
        }
        else {
            if (text === "C") {
                reSult.value = "";
                dotCount = 0;
            }
            else if (text === ".") {
                if (value !== "") {
                    dotCount++;
                    if (dotCount > 1) {
                        return;
                    }
                    else {
                        reSult.value += text;
                    }
                }
            }
            else if (text === "%" || text === "+" || text === "-" || text === "*" || text === "/") {
                dotCount = 0;
                reSult.value += text;
            }
            else {
                reSult.value += text;
            }
        }
    });
}

btndot.addEventListener("click", () => {
    if (reSult.value !== "" ) {
        dotCount++;
        if (dotCount > 1 ) {
            return;
        }
        else {
            reSult.value += text;
        }
    }
});