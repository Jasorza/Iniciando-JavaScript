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
