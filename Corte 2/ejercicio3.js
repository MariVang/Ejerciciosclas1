function convertirTexto(){

    let texto=document.querySelector("#texto").value;
    console.log(texto);

    let contenedor=document.querySelector("#contenedor");
    contenedor.innerHTML=mayusculas(texto);

    console.log(contarLongitud(texto));
    console.log("Tercer caracter :",obtenerCaracter(contenedor.innerHTML,2));
    console.log("Extracción :",extraer(texto));
    console.log(reemplazar(texto));
    console.log("palabras",dividir(texto));
    
}

function mayusculas(txt){
    return txt.toUpperCase();
}

function contarLongitud(texto){
    return texto.length;
}

function obtenerCaracter(txt,posicion){
    
    if (txt.charAt(posicion)==""){
        return null;
    }
    else{
        return txt.charAt(posicion);
    }
}

function extraer(txt){
    return txt.substring(2,5);
}

function reemplazar(txt){
    return txt.replace("martes","viernes");
}

function dividir(txt){
    return txt.split(" ");
}
