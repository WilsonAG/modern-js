function Vendedor(nombre) {
  this.nombre = nombre
  this.sale = null
}

Vendedor.prototype = {
  oferta: (articulo, precio) => {
    console.log(`Articulo ${articulo} con precio ${precio}`)
  },
  vendido: comprador => {
    console.log(`Vendido a ${comprador}`)
  }

}

function Comprador(nombre) {
  this.nombre = nombre
  this.sala = null
}

Comprador.prototype = {
  oferta: (cantidad, comprador) => {
    console.log(`${comprador.nombre} : ${cantidad}`)
  }
}

function Subasta() {
  let compradores = {}

  return {
    registrar: usuario => {
      compradores[usuario.nombre] = usuario
      usuario.sala = this
    }
  }
}


const will = new Comprador('Will')
const ricky = new Comprador('ricky')
const vendedor = new Vendedor('gabo')

const subasta = new Subasta()

subasta.registrar(will)
subasta.registrar(ricky)
subasta.registrar(vendedor)

vendedor.oferta('pc', 300)

will.oferta(320, will)
ricky.oferta(350, ricky)

vendedor.vendido('luis')

console.log(subasta)