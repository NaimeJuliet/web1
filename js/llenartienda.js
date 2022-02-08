//funcion para llenar dinamicamente la tienda

export function llenartienda(){
   

    let productos=[

        {nombre:"Cartuchera", precio: 50000, foto:"../img/cartuchera.jpg" , descripcion:"cartuchera para guardar tus objetos personales"},
        {nombre:"Camara", precio: 150000, foto:"../img/camara.jpg" , descripcion:"hermosa camara con modelo de mickey antiguo"},
        {nombre:"Camara minnie", precio: 150000, foto:"../img/camara2.jpg" , descripcion:"hermosa y comoda camara de minnie mouse"},
        {nombre:"Collar minnie", precio: 90000, foto:"../img/collar_minnie.jpg" , descripcion:"collar minie para todas las edades"},
        {nombre:"Cortauñas", precio: 25000, foto:"../img/cortauñas.jpg" , descripcion:"un cortauñas hermoso, delicado para todas las edades"},
        {nombre:"Morral", precio: 120000, foto:"../img/morral.jpg" , descripcion:"comodo morral para llevar todo lo que quieras"},
        {nombre:"Muñeco", precio: 75000, foto:"../img/muñeco.jpg" , descripcion:"peluche para los mas peques"},
        {nombre:"Taza", precio: 50000, foto:"../img/taza.jpg" , descripcion:"preciosa taza para beber tus mejores momentos"},
        {nombre:"Vaso", precio: 12000, foto:"../img/vaso.jpg" , descripcion:"comoda y hermosa taza con calentador para que tus bebidas siempre esten calientes"},
        {nombre:"Cosmetiquera", precio: 65000, foto:"../img/cosmetiquera.jpg" , descripcion:"guarda todos tus comesticos en una hermosa cosmetiquera"},
    ] 

    
console.log(productos)



//rutina para recorrer el arreglo y crear las tarjetas de cada producto
// 1. crear referencia a un elemento "padre" o "base" donde aclararemos

let fila=document.getElementById("fila")

//2. necesito recorrer un arreglo
productos.forEach(function(produto){

//3. creamos los elementos necesarios para pintar los productos

let columna=document.createElement("div")
    columna.classList.add("col")


let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.classList.add("h-100")

    let imagen=document.createElement("img")
    imagen.classList.add("card-img-top")
    imagen.classList.add("p-3")
    imagen.classList.add("h-100")
    imagen.src=produto.foto

    let separador=document.createElement("hr")
    separador.classList.add("w-50")
    separador.classList.add("mx-auto")
    separador.classList.add("d-block")

    let nombre=document.createElement("h2")
    nombre.classList.add("text-danger")
    nombre.classList.add("fw-bold")
    nombre.classList.add("text-center")
    nombre.classList.add("mx-3")
    nombre.textContent=produto.nombre

    let precio=document.createElement("h5")
    precio.classList.add("text-center")
    precio.classList.add("text-info")    
    precio.textContent="$"+produto.precio

    //let descripcion=document.createElement("h7")
    //descripcion.classList.add("text-center")

    let botonAmpliarInfo=document.createElement("button")
    botonAmpliarInfo.setAttribute("type","button")
    botonAmpliarInfo.classList.add("btn")
    botonAmpliarInfo.classList.add("btn-outline-dark")
    botonAmpliarInfo.classList.add("mx-3")
    botonAmpliarInfo.classList.add("mb-3")    
    botonAmpliarInfo.textContent=("ver producto")


    //vamos a anclar (poner)(disponer)las etiquetas que acabamos de crear en nuestra base
   
    tarjeta.appendChild(imagen)
    tarjeta.appendChild(separador)
    tarjeta.appendChild(nombre)
    tarjeta.appendChild(precio)
    tarjeta.appendChild(botonAmpliarInfo)
    
      
    columna.appendChild(tarjeta)
    fila.appendChild(columna)


})

}
 