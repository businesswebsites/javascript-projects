function appendOperation(operation){
    if(document.getElementById("resultArea").innerHTML == "0"){
        document.getElementById("resultArea").innerHTML = "";
    }
    document.getElementById("resultArea").innerHTML += operation;
}

function calcResult(){
    let container = document.getElementById("resultArea");
    let result = eval(container.innerHTML);
    var newString = String(result);
    if(newString.length < 10){
        container.innerHTML = result;
    }
}
function del(){
    document.getElementById("resultArea").innerHTML = "0";
}