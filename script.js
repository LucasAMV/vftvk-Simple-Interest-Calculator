function compute() {
    if(!validateAmount())
        return;

    let amount = document.getElementById("principal").value;
    let rate   = document.getElementById("rate").value;
    let years  = document.getElementById("years").value;

    let computedAmout = amount*years*rate/100;

    let answer = "";
    answer += "If you deposit <mark>" + amount + "</mark>,";
    answer += "</br>";
    answer += "at an interest rate of <mark>" + rate + "%</mark>.";
    answer += "</br>";
    answer += "You will receive an amount of <mark>" + computedAmout + "</mark>,";
    answer += "</br>";
    answer += "in the year <mark>" + (Number.parseInt(years)+new Date().getFullYear() + "</mark>.");

    let textDiv = document.getElementById("computedResult");
    textDiv.innerHTML = answer;
}

function refreshSelectedRate() {
    document.getElementById("selectedRate").innerHTML = document.getElementById("rate").value+"%";
}

function validateAmount() {
    let amountField = document.getElementById("principal");
    let principalValue = amountField.value;    
    if(principalValue < 1 || principalValue == '') {
        alert("Enter a positive number", );
        amountField.focus();
        return false;
    }
    return true;
}

window.onload = function() {
    //Avoid poluting HTML code with javascript calls onclick/onchange="..."
    document.getElementById('rate').addEventListener("change", refreshSelectedRate, false);
    document.getElementById('principal').addEventListener("change", validateAmount, false);
    document.getElementById('buttonCompute').addEventListener("click", compute, false);
}