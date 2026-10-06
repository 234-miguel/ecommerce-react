import { useEffect, useState } from 'react'
import './App.css'
import Producto from './components/Producto'
import Carrito from './components/Carrito'

function App() {
  const [productos, setProductos] = useState([])
  const [carrito, setCarrito] = useState([])

  // Cargar productos desde el JSON
  useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}data/productos.json`)
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error(error))
  }, [])

  // Agregar producto
  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto])
  }

  // Eliminar producto
  const eliminarDelCarrito = (id) => {
    setCarrito(
      carrito.filter((producto) => producto.id !== id)
    )
  }

  return (
    <div className="contenedor">

      <h1>Mi Tienda Online</h1>

      <h2>Catálogo de productos</h2>

      <div className="productos">
        {productos.map((producto) => (
          <Producto
            key={producto.id}
            producto={producto}
            carrito={carrito}
            agregarAlCarrito={agregarAlCarrito}
          />
        ))}
      </div>

      <Carrito
        carrito={carrito}
        eliminarDelCarrito={eliminarDelCarrito}
      />

    </div>
  )
}

export default App