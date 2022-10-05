let animales=["Pinguino", "Oso", "Perro", "Gato", "Aguila", "Leon", "Tigre", "Puma", "Ballena", "Orca", "Tiburon", "Pulpo", "Colibri", "Caballo",
    "Camaleon", "Toro", "Tortuga", "Pez payaso", "Koala"];

function mostrarAnimales(){
    
    let contenedor = document.querySelector("#contenedor_animales");

    for (let i=0; i < animales.length; i++){

        let animal = animales[i];
        let li = document.createElement("li");
        li.textContent = animal;
        contenedor.appendChild(li);

    }


}

mostrarAnimales();

let animales2 = [
    {
        nombre : "Pinguino",
        imagen : "https://images.ecestaticos.com/pqIAcGCEagnkjdIBVKVbC9i5FH4=/0x0:1920x1278/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2Fe8e%2Fe27%2F2bf%2Fe8ee272bfd36f69679936351209d708c.jpg",
        Peso_promedio : "43 Kg",
        Numero_Patas : 2 ,
        Color_predominante : "Negro",
        Alimentacion: "heterótrofo carnívoro",
        habitat : "Región polar"
    },
    {
        nombre : "Oso",
        imagen : "https://dam.ngenespanol.com/wp-content/uploads/2022/02/osos-pardos-caza2.jpg",
        Peso_promedio : "80 - 600 Kg",
        Numero_Patas : 4 ,
        Color_predominante : "Marrón",
        Alimentacion: "Omnívoro",
        habitat : "Bosque"
    },
    {
        nombre : "Perro",
        imagen : "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/OHXQVXBGDRBK5CLDTXEPBLXIXM.jpg",
        Peso_promedio : "5 - 82 Kg",
        Numero_Patas : 4 ,
        Color_predominante : "Depende la raza",
        Alimentacion: "Omnívoro",
        habitat : "Lugares templados"
    },
    {
        nombre : "Gato",
        imagen : "https://images.ecestaticos.com/FVdcvD11qPRi-JWDH3USTiXDmeQ=/0x0:2120x1414/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F47b%2F328%2F963%2F47b3289639713b8e80c8d682d219fba7.jpg",
        Peso_promedio : "4 - 5 Kg",
        Numero_Patas : 4 ,
        Color_predominante : "Depense la raza",
        Alimentacion: "Carnívoros",
        habitat : "Lugares templados"
    },
    {
        nombre : "Aguila",
        imagen : "https://dam.ngenespanol.com/wp-content/uploads/2022/02/a%CC%81guila-calva1.jpg",
        Peso_promedio : "4 - 7 Kg",
        Numero_Patas : 2 ,
        Color_predominante : "Marrón oscuro",
        Alimentacion: "Carnívora",
        habitat : "Montaña / Bosque"
    },
    {
        nombre : "Leon",
        imagen : "https://taxonomias.com/wp-content/uploads/2021/05/taxonomia-del-leon.jpg",
        Peso_promedio : "190 Kg",
        Numero_Patas : 4 ,
        Color_predominante : "Naranja",
        Alimentacion: "Carnívoro",
        habitat : "Sabana"
    },
    {
        nombre : "Tigre",
        imagen : "https://static.wikia.nocookie.net/reinoanimalia/images/3/38/Tigre_1.png/revision/latest?cb=20130414074332&path-prefix=es",
        Peso_promedio : "90 - 310 Kg",
        Numero_Patas : 4 ,
        Color_predominante : "Naranja",
        Alimentacion: "Carnívoro",
        habitad : "Selva / Sabana"
    },
    {
        nombre : "Puma",
        imagen : "https://cdn.britannica.com/20/93520-050-3E663489/Puma.jpg",
        Peso_promedio : "53 - 100 Kg",
        Numero_Patas : 4 ,
        Color_predominante : "Marrón claro",
        Alimentacion: "Carnívoro",
        habitat : "Bosque / Paramo"
    },
    {
        nombre : "Ballena",
        imagen : "https://elcomercio.pe/resizer/G7J9xtwlGsMCud3d2ENI4FiPZqg=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/O6PP56IWABGOBN3VPTTIPHVL6I.jpg",
        Peso_promedio : "130.000 - 150.000 Kg",
        Numero_Patas : 0 ,
        Color_predominante : "Azul",
        Alimentacion: "Carnívora",
        habitat : "Océano"
    },
    {
        nombre : "Orca",
        imagen : "https://www.aquariumcostadealmeria.com/wp-content/uploads/2019/01/shutterstock_554899423-1.jpg",
        Peso_promedio : "3000 - 4000 Kg",
        Numero_Patas : 0 ,
        Color_predominante : "Negro",
        Alimentacion: "Carnívora",
        habitat : "Océano"
    }
]

function buscarAnimales(){

    let contenedor = document.querySelector("#Animales_Busqueda");
    let textBusqueda = document.querySelector("#buscador").value;
    let acumulador = "";

    animales2.forEach(animal => {

        if (animal.nombre.startsWith(textBusqueda) && textBusqueda !== ""){

            acumulador = acumulador + `<img src="${animal.imagen}" width="400" /><h3>${animal.nombre}</h3><h3>${animal.Peso_promedio}</h3><h3>${animal.Numero_Patas}</h3><h3>${animal.Color_predominante}</h3><h3>${animal.Alimentacion}</h3><h3>${animal.habitat}</h3>` ;

        }

    });

    contenedor.innerHTML = acumulador;

}



