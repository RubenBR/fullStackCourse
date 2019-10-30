class Persona {
    constructor (nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }

    saludo(){
        console.log('Hola me llamo ' + this.nombre + ' y tengo ' + this.edad + 'años')
    }
}

const beni = new Persona ('Beni', 35)
beni.saludo()