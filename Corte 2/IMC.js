function calcular(){
    let peso=document.querySelector("#peso").value;
    console.log(peso);
    let altura=document.querySelector("#altura").value;
    console.log(altura);
    let checkboxm=document.getElementById("mujer").checked;
    console.log(checkboxm);


    let IMC=0;
    if (checkboxm==true){
        IMC=peso/(altura*altura)
    }
    else{
        IMC=peso/(altura*altura)
    }
    console.log(IMC)

    let resultado=document.querySelector("#resultado");
    resultado.innerHTML=(IMC.toFixed(2));

}


