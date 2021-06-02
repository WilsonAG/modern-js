const restaurantApp = {}

restaurantApp.platillos = [
  { platillo: 'pizza',       precio: 25 },
  { platillo: 'Hamburguesa', precio: 20 },
  { platillo: 'Hot dog',     precio: 20 },
]

restaurantApp.funciones = {
  mostrarMenu: (platillos) => {
    console.log(`Bienvenidos anuestro menu`)

    platillos.forEach( ({platillo, precio}, i) => {
      console.log(`${i}: ${platillo} -> ${precio}`)
    })
  },

  ordenar: (id) => {
    console.log(`Tu platillo: ${restaurantApp.platillos[id].platillo} se esta preparando`)
  }
}

const { platillos } = restaurantApp

restaurantApp.funciones.mostrarMenu(platillos)
restaurantApp.funciones.ordenar(2)