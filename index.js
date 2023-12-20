let lenguajeActual = ""

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

function generarCardsDark(cards){
    for (let index = 0; index < cards.length; index++) {
        if(index <= 3){
            document.getElementById("fila1").innerHTML += `
            <div class="col-3 col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-3">
            <div class="card h-100 bg-dark text-ligth " style="width: 18rem;">
                <img src="${cards[index].img}" class="card-img-top" alt="...">
                <div class="card-body text-light">
                    <h6 class="card-subtitle">${cards[index].price}</h6>
                    <h5 class="card-title">${cards[index].name}</h5>
                    <p class="card-text">${cards[index].description}</p>
                </div>
                <div class="d-grid gap-2 card-footer bg-dark "> 
                    <a href="#" class="btn btn-danger">Comprar</a>
                </div>
            </div>
        </div>
            `
        }else{
            document.getElementById("fila2").innerHTML += `
            <div class="col-3 col-sm-12 col-md-6 col-lg-4 col-xl-3 mt-3">
            <div class="card h-100 bg-dark text-ligth " style="width: 18rem;">
                <img src="${cards[index].img}" class="card-img-top" alt="...">
                <div class="card-body text-light">
                    <h6 class="card-subtitle">${cards[index].price}</h6>
                    <h5 class="card-title">${cards[index].name}</h5>
                    <p class="card-text">${cards[index].description}</p>
                </div>
                <div class="d-grid gap-2 card-footer bg-dark "> 
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
    if(valor == "dark"){
        body.replace("bg-light",`bg-${valor}`);
        body.replace("text-dark",`text-light`);
        color.replace("bg-light",`bg-${valor}`);
        color.replace("text-dark",`text-light`);
        idioma.replace("bg-light",`bg-${valor}`);
        idioma.replace("text-dark",`text-light`);
        contenedor.replace("bg-light",`bg-${valor}`);
        contenedor.replace("text-dark",`text-light`);
        document.getElementById("fila1").innerHTML = ""
        document.getElementById("fila2").innerHTML = ""
        generarCardsDark(lenguajeActual)
    }else{
        body.replace("bg-dark",`bg-${valor}`);
        body.replace("text-light",`text-dark`);
        color.replace("bg-dark",`bg-${valor}`);
        color.replace("text-light",`text-dark`);
        idioma.replace("bg-dark",`bg-${valor}`);
        idioma.replace("text-light",`text-dark`);
        contenedor.replace("bg-dark",`bg-${valor}`);
        contenedor.replace("text-light",`text-dark`);
        document.getElementById("fila1").innerHTML = ""
        document.getElementById("fila2").innerHTML = ""
        generarCards(lenguajeActual)
    }



}

function cambiarIdioma(){
    document.getElementById("fila1").innerHTML = ""
    document.getElementById("fila2").innerHTML = ""
    switch (parseInt(document.getElementById("idioma").value)) {
        case 1:
            lenguajeActual = ingles.menu.burgers
            generarCards(lenguajeActual);
            break;
            case 0:
            lenguajeActual = espanol.menu.burgers
            generarCards(lenguajeActual);
            break;
            case 3:
            lenguajeActual = frances.menu.burgers
            generarCards(lenguajeActual);
            break;
            case 4:
            lenguajeActual = japones.menu.burgers
            generarCards(lenguajeActual);
            break;

        default:
            lenguajeActual = espanol.menu.burgers
            generarCards(lenguajeActual);
            break;
    }
}

cambiarIdioma()
