const array = [1,3,5]

const array2 = array.concat(7)

const mapa  = array.map(valor => '<div>' + valor * valor + '</div>')

const numeros = [1,2,3,4,5]

const [primero,segundo, ...resto] = numeros

console.log(primero,segundo)
console.log(resto)

console.log(mapa)

array.forEach(
  valor => {
      console.log (valor)
  }
)