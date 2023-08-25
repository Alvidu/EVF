const React = require('react');
const {useState, useEffect} = require('react');
const { Link,useParams } = require('react-router-dom');
const client = require('../client');


 const NuevoVentaDetalle = () => {

    let { id } = useParams();
    const [productos,setProductos] = useState([]);
    const [cantidad, setCantidad] = useState(0);
    const [idProducto, setIdProducto] = useState('')

    
    const handleSubmit = (evento)=>{
        evento.preventDefault();
        const NuevoVentaDetalle = {
            cantidad: cantidad
        };
        client({
            method: 'POST',
            path: '/api/detalles',
            entity: {
                venta: 'http://localhost:8080/api/ventas/'+id,
                producto: 'http://localhost:8080/api/productos/'+idProducto,
                NuevoVentaDetalle},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
           window.location = '/';    
        })
    }
    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/productos'
        }).done(response=>{
            setProductos(response.entity._embedded.productos)
        })       
    },[])

    return (
        <>
            <h1>Nuevo Detalle Producto</h1>
            <form onSubmit={handleSubmit}>

                <label htmlFor='producto'>Producto</label>
                <select name="producto" id="producto" onChange={(e)=>{setIdProducto(e.target.value)}}>
                    {productos.map(producto => {	
                        const value = producto._links.self.href.split('/').slice(-1)
                        return (
                            <option key={value} value={value}>{producto.nombre}</option>
                        )
                    })}
                </select><br />
                
                <label>Cantidad</label>            
                <input type="number" value={cantidad} onChange={(e) => setCantidad(parseInt(e.target.value))} />
                
                <input type="submit" value="Nuevo Detalle Venta" />

            </form>
            <Link to="/">Volver</Link>
        </>
    )
 }
module.exports = NuevoVentaDetalle