 export function verCarrito(carrito){
    let modalVerCarrito = new bootstrap.Modal(document.getElementById('modalVerCarrito'))

    let contenedor=document.getElementById("contenedorCarrito")
    contenedor.innerHTML=""

    carrito.forEach(function(producto){
        let fila=document.createElement("div")
        fila.classList.add("row")

        let columna1=document.createElement("div")
        columna1.classList.add("col-12")
        columna1.classList.add("col-md-4")

        let columna2=document.createElement("div")
        columna2.classList.add("col-12")
        columna2.classList.add("col-md-8")

        let fotoProducto=document.createElement("img")
        fotoProducto.classList.add("img-fluid")
        fotoProducto.classList.add("w-100")
        fotoProducto.src=producto.foto


        //padres e hijos
        columna1.appendChild(fotoProducto)
        
        fila.appendChild(columna1)
        fila.appendChild(columna2)
       

        contenedor.appendChild(fila)

    })





    modalVerCarrito.show()
}