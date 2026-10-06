function Producto({ producto, carrito, agregarAlCarrito }) {

  // Comprueba si el producto ya está agregado al carrito
  const estaEnCarrito = carrito.some(
    (item) => item.id === producto.id
  )

  return (
  <div className="producto">
      <h3>{producto.nombre}</h3>

      <p>Categoría: {producto.categoria}</p>

      <p>
        Precio: ${producto.precio.toLocaleString('es-CL')}
      </p>

      {estaEnCarrito ? (
        <button disabled>
          En el carrito
        </button>
      ) : (
        <button onClick={() => agregarAlCarrito(producto)}>
          Agregar al carrito
        </button>
      )}
    </div>
  )
}

export default Producto