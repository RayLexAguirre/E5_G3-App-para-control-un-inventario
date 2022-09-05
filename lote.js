"use strict";

export default class inventory{
    
    constructor(){
        this.inventario = new Array();
        this.posicion = 0
    }

    agregar(nuevo){
        if(this.inventario.length === 20){
            return false;
        } else if(this.inventario.length < 20){
            this.inventario.push(nuevo);
        }
    }

    buscar(codigo){ 
        for (let i=0; i<this.inventario.length; i++){
            if (codigo == this.inventario[i].codigo){
                this.posicion = i;
                console.log(this.inventario[i])
                return this.inventario[i];
            }
        }
        
        return null;
    }

    eliminar() {
        let num = this.posicion
        this.intercambioDeElementos(this.inventario, num, this.inventario.length - 1);
        this.inventario.pop();

        for (let i = num, j = num + 1; i <= this.inventario.length - 1 && j <= this.inventario.length - 1; i++, j++) {
            console.log(this.inventario.length - 1, i, j);
            this.intercambioDeElementos(this.inventario, i, j)
        }

        console.log(this.inventario)
    }

    listar() {
        if(this.inventario.length === 0){
            document.getElementById('detalles').innerHTML += `
            <p>El inventario se encuentra vacio</p>`;
        } else {
            for(let i=0; i<this.inventario.length; i++){
            document.getElementById('detalles').innerHTML += `
            <p>Elemento Num.${i + 1}: Codigo ${this.inventario[i].codigo} Nombre ${this.inventario[i].nombre}</p>

        `;
        }
        }  
    }    

    listarReverso() {
        if(this.inventario.length === 0){
            document.getElementById('detalles').innerHTML += `
            <p>El inventario se encuentra vacio</p>`;
        } else {
            for(let i = this.inventario.length -1; i >= 0 ; i--){
            document.getElementById('detalles').innerHTML += `
            <p>Elemento Num.${i + 1}: Codigo ${this.inventario[i].codigo} Nombre ${this.inventario[i].nombre}</p>

        `;
        }
        }  
    }
    
    insertarEnPosicionEspecifica(nuevo, posicion){
        let position = posicion.get_Position() - 1;
    
        if(posicion.get_Position() === ""){
            return "posicion inexistente";
        } else if(this.inventario.length === 20){
            return false;
        } else if(position >= this.inventario.length - 1){
            return "posicion invalida";
        } else {
            this.inventario.push(nuevo);

            this.intercambioDeElementos(this.inventario, this.inventario.length-1, position);
                for (let i = this.inventario.length - 1, j = this.inventario.length - 2; i >= position + 1 && j >= position + 1; i--, j--) {

                    this.intercambioDeElementos(this.inventario, j, i)
                }
        }
    }

    intercambioDeElementos(datos, i = 0, j = datos.length -1){
        [datos[i], datos[j]] = [datos[j], datos[i]];
    }
/*
    comprovar(codigo){
        let posicion = 0;

        for(let i = 0; i < this.inventario.length; i++) {
            if (this.inventario[i] === codigo) {
                console.log(i)
                return posicion = i;
            } 
        }
    }
*/
}