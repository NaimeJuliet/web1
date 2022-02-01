///importacion  de elemento
import {llenartienda} from "./llenartienda.js"
import {AmpliarInfoProducto}from "./ampliarInfoProducto.js"

//variables globales de la tienda
let producto={}

//llamo a la funcion llenar tienda
llenartienda()

//llamo funcion ampliarInfoProducto
let modalinfoproducto = new bootstrap.Modal(document.getElementById('modalinfoproducto'))


let listaProductos=document.getElementById("fila")
listaProductos.addEventListener("click", function(event){

        producto=AmpliarInfoProducto(event)
        console.log(producto)
        modalinfoproducto.show()

    })
