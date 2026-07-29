function convertTemperature(){

let temp =
parseFloat(document.getElementById("temperature").value);

let unit =
document.getElementById("unit").value;

document.getElementById("error").innerHTML="";

document.getElementById("celsius").innerHTML="";
document.getElementById("fahrenheit").innerHTML="";
document.getElementById("kelvin").innerHTML="";

if(isNaN(temp)){

document.getElementById("error").innerHTML =
"Please enter a valid number.";

return;
}

let c,f,k;

if(unit==="celsius"){

if(temp<-273.15){

document.getElementById("error").innerHTML=
"Temperature cannot be below absolute zero.";

return;
}

c=temp;

f=(temp*9/5)+32;

k=temp+273.15;

}

else if(unit==="fahrenheit"){

if(temp<-459.67){

document.getElementById("error").innerHTML=
"Temperature cannot be below absolute zero.";

return;
}

c=(temp-32)*5/9;

f=temp;

k=c+273.15;

}

else{

if(temp<0){

document.getElementById("error").innerHTML=
"Temperature cannot be below absolute zero.";

return;
}

c=temp-273.15;

f=(c*9/5)+32;

k=temp;

}

document.getElementById("celsius").innerHTML =
"🌡 Celsius : " + c.toFixed(2) + " °C";

document.getElementById("fahrenheit").innerHTML =
"🔥 Fahrenheit : " + f.toFixed(2) + " °F";

document.getElementById("kelvin").innerHTML =
"❄ Kelvin : " + k.toFixed(2) + " K";

}