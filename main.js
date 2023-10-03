function clickbutton(target) {
    let result = document.getElementById("result");
    let target_value = target.innerHTML;
    
    if (target_value == "AC") {
        result.innerHTML = "0";
    } else if (target_value == "=") {
        result.innerHTML = eval(result.innerHTML);
    } else {
        if (result.innerHTML == "0") {
            result.innerHTML = target_value;
        } else if (result.innerHTML == "00") {
            result.innerHTML = target_value;
        } else {
            const lastChar = result.innerHTML.slice(-1);
            if (!isOperator(lastChar) || !isOperator(target_value)) {
                result.innerHTML += target_value;
            }
        }
    }
}

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}
