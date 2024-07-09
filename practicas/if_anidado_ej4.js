//realizar un programa que calcule el precio final de una compra condescuento y agregue impuestos:
//0 a 599 no aaplica descuento
//600-999   descuento 5%
//1000- 1999       10%
//>2000          15%
//iva del 16%

let n=2000;  ////// cambiar el valor de la variable n= subtotal
if(n>=0&&n<=599){
    console.log("subtotal: "+n +" + 16% IVA  :"+(n*.16));
    console.log("Total: "+(n+(n*.16)  ));
}
else if (n>=600&&n<=999){
    console.log("subtotal: "+n +" -5 % descuento : "+(n*.05)+" = "+ (n-(n*.05)  ));
    console.log(" + 16% IVA :  "+((n-(n*.05) )*.16 ));
    console.log("Total : "+((n-(n*.05) )+((n-(n*.05) )*.16 ) ) );
}
else if (n>=1000&&n<=1999){
    console.log("subtotal: "+n +" -10 % descuento : "+(n*.1)+" = "+ (n-(n*.10)  ));
    console.log(" + 16% IVA :  "+((n-(n*.1) )*.16 ));
    console.log("Total: "+((n-(n*.1) )+((n-(n*.1) )*.16 ) ) );
}
else if (n>=2000){
    console.log("subtotal: "+n +" -15 % descuento : "+(n*.15)+" = "+ (n-(n*.15)  ));
    console.log(" + 16% IVA:  "+((n-(n*.15) )*.16 ));
    console.log("Total: "+((n-(n*.15) )+((n-(n*.15) )*.16 ) ) );
}
else{
        console.log("Error");
}