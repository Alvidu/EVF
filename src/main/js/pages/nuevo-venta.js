const React = require('react');
const { useState } = require('react');
const { Link} = require('react-router-dom'); // Asegúrate de importar Redirect
const client = require('../client');


const NuevoVentaPage = () => {
    const [total,setTotal] = useState('');

    const handleSubmit = (evento) => {
        evento.preventDefault();
        const NuevoVenta = {
            total: total              
        };

        client({
            method: 'POST',
            path: '/api/ventas',
            entity: NuevoVenta, // Envía el objeto con todas las propiedades
            headers: { 'Content-Type': 'application/json' }
        }).done(() => {
            window.location = '/'
        });
}
return(
    <>
        <h1>Nuevo Venta</h1>
            <form onSubmit={handleSubmit}>
                <label>Total</label>            
                <input type="text" id='total' name='total' value={total} onChange={(e) => setTotal(e.target.value)} />
                <br />              
                <input type="submit" value="Nueva Venta" />
            </form>
            <Link to="/">Volver</Link>
    </>
)

}
module.exports = NuevoVentaPage