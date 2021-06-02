// Factory Pattern

class InputHTML {
  constructor(type, nombre) {
    this.type = type;
    this.nombre = nombre;
  }

  crearInput() {
    return `<input type="${this.type}" name="${this.nombre} id="${this.nombre}"">`;
  }
}

class HTMLFactory {
  crearElemento(tipo, nombre) {
    switch (tipo) {
      case 'text':
        return new InputHTML('text', nombre);

      case 'tel':
        return new InputHTML('tel', nombre);

      case 'email':
        return new InputHTML('email', nombre);

      default:
        return;
    }
  }
}

const el = new HTMLFactory();
const inputText = el.crearElemento('text', 'nombre-cliente');
const telInput = el.crearElemento('tel', 'telefono-cliente');
const emailInput = el.crearElemento('email', 'email-cliente');

console.log(inputText.crearInput());
console.log(telInput.crearInput());
console.log(emailInput.crearInput());
