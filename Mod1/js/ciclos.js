/**leer 10 numeros por teclado e imprimir si son pares y si es multipo de de 3 */
/*for (let index = 0; index < 10; index++) {
    var num= prompt("Ingrese un número");
    if(num %3==0){
        console.log("El número es multiplo de 3" ,num);
    } 
    if(num%2==0){
        console.log("Es par", num);
    }
    else{
        console.log("No es par ni multiplo de tres", num);
    }
}
/**Ciclo While | realizar la sumatoria de numeros ingresados por partalla, cuando un numero sea = 0 me debe imprimir el resultado de la sumatoria*/
/*debugger;
var num=prompt("Ingrese un numero");
var sum=0;
while (num!=0){
    sum=sum+num;
    num=prompt("Ingrese el número");
}
console.log("La sumatoria de los numero es: ", sum);

/**Ciclo do while */
debugger;
var sum=0;
do{
    var num=prompt("Ingrese un numero");
    sum+=num;
} while (num!=0);