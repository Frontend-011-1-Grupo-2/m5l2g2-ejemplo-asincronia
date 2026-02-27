// Clases
class Persona {
  constructor(nombre, edad){
    this.nombre = nombre
    this.edad = edad
  }

  presentarse(){
    return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`
  }
}

const juan = new Persona('Juan', 25)
console.log(juan.presentarse())