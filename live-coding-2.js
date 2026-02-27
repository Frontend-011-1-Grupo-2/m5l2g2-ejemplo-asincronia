console.log('Consumiento API con Promesas')
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response)=>response.json())
  .then((usuarios)=>console.log(usuarios))
  .catch((error)=>console.log(error))


const obtenerDatos = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const usuarios = await response.json()
    console.log(usuarios)
  } catch(error){
    console.error(error)
  }
}

obtenerDatos()