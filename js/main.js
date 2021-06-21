let database = firebase.database();

let entradasRef = database.ref("/entradas")
console.log('entradasRef:',entradasRef)

let entradasRef2 = database.ref("/postre")
console.log('entradasRef:',entradasRef)

let entradasRef3 = database.ref("/platofuerte")
console.log('entradasRef:',entradasRef)

function printCards( cardsData, containerId ) {
    for( platillo in cardsData ){
       let descripcion = cardsData[platillo].descripcion
       let foto = cardsData[platillo].foto
        let nombre = cardsData[platillo].nombre
        let precio = cardsData[platillo].precio
        
        let cardHtml = `
 
            <div class="card" style="width: 18rem;">
            <img src="${foto}" class="card-img-top" height="100px" we-100 alt=${nombre}>
            <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">${descripcion}</p>
                <p class="card-text">${precio}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>

            </div>
            </div>
            `
        let currentContent = document.getElementById(containerId).innerHTML

        let content = currentContent + cardHtml

        document.getElementById(containerId).innerHTML = content
    }
    
}

entradasRef.on('value', snapshot =>{
    let data = snapshot.val()

    printCards( data,"entrada" )
})


entradasRef2.on('value', snapshot =>{
    let data = snapshot.val()

    printCards( data,"platof" )
})

entradasRef3.on('value', snapshot =>{
    let data = snapshot.val()

    printCards( data,"postre" )
})