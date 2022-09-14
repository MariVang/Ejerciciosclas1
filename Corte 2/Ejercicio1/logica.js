function validar(){
    let checkboxp=document.getElementById("p").checked;
    console.log(checkboxp);
    let checkboxq=document.getElementById("q").checked;
    console.log(checkboxq);
    let resultado="<br>p AND q es: <br>"+(checkboxp&&checkboxq)+"<br>";
    resultado=resultado+"<br>p OR q es: <br>"+(checkboxp||checkboxq)+"<br>";
    resultado=resultado+"<br>La negación de p es: <br>"+(!checkboxp)+"<br>";
    resultado+="<br>La negación de q es: <br>"+(!checkboxq)+"<br>";
    document.getElementById("mensaje").innerHTML=resultado;
    
}
