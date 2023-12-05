

function generarCards(cards){
    for (let index = 0; index < cards.length; index++) {
        if(index <= 4){
            document.getElementById("fila1").innerHTML += `
            <div class="col-3 col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-3">
            <div class="card h-100" style="width: 18rem;">
                <img src="${cards[index].img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h6 class="card-subtitle">${cards[index].price}</h6>
                    <h5 class="card-title">${cards[index].name}</h5>
                    <p class="card-text">${cards[index].description}</p>
                </div>
                <div class="d-grid gap-2 card-footer bg-light"> 
                    <a href="#" class="btn btn-danger">Comprar</a>
                </div>
            </div>
        </div>
            `
        }else{
            document.getElementById("fila2").innerHTML += `
            <div class="col-3 col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-3">
            <div class="card h-100" style="width: 18rem;">
                <img src="${cards[index].img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h6 class="card-subtitle">${cards[index].price}</h6>
                    <h5 class="card-title">${cards[index].name}</h5>
                    <p class="card-text">${cards[index].description}</p>
                </div>
                <div class="d-grid gap-2 card-footer bg-light"> 
                    <a href="#" class="btn btn-danger">Comprar</a>
                </div>
            </div>
        </div>
            `
        }
    }
}

function cambiarColor(){
    let valor = document.getElementById("color").value
    console.log(valor)
    if(valor == "dark"){
        document.getElementById("bodry").classList.replace("bg-light",`bg-${valor}`)
        document.getElementById("idioma").classList.replace("bg-light",`bg-${valor}`)
        document.getElementById("color").classList.replace("bg-light",`bg-${valor}`)
        document.getElementById("contenedor").classList.replace("bg-light",`bg-${valor}`)
    }else{
        document.getElementById("bodry").classList.replace("bg-dark",`bg-${valor}`)
        document.getElementById("idioma").classList.replace("bg-dark",`bg-${valor}`)
        document.getElementById("color").classList.replace("bg-dark",`bg-${valor}`)
        document.getElementById("contenedor").classList.replace("bg-dark",`bg-${valor}`)
    }



}

function cambiarIdioma(param = español){
    console.log("entro aki",param.manu.burguers)
    generarCards(param.manu.burguers)
}
