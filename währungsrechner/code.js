var curr1 = document.getElementById('curr1number');
var result = document.getElementById('result');
var a;
var b;
//var currency1 = document.getElementById("currency1").value;
//var currency2 = document.getElementById("currency2").value;
var erg;

function selectOptionA(){ 
    a = document.getElementById("currency1").value;
}

function selectOptionB(){ 
    b = document.getElementById("currency2").value;
}

var array_a = ["euro", "dollar", "yen", "hkd", "rupien", "rubel", "argPeso", "pfund", "zloty"];
var array_b = ["euro", "dollar", "yen", "hkd", "rupien", "rubel", "argPeso", "pfund", "zloty"];


function calc(){

    //Umrechnung Euro in Währung B
    if(b == "dollar" && a=="euro"){
        erg = curr1.value * 1.13;
        result.innerHTML = erg + " Dollar";
    }
    if(b == "euro" && a=="euro"){
        erg = curr1.value;
        result.innerHTML = erg + " Euro";
    }
    if(b == "rupien" && a=="euro"){
        erg = curr1.value * 84.34;
        result.innerHTML = erg + " Rupien";
    }
    if(b == "yen" && a=="euro"){
        erg = curr1.value * 128.93;
        result.innerHTML = erg +" Yen";
    }
    if(b == "argPeso" && a == "euro"){
        erg = curr1.value * 118.47;
        result.innerHTML = erg + " Peso (ARG)";
    }
    if(b == "pfund" && a == "euro"){
        erg = curr1.value * 0.84;
        result.innerHTML = erg + " Pfund (GB)";
    }
    if(b == "hkd" && a == "euro"){
        erg = curr1.value * 8.82;
        result.innerHTML = erg + " Hongkong-Dollar";
    }
    if(b == "zloty" && a == "euro"){
        erg = curr1.value * 4.57;
        result.innerHTML = erg + " Zloty";
    }
    if(b == "rubel" && a == "euro"){
        erg = curr1.value * 89.14;
        result.innerHTML = erg + " Rubel";
    }

    //Umrechnung Dollar in Währung B
    if(b == "dollar" && a=="dollar"){
        erg = curr1.value;
        result.innerHTML = erg + " Dollar";
    }
    if(b == "euro" && a=="dollar"){
        erg = curr1.value *0.89;
        result.innerHTML = erg + " Euro";
    }
    if(b == "rupien" && a=="dollar"){
        erg = curr1.value * 74.69;
        result.innerHTML = erg + " Rupien";
    }
    if(b == "yen" && a=="dollar"){
        erg = curr1.value * 113.87;
        result.innerHTML = erg + " Yen";
    }
    if(b == "argPeso" && a == "dollar"){
        erg = curr1.value * 104.51;
        result.innerHTML = erg + " Peso (ARG)";
    }
    if(b == "pfund" && a == "dollar"){
        erg = curr1.value * 0.74;
        result.innerHTML = erg + " Pfund (GB)";
    }
    if(b == "hkd" && a == "dollar"){
        erg = curr1.value * 7.79;
        result.innerHTML = erg + " Hongkong-Dollar";
    }
    if(b == "zloty" && a == "dollar"){
        erg = curr1.value * 4.03;
        result.innerHTML = erg + " Zloty";
    }
    if(b == "rubel" && a == "dollar"){
        erg = curr1.value * 78.67;
        result.innerHTML = erg + " Rubel";
    }

    //Umrechung Rupien in Währung B
    if(b == "dollar" && a=="rupien"){
        erg = curr1.value * 0.013;
        result.innerHTML = erg + " Dollar";
    }
    if(b == "euro" && a=="rupien"){
        erg = curr1.value * 0.012 ;
        result.innerHTML = erg + " Euro";
    }
    if(b == "rupien" && a=="rupien"){
        erg = curr1.value;
        result.innerHTML = erg + " Rupien";
    }
    if(b == "yen" && a=="rupien"){
        erg = curr1.value * 1.53;
        result.innerHTML = erg + " Yen";
    }
    if(b == "argPeso" && a == "rupien"){
        erg = curr1.value * 1.40;
        result.innerHTML = erg + " Peso (ARG)";
    }
    if(b == "pfund" && a == "rupien"){
        erg = curr1.value * 0.0099;
        result.innerHTML = erg + " Pfund (GB)";
    }
    if(b == "hkd" && a == "rupien"){
        erg = curr1.value * 0.10;
        result.innerHTML = erg + " Hongkong-Dollar";
    }
    if(b == "zloty" && a == "rupien"){
        erg = curr1.value * 0.054;
        result.innerHTML = erg + " Zloty";
    }
    if(b == "rubel" && a == "rupien"){
        erg = curr1.value * 1.06;
        result.innerHTML = erg + " Rubel";
    }

    //Umrechnung Yen in Währung B
    if(b == "dollar" && a=="yen"){
        erg = curr1.value * 0.0088;
        result.innerHTML = erg + " Dollar";
    }
    if(b == "euro" && a=="yen"){
        erg = curr1.value * 0.0078 ;
        result.innerHTML = erg + " Euro";
    }
    if(b == "rupien" && a=="yen"){
        erg = curr1.value * 0.66;
        result.innerHTML = erg + " Rupien";
    }
    if(b == "yen" && a=="yen"){
        erg = curr1.value;
        result.innerHTML = erg + " Yen";
    }
    if(b == "argPeso" && a == "yen"){
        erg = curr1.value * 0.92;
        result.innerHTML = erg + " Peso (ARG)";
    }
    if(b == "pfund" && a == "yen"){
        erg = curr1.value * 0.0065;
        result.innerHTML = erg + " Pfund (GB)";
    }
    if(b == "hkd" && a == "yen"){
        erg = curr1.value * 0.068;
        result.innerHTML = erg + " Hongkong-Dollar";
    }
    if(b == "zloty" && a == "yen"){
        erg = curr1.value * 0.035;
        result.innerHTML = erg + " Zloty";
    }
    if(b == "rubel" && a == "yen"){
        erg = curr1.value * 0.69;
        result.innerHTML = erg + " Rubel";
    }

    //Umrechnung Peso(ARG) in Währung B
    if(b == "dollar" && a=="argPeso"){
        erg = curr1.value * 0.0096;
        result.innerHTML = erg + " Dollar";
    }
    if(b == "euro" && a=="argPeso"){
        erg = curr1.value * 0.0084 ;
        result.innerHTML = erg + " Euro";
    }
    if(b == "rupien" && a=="argPeso"){
        erg = curr1.value * 0.71;
        result.innerHTML = erg + " Rupien";
    }
    if(b == "yen" && a=="argPeso"){
        erg = curr1.value * 1.09;
        result.innerHTML = erg + " Yen";
    }
    if(b == "argPeso" && a == "argPeso"){
        erg = curr1.value;
        result.innerHTML = erg + " Peso (ARG)";
    }
    if(b == "pfund" && a == "argPeso"){
        erg = curr1.value * 0.0071;
        result.innerHTML = erg + " Pfund (GB)";
    }
    if(b == "hkd" && a == "argPeso"){
        erg = curr1.value * 0.074;
        result.innerHTML = erg + " Hongkong-Dollar";
    }
    if(b == "zloty" && a == "argPeso"){
        erg = curr1.value * 0.039;
        result.innerHTML = erg + " Zloty";
    }
    if(b == "rubel" && a == "argPeso"){
        erg = curr1.value * 0.76;
        result.innerHTML = erg + " Rubel";
    }

    //Umrechnung Pfund in Währung B
    if(b == "dollar" && a=="pfund"){
        erg = curr1.value * 1.35;
        result.innerHTML = erg + " Dollar";
    }
    if(b == "euro" && a=="pfund"){
        erg = curr1.value * 1.19 ;
        result.innerHTML = erg + " Euro";
    }
    if(b == "rupien" && a=="pfund"){
        erg = curr1.value * 100.63;
        result.innerHTML = erg + " Rupien";
    }
    if(b == "yen" && a=="pfund"){
        erg = curr1.value + 153.33;
        result.innerHTML = erg + " Yen";
    }
    if(b == "argPeso" && a == "pfund"){
        erg = curr1.value * 140.85;
        result.innerHTML = erg + " Peso (ARG)";
    }
    if(b == "pfund" && a == "pfund"){
        erg = curr1.value;
        result.innerHTML = erg + " Pfund (GB)";
    }
    if(b == "hkd" && a == "pfund"){
        erg = curr1.value * 10.49;
        result.innerHTML = erg + " Hongkong-Dollar";
    }
    if(b == "zloty" && a == "pfund"){
        erg = curr1.value * 5.44;
        result.innerHTML = erg + " Zloty";
    }
    if(b == "rubel" && a == "pfund"){
        erg = curr1.value * 106.39;
        result.innerHTML = erg + " Rubel";
    }

    //Umrechnung HKD in Währung B
    if(b == "dollar" && a=="hkd"){
        erg = curr1.value * 0.13;
        result.innerHTML = erg + " Dollar";
    }
    if(b == "euro" && a=="hkd"){
        erg = curr1.value * 0.11 ;
        result.innerHTML = erg + " Euro";
    }
    if(b == "rupien" && a=="hkd"){
        erg = curr1.value * 9.59;
        result.innerHTML = erg + " Rupien";
    }
    if(b == "yen" && a=="hkd"){
        erg = curr1.value * 14.60;
        result.innerHTML = erg + " Yen";
    }
    if(b == "argPeso" && a == "hkd"){
        erg = curr1.value * 13.43;
        result.innerHTML = erg + " Peso (ARG)";
    }
    if(b == "pfund" && a == "hkd"){
        erg = curr1.value * 0.095;
        result.innerHTML = erg + " Pfund (GB)";
    }
    if(b == "hkd" && a == "hkd"){
        erg = curr1.value;
        result.innerHTML = erg + " Hongkong-Dollar";
    }
    if(b == "zloty" && a == "hkd"){
        erg = curr1.value * 0.52;
        result.innerHTML = erg + " Zloty";
    }
    if(b == "rubel" && a == "hkd"){
        erg = curr1.value * 10.13;
        result.innerHTML = erg + " Rubel";
    }

    //Umrechnung Zloty in Währung B
    if(b == "dollar" && a=="zloty"){
        erg = curr1.value * 0.25;
        result.innerHTML = erg + " Dollar";
    }
    if(b == "euro" && a=="zloty"){
        erg = curr1.value * 0.22 ;
        result.innerHTML = erg + " Euro";
    }
    if(b == "rupien" && a=="zloty"){
        erg = curr1.value * 18.52;
        result.innerHTML = erg + " Rupien";
    }
    if(b == "yen" && a=="zloty"){
        erg = curr1.value * 28.20;
        result.innerHTML = erg + " Yen";
    }
    if(b == "argPeso" && a == "zloty"){
        erg = curr1.value * 25.92;
        result.innerHTML = erg + " Peso (ARG)";
    }
    if(b == "pfund" && a == "zloty"){
        erg = curr1.value * 0.18;
        result.innerHTML = erg + " Pfund (GB)";
    }
    if(b == "hkd" && a == "zloty"){
        erg = curr1.value * 1.93;
        result.innerHTML = erg + " Hongkong-Dollar";
    }
    if(b == "zloty" && a == "zloty"){
        erg = curr1.value;
        result.innerHTML = erg + " Zloty";
    }
    if(b == "rubel" && a == "zloty"){
        erg = curr1.value * 19.56;
        result.innerHTML = erg + " Rubel";
    }

    //Umrechnung Rubel in Währung B
    if(b == "dollar" && a=="rubel"){
        erg = curr1.value * 0.013;
        result.innerHTML = erg + " Dollar";
    }
    if(b == "euro" && a=="rubel"){
        erg = curr1.value * 0.011;
        result.innerHTML = erg + " Euro";
    }
    if(b == "rupien" && a=="rubel"){
        erg = curr1.value * 0.95;
        result.innerHTML = erg + " Rupien";
    }
    if(b == "yen" && a=="rubel"){
        erg = curr1.value*1.44;
        result.innerHTML = erg + " Yen";
    }
    if(b == "argPeso" && a == "rubel"){
        erg = curr1.value * 1.32;
        result.innerHTML = erg + " Peso (ARG)";
    }
    if(b == "pfund" && a == "rubel"){
        erg = curr1.value * 0.0094;
        result.innerHTML = erg + " Pfund (GB)";
    }
    if(b == "hkd" && a == "rubel"){
        erg = curr1.value * 0.099;
        result.innerHTML = erg + " Hongkong-Dollar";
    }
    if(b == "zloty" && a == "rubel"){
        erg = curr1.value * 0.051;
        result.innerHTML = erg + " Zloty";
    }
    if(b == "rubel" && a == "rubel"){
        erg = curr1.value;
        result.innerHTML = erg + " Rubel";
    }
}

