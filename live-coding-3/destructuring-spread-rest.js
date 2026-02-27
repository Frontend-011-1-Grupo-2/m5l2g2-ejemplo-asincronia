// Destructuring de objetos
const usuario = {
  nombre: 'Juan',
  id: 1,
  email: 'juan@mail.com',
  telefono: +56912312323,
  edad: 33
}

const { email, nombre } = usuario
// const email = usuario.email
// const nombre = usuario.nombre
console.log(email)

// Spread Operator
const numeros = [1,2,3]
const masNumeros = [4,5,6]
const nuevosNumeros = [...numeros, 4, 5]
const numerosJuntos = [...numeros, ...masNumeros]
console.log(numerosJuntos)

const nombresEstudiantes = ['Juan', 'Pepa', 'Ana']

// Rest Operator
const estudiantes = (...nombres) => {
  return nombres.map((nombre) => { 
    const id = crypto.randomUUID()
    return {
      id: id,
      nombre: nombre, 
      tipo: 'estudiante',
      link: `www.estudiantes.com/${id}`
    }
   })
}
console.log(estudiantes(...nombresEstudiantes))