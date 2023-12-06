function generarCards(cards){
    for (let index = 0; index < cards.length; index++) {
        if(index <= 3){
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
    let body = document.getElementById("bodry").classList
    let idioma = document.getElementById("idioma").classList
    let color = document.getElementById("color").classList
    let contenedor = document.getElementById("contenedor").classList
    console.log(valor)
    if(valor == "dark"){
        body.replace("bg-light",`bg-${valor}`);
        body.replace("text-dark",`text-light`);
        color.replace("bg-light",`bg-${valor}`);
        color.replace("text-dark",`text-light`);
        idioma.replace("bg-light",`bg-${valor}`);
        idioma.replace("text-dark",`text-light`);
        contenedor.replace("bg-light",`bg-${valor}`);
        contenedor.replace("text-dark",`text-light`);
    }else{
        body.replace("bg-dark",`bg-${valor}`);
        body.replace("text-light",`text-dark`);
        color.replace("bg-dark",`bg-${valor}`);
        color.replace("text-light",`text-dark`);
        idioma.replace("bg-dark",`bg-${valor}`);
        idioma.replace("text-light",`text-dark`);
        contenedor.replace("bg-dark",`bg-${valor}`);
        contenedor.replace("text-light",`text-dark`);
    }



}

function cambiarIdioma(){
    console.log("entro aki camb idioma ",document.getElementById("idioma").value)
    document.getElementById("fila1").innerHTML = ""
    document.getElementById("fila2").innerHTML = ""
    switch (parseInt(document.getElementById("idioma").value)) {
        case 1:
            console.log("entro a ingles",ingles.menu.burgers)
            generarCards(ingles.menu.burgers);
            break;
            case 0:
            console.log("entro a espñaol",espanol.menu.burgers)
            generarCards(espanol.menu.burgers);
            break;
            case 3:
            console.log("entro a fr",frances.menu.burgers)
            generarCards(frances.menu.burgers);
            break;
            case 4:
            console.log("entro a jp",japones.menu.burgers)
            generarCards(japones.menu.burgers);
            break;

        default:
            generarCards(espanol.menu.burgers);
            break;
    }
}

cambiarIdioma()
