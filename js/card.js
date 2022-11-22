//estoy creando una array con varios objetos dentro. 
const productos = [
    {id: 1,  nombre: "Azus ROG zephyrus", img: "../img/Azus_ROG_zephyrus.png", precio:"$" + 3000000},
    
    {id: 2,  nombre: "Gamer misi thin", img: "../img/Gamer misi thin.png", precio:"$" + 3000000},
    
    {id: 3,  nombre: "Gamer acer nitro", img: "../img/Gamer_acer_nitro.png", precio: "$" + 10000000},
    
    {id: 4,  nombre: "Gamer lenovo ultra tom", img: "../img/Gamer_lenovo_ultra.png", precio:"$" + 3000000},
    
    {id: 5,  nombre: "Full hp volta", img: "../img/Gamer_lenovo_ultra.png", precio:"$" + 3000000},  
   ];
   
//estoy llamando un id desde el html al js mediante el metodo document.getElementById.
const tarjetas = document.getElementById("CardContainer");

//estoy creando una funcion flecha 
const electro = () => {
    //cree un ciclo for of donde me itera la array mostrandome los objetos dentro de la array.
    for (const data of productos) {
        //estoy creando un contenedor div mediante el metodo document.createElement
        const div = document.createElement("div")
        //estoy creando una estructura html mediante el metodo innerHTML dentro del div creado 
        div.innerHTML=`
        <div class="card_uno" id="compus">
        <img src="${data.img}" alt="">
        <p>${data.nombre}</p>
        <h3>${data.precio}</h3>
       </div>
        `;
        //estoy insertando el div creado dentro del contenedor llamado desde js con el id CardContainer.
        tarjetas.appendChild(div)
  }  
}

//estoy llamando(invocando) la funcion electro
electro();






















// //creamos una constante que es igual a una funcion flecha
//    const electrodomesticos = () =>{
//     //creamos un for tradicional para que me itere toda la array un dererminado numero de veces
//     for (let i = 0; i < productos.length; i++) {
//         //creamos una constante div que es igual a un div creado desde js
//         const div = document.createElement("div")
//         //creamos una estrucutra hmtl mediante el metodo inner.HTML
//         div.innerHTML`
//         <div class="card_uno">
//           <img src="${productos.img}" alt="">
//           <p>${productos.nombre}</p>
//           <h3>${productos.precio}</h3>
//         </div>
//         `;
//         //insertamos la estrucutra creada de hmtl mediante el metodo innerHML
//         //al bloque con el id CardContainer, llamado desde el hmtl al js mediante el metodo  document.getElementById.
//         tarjetas.appendChild(div)
//     }
// }

// electrodomesticos();


























