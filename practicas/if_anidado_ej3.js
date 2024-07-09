//realizar un programa que realice el descuento de una compra dependiendo de los articulos comprados
//6-10   descuento 5%
//11- 20       10%
//>20          15%
//menos de 5 articulos no alcanza descuento
let subtotal=100
let n=5;  ////// cambiar el valor de la variable n= numero de articulos
if(n>=6&&n<=10){
    console.log("subtotal: "+subtotal +" - 5% descuento  ");
    console.log("Total: "+(subtotal-(subtotal*.05)  ));
}
else if (n>=11&&n<=20){
    console.log("subtotal: "+subtotal +" -10 % descuento ");
    console.log("Total: "+(subtotal-(subtotal*.1) ) );
}
else if (n>21){
    console.log("subtotal: "+subtotal +" - 15% descuento ");
    console.log("Total: "+(subtotal-(subtotal*.15) ) );
}
else{
        console.log("subtotal = "+subtotal +",  total = "+subtotal +", no hay descuento");
}