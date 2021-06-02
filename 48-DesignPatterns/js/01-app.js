// Class Pattern

class Persona {
  constructor( nombre, email ) {
    this.nombre = nombre
    this.email = email
  }
}

const persona = new Persona('will', 'admin@wilsonaguilar.com')

console.log(persona)