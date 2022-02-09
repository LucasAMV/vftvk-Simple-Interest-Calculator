function compute() {
    console.log("Reached compute()");
    let amount = document.getElementById("amountNumber").value;
    let rate   = document.getElementById("interestRate").value;
    let years  = document.getElementById("years").value;

    let computedAmout = amount*(rate/100)*5;

    console.log("Render: "+computedAmout);

    let answer = "";
    answer += "If you deposit " + amount + ",";
    answer += "</br>";
    answer += "at an interest rate of " + rate + "%.";
    answer += "</br>";
    answer += "You will receive an amount of " + computedAmout + ",";
    answer += "</br>";
    answer += "in the year " + years;

    document.getElementById("computedResult").innerHTML = answer;
}

function refreshSelectedRate() {
    document.getElementById("selectedRate").innerHTML = document.getElementById("interestRate").value+"%";
}

// document.getElementById('interestRate').onchange = refreshSelectedRate();

window.onload = function() {
    //When page finished loading, fill the current selected interest rate.
    refreshSelectedRate();

    //Avoid poluting HTML code with javascript call onchange="..."
    document.getElementById('interestRate').addEventListener("change", refreshSelectedRate, false);
    document.getElementById('buttonCompute').addEventListener("click", compute, false);

    //Avoid page reload after form submit keeping HTML5 validations
    document.forms[0].onsubmit = function(e) { e.preventDefault() };
};