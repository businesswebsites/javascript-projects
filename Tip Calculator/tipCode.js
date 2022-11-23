function calcOutput(){
    let input1 = document.getElementById("number");
    let input2 = document.getElementById("percent");
    let result = input1.value * (input2.value / 100);
    //var newInput2 = parseInt(input2) / 100;
    //let result = parseInt(input1) * newInput2;
    document.getElementById("resultArea").innerHTML = result;
}