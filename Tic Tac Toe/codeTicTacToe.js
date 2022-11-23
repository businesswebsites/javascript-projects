var a = true; //a für X beginnt

var eins = false;
var zwei = false;
var drei = false;
var vier = false;
var fuenf = false;
var sechs = false;
var sieben = false;
var acht = false;
var neun = false;

var uno = 1;
var dos = 2
var tres = 3
var quatro = 4;
var cinco = 5;
var seis = 6;
var siete = 7;
var ocho = 8;
var nueve = 9;


var row1 = "";
var row2 = "";

var x = "X";
var o = "O";
 
function showSymbol(n){
    if(eins == false){
        if(uno == n){
            if(a == true){
                document.getElementById("1").innerHTML = "X";
                row1 += "1";
                a = false;
                eins = true;
            }else{
                document.getElementById("1").innerHTML = "O";
                row2 += "1";
                a = true;
                eins = true;
            }
        }
    }
    if(zwei == false){
        if(dos == n){
            if(a == true){
                document.getElementById("2").innerHTML = "X";
                row1 += "2";
                a = false;
                zwei = true;
            }else{
                document.getElementById("2").innerHTML = "O";
                row2 += "2";
                a = true;
                zwei = true;
            }
        }
    }
    if(drei == false){
        if(tres == n){
            if(a == true){
                document.getElementById("3").innerHTML = "X";
                row1 += "3";
                a = false;
                drei == true;
            }else{
                document.getElementById("3").innerHTML = "O";
                row2 += "3";
                a = true;
                drei = true;
            }
        }
    }
    if(vier == false){
        if(quatro == n){
            if(a == true){
                document.getElementById("4").innerHTML = "X";
                row1 += "4"
                a = false;
                vier = true;
            }else{
                document.getElementById("4").innerHTML = "O";
                row2 += "4";
                a = true;
                vier = true;
            }
        }
    }
    if(fuenf == false){
        if(cinco == n){
            if(a == true){
                document.getElementById("5").innerHTML = "X";
                row1 += "5";
                a = false;
                fuenf = true;
            }else{
                document.getElementById("5").innerHTML = "O";
                row2 += "5";
                a = true;
                fuenf = true;
            }
        }
    }
    if(sechs == false){
        if(seis == n){
            if(a == true){
                document.getElementById("6").innerHTML = "X";
                row1 += "6";
                a = false;
                sechs = true;
            }else{
                document.getElementById("6").innerHTML = "O";
                row2 += "6";
                a = true;
                sechs = true
            }
        }
    }
    if(sieben == false){
        if(siete == n){
            if(a == true){
                document.getElementById("7").innerHTML = "X";
                row1 += "7";
                a = false;
                sieben = true;
            }else{
                document.getElementById("7").innerHTML = "O";
                row2 += "7";
                a = true;
                sieben = true;
            }
        }
    }
    if(acht == false){
        if(ocho == n){
            if(a == true){
                document.getElementById("8").innerHTML = "X";
                row1 += "8";
                a = false;
                acht = true;
            }else{
                document.getElementById("8").innerHTML = "O";
                row2 += "8";
                a = true;
                acht = true;
            }
        }
    }
    if(neun == false){
        if(nueve == n){
            if(a == true){
                document.getElementById("9").innerHTML = "X";
                row1 += "9";
                a = false;
                neun = true;
            }else{
                document.getElementById("9").innerHTML = "O";
                row2 += "9";
                a = true;
                neun = true;
            }
        }
    }

    if((row1.includes("1")==true && row1.includes("2")==true && row1.includes("3")==true) || 
    (row1.includes("2")==true && row1.includes("5")==true && row1.includes("8")==true) ||
    (row1.includes("4")==true && row1.includes("5")==true && row1.includes("6")==true) ||
    (row1.includes("1")==true && row1.includes("5")==true && row1.includes("9")==true) ||
    (row1.includes("1")==true && row1.includes("4")==true && row1.includes("7")==true) ||
    (row1.includes("3")==true && row1.includes("6")==true && row1.includes("9")==true) ||
    (row1.includes("7")==true && row1.includes("8")==true && row1.includes("9")==true) ||
    (row1.includes("3")==true && row1.includes("5")==true && row1.includes("7")==true)){
        alert("Winner is X");
    }
    else if((row2.includes("1")==true && row2.includes("2")==true && row2.includes("3")==true) || 
    (row2.includes("2")==true && row2.includes("5")==true && row2.includes("8")==true) ||
    (row2.includes("4")==true && row2.includes("5")==true && row2.includes("6")==true) ||
    (row2.includes("1")==true && row2.includes("5")==true && row2.includes("9")==true) ||
    (row2.includes("1")==true && row2.includes("4")==true && row2.includes("7")==true) ||
    (row2.includes("3")==true && row2.includes("6")==true && row2.includes("9")==true) ||
    (row2.includes("7")==true && row2.includes("8")==true && row2.includes("9")==true) ||
    (row2.includes("3")==true && row2.includes("5")==true && row2.includes("7")==true)){
        alert("Winner is O");
    }else if(row1.length == 5 || row2.length == 5){
        alert("Unentschieden!");
    }
}

function restart(){
    for(var i = 1; i < 10; i++){
        document.getElementById(String(i)).innerHTML = "";  
    }
    row1 = "";
    row2 = "";
    a = true;

    eins = false;
    zwei = false;
    drei = false;
    vier = false;
    fuenf = false;
    sechs = false;
    sieben = false;
    acht = false;
    neun = false;
    
}
