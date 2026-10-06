function Carrito({ carrito, eliminarDelCarrito }) {
  return (
    <div>
      <h2>Carrito de compras</h2>

      {carrito.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          <p>
            Total de productos en el carrito: {carrito.length}
          </p>

          {carrito.map((producto) => (
            <div
              className="carrito-item"
              key={producto.id}
            >
              <p>
                {producto.nombre} - $
                {producto.precio.toLocaleString('es-CL')}
              </p>

              <button
                type="button"
                onClick={() => eliminarDelCarrito(producto.id)}
              >
                Eliminar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Carrito