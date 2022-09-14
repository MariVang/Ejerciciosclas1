// alert("Hola");
document.write("Escuela de artes y letras");
console.log("Martes 13");
let nombre="Mariana";
document.getElementById("cuadro1").innerHTML=nombre;
let name=prompt("Por favor escriba su nombre");
let edad=prompt("Escriba su edad");
let edadfutura=Number(edad)+10;
alert("Hola "+name+ " su edad en 10 años será " +edadfutura);
let tri=Number(edad)*3;
let half=Number(edad)/2;
alert("El triple de su edad es "+ tri+" y la mitad de su edad es "+half);
let res=Number(edad)%2;
// == igual valor
// == igual valor-igual tipo
// !== es diferente
// < > <= >=
if(res==0){
    alert("Tu edad es par")
}
else{
    alert("Tu edad es impar")
}
if(Number(edad)>=22){
    alert("Tu edad es mayor o igual a 22")
}
else{
    alert("Tu edad es menor a 22")
}

