class Persona {
  constructor( nombre, email ) {
    this.nombre = nombre
    this.email = email
  }
}

const funcionesPersona = {
  mostrarInfo() {
    console.log(`Nombre Persona ${this.nombre}, email: ${this.email}`)
  }
}

const persona = new Persona('will', 'admin@wilsonaguilar.com')

Object.assign(Persona.prototype, funcionesPersona)

console.log(persona)
persona.mostrarInfo()