//realizar un programa que muestre una letra de acuerdo a la calificacion obtenida, si el alumno saco de 
//90 a 100 mostrar a
//80 a 89 mostrar  b
//70 a 79          c
//60 a 69          d 
//no se encuentra en esterango F
let n=59;  ////// cambiar el valor de la variable
if(n>=90&&n<=100){
console.log("A");
}
else if (n>=80&&n<=89){
        console.log("B");
}
else if (n>=70&&n<=79){
        console.log("C");
}
else if (n>=60&&n<=69){
        console.log("D");
}
else{
        console.log("F");
}