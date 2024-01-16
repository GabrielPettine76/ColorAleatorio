const boton = document.querySelector('button');
const color = document.getElementById('color');
const icono = document.getElementById('icono');

const generarColor= ()=>{
    let digitos ='0123456789ABCDEF';
    let colorEx ='#'

    for(let i=0; i<6 ;i++){
        let indiceAleatorio = Math.floor(Math.random()*16);
        console.log(indiceAleatorio);
        colorEx +=digitos[indiceAleatorio];
    }
    return colorEx;
}

boton.addEventListener('click',()=>{
    let colorAletorio= generarColor();
    color.textContent = colorAletorio;
    document.body.style.backgroundColor=colorAletorio;
    icono.style.backgroundColor= colorAletorio;
    
});