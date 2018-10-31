/**tipos de variables */
/*
var name="Alessa";
console.log("El tipo de name es: ", typeof name);

var age=20;
console.log("El tipo de Age es: ", typeof age);

var active=true;
console.log("el tipo de Active es: ", typeof active);

/**coversiones numericas */
/*
var age2=parseInt(prompt("Ingrese su edad"));
if(isNaN(age2)){
    alert("Digite un número")
} else{
    alert("Su edad es: "+age2);
}

/** Ejercicio1 */
/**mostrar la sumatoria y la media (promedio) de los numero introducidos por pantalla, hasta que el numero sea negativo(-) */
/*
var sum=0;
var average=0;
var count=0;
var num=25;

while (num>=0) {
    num=parseInt(prompt("ingrese un número"));
    if(!isNaN(num)&&num>0){
        sum+=num;
        count++;
    }
}
average=sum/count;
alert("La sumatoria "+sum+"\n"+"El promedio es "+average);

/** Mostrar todos los numeros que hay entre un rango inicial y un rango final suministrado por el usuario  */
/**Mostrar todos los numeros pares entre dos rangos que suministre el usuario */
/*var irank=parseInt(prompt("Ingrese el rango inicial"));
var frank=parseInt(prompt("Ingrese el ango final"));
if(irank<frank&&!isNaN(irank)&&!isNaN(frank)&&irank>0 &&frank>irank){
    document.write("<h1>De "+irank+" Hasta "+frank+" Esxisten los siguientes numero pares: </h1>");
    for (let index = irank; index <=frank; index++) {
        if(index%2==0){
            document.write("<b>"+index+"</b><br>");
        }  
    }
}

/**hasta ese numero, los divisores de ese numero */
/*var num=parseInt(prompt("ingrese un numero"));
if(!isNaN(num)&&num>=0){
    document.write("<h1> Los divisores de "+num+" son:</h1>");
    for (let index = 0; index <=num; index++) {
        if(num%index==0){
            document.write("<b>"+index+"</b>");
        }
        
    }
}
/** */
/*
var num=parseInt(prompt("Ingrese un número"));
while (isNaN(num)) {
    alert("ingrese un número");
    num=parseInt(prompt("ingrese un numero"));
} if(num%2==0){
    alert("Es par");
} else{
    alert("Es impar");
}





/** */
var user="dayana";
var password=12345;
do{
    var user=prompt("Ingrese su usuario");
    var password=prompt("Ingrese su Contraseña");
    alert("Bienvenida al Sistema");
} while(user!="dayana"){
   
} while(password!=12345){
    
}


