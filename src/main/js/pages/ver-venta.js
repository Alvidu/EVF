const React = require('react');
const { useParams } = require('react-router-dom');
const { useState, useEffect } = require('react');
const client = require('../client');
const { Link } = require ('react-router-dom');

const VerVentaPage = ()=> {
    let {id} = useParams();
    const [ventadetalle,setVentaDetalle] = useState([]);
    const [venta,setVenta] = useState({});

    useEffect(()=>{
        client({
            method:'GET',
            path:'/api/ventas/'+ id
        }).done(Response=>setVenta(Response.entity))
        client({
            method:"GET",
            path:"/api/ventas/"+id+"/formacion"
        }).done(Response=>setVentaDetalle(Response.entity))
    },[])

    return(
        <>
        <h1>Ver Ventas</h1>

        <table border="1">
            <thead>
            <tr>
                <th>Total</th>                
            </tr>       
            </thead>  
            <tbody>
                <tr>
                    <td>{venta.total}</td>
                </tr>
            </tbody>
        </table>

        <h2>Detalle de ventas</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>Producto</th>            
                    <th>Precio</th>
                    <th>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                {ventadetalle.map(ventadetalle=>{
                    return(
                    <tr key={ventadetalle.ID}>
                        <td>{ventadetalle.PRODUCTO}</td>
                        <td>{ventadetalle.PRODUCTOP}</td>
                        <td>{ventadetalle.CANTIDAD}</td>
                    </tr>
                    )                                            
                })}               
            </tbody>
        </table>

        <Link to={`/ver-venta/${id}/nuevo-venta_detalle`}>Nuevo Venta Detalle</Link>

        <Link to="/">Volver</Link>
        </>
    )

}
module.exports = VerVentaPage;