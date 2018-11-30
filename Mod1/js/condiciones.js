/* Realizar un Srcipt que pida al usuario dos numeros y que diga cuales cual es 
el mayor y si los dos numeros son iguales*/

/* 
var num1=prompt("Ingrese un numero");
alert(num1);
var num2=prompt("Ingrese otro numero");
alert(num2);
if(num1num2){
    alert("El numero "+num2+" es mayor que "+num1,num1,num2);
} else if(num1>num2){
    alert("El numero "+num1+" es mayor que "+num2,num1,num2);
} else if(num1=num2){
    alert("los numeros son iguales");
}
*/
/*Ingresar por pantalla la edad de una persona, si la persona es 
mayor de 18 indicar ques es mayr de edad, de lo contrario seria 
un menor de edad, si tiene la edad menor o igual a 33 decir 
(eres milenial), si es mayor o igual a 70 (eres un anciano), 
y si es mayor o igual 33 decir (ya no eres milenial)*/
/*
var num1=prompt("Ingrese su edad");
alert(num1);
if(num1<=17){
    alert("Eres un menor de edad", num1);
} else if(num1>18){
    alert("Eres un mayor de edad", num1);
} else if(num1>=25 && num1<=33){
    alert("Eres un milenial", num1);
} else if(num1>=34 && num1<=69){
    alert("Ya no eres un Milenial", num1);
} else if(num1>=70){
    alert("Eres un anciano", num1);
}
*/
/*
var edades=prompt("Ingrese su edad");
function calcularEdad(ed)
{
if(ed >=18){
    console.log("Usted es mayor de edad");
    if(ed<=33){
        console.log("Usted es milenial", ed);
    } else if(ed=70){
        console.log("Usted es un anciano", ed);
    } else{
        console.log("Usted ya no es un milenial", ed);
    }
}
else{
    console.log("Usted es un menor de edad", ed);
}
}

/**Operadores de comparacion*/
/*var a=5;
var b=5;
if(a==b){
    console.log=("A y B son Iguales");
}
if(a===b){
    console.log=("A y B son iguales en tipo y valor")
} else {
    console.log=("No son iguales en tipo y valor")
}
/**Operador ternario */
/*if(a==b){
    aux=5;
    console.log=(aux);
} else{
    aux=10;
    console.log=(aux);
}
var result=a==b? 10 : 20;
console.log=(result);

var year=prompt("instroduzca un año");
var resultado= year!=2018? true:false;
alert ("", resultado);

/**Switch */
var day=prompt("Introduzca un dia de la semana"); 
function setDay(day){
    switch(day){
        case "sabado": 
        console.log=("BVoy ir al cine");
        break;
        case "domingo":
        console.log=("Voy hacer deporte");
        break;
        case "lunes":
        console.log=("Voy a trabajar");
        break;
        default:
        console.log=("No es un dia valido");
    }
}
setDay(day);
setDay("Domingo");
setDay(13);
