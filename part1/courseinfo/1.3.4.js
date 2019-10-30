const arto = {
    name:'Beni',
    edad:35,
    educacion:'PHD',
    saludo: function(){
        console.log('Hola me llamo ' + this.name)
    },
    sumar: function(a,b){
        console.log(a + b)
    }
}

arto.saludo()

arto.crecer = function(){
    this.edad += 1
}

console.log('Tengo ' + arto.edad + ' años')
arto.crecer()
console.log('Ahora Tengo ' + arto.edad +' años' )

arto.sumar(4,5)

const referenciaSumar = arto.sumar
referenciaSumar(35,26)

const referenciaSaludo = arto.saludo
referenciaSaludo()
