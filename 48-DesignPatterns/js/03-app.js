let instance = null;
class Persona {
  constructor(nombre, email) {
    if (!instance) {
      this.nombre = nombre;
      this.email = email;
      instance = this;
    } else {
      return instance
    }
  }

}

const persona = new Persona('will', 'will@gmail.com');
const persona2 = new Persona('karen', 'karen@gmail.com');

console.log(persona)
console.log(persona2)