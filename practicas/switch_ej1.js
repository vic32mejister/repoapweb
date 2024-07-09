//switch 
//realizar un programa que muestre una letra de acuerdo a la calificacion obtenida, si el alumno saco de 
//90 a 100 mostrar a
//80 a 89 mostrar  b
//70 a 79          c
//60 a 69          d 
//no se encuentra en esterango F
//let q1=10;
let n=79;  ////// cambiar el valor de la variable
var cal;
if(n>=90&&n<=100){
    cal="A";
    }
    else if (n>=80&&n<=89){
        cal="B";
    }
    else if (n>=70&&n<=79){
        cal="C";
    }
    else if (n>=60&&n<=69){
        cal="D";
    }
  
switch (cal) {
case "A":
console.log("Calificcion: "+ cal);
break;
case "B":
console.log("Calificcion: "+ cal);
break;
case "C":
console.log("Calificcion: "+ cal);
break;
case "D":
console.log("Calificcion: "+ cal);
break;
default:
         console.log("Error");
}