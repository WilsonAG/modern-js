// Constructor Pattern

class Persona {
  constructor( nombre, email ) {
    this.nombre = nombre
    this.email = email
  }
}

class Cliente extends Persona {
  constructor (nombre, email, empresa) {
    super(nombre, email)
    this.empresa = empresa
  }
} 

const cliente = new Cliente('will', 'will@will.com', 'nueva empresa')

console.log(cliente instanceof Persona)
console.log(cliente )