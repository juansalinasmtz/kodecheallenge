let musuario = document.getElementById("Plato");
let dusuario = document.getElementById("Desc");
let fusuario = document.getElementById("Ft");
let pusuario = document.getElementById("Precio");
let tplato = document.getElementById("TipoP");


let database = firebase.database();
let referencePath;
document.getElementById("TipoP").addEventListener('change', event => {
    console.log( event.target.value )
    referencePath=event.target.value
})

btnGuardar.addEventListener('click',(e)=>{
    e.preventDefault();
        database.ref(`/${referencePath}`).push({
            TipoPlato: tplato.value,
            nombre: musuario.value,
            descripsion: dusuario.value,
            foto: fusuario.value,
            precio: pusuario.value
            
        });
        musuario.value=""
        dusuario.value=""
        fusuario.value=""
        pusuario.value=""
        tplato.value="Elige"

});


