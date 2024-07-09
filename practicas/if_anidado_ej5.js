//realizar un programa que realice operaciones basicas matematicas, segun el operador proporcionado
//+ - * /
//conciderar que division con 0 marque error
let n1=1;
let n2=0;
let n="/";  ////// cambiar el operador
if(n==="+"){
console.log(+n1 +" "+n +" "+n2 +" ="+n1+n2);
}
else if (n==="-"){
    console.log(+n1 +" "+n +" "+n2 +" = "+(n1-n2));
}
else if (n==="*"){
    console.log(+n1 +" "+n +" "+n2 +" ="+(n1*n2));
}
else if (n==="/"){
    if(n2===0){
        console.log("error");
    }  
    else 
    {
    console.log(+n1 +" "+n +" "+n2 +" ="+n1/n2);
    }
}
else{
    console.log("error");
}