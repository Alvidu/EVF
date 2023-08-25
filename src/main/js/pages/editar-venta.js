const React = require('react');
const { useState, useEffect } = require('react');
const client = require('../client');
const {Link , useParams} = require("react-router-dom")

const EditarVentaPage = () => {
    const[venta, setVenta] = useState({})
    let {id} = useParams();

        useEffect(()=>{
            client({
                method:'GET',
                path:'/api/ventas/'+id
            }).done((response)=>setVenta(response.entity))
        }, [])

        const handleSubmit = (evento)=>{
            evento.preventDefault();
            client({
                method:'PATCH',
                path:'/api/ventas/'+id,
                entity:venta,
                headers:{'Content-Type': 'application/json'}                
            }).done(()=>window.location = '/')
        }


    return(
        <>
            <h1>Editar Venta</h1>

            <form onSubmit={(handleSubmit)}>                
                <label>Total</label>
                <input type="text" id="total" name="total" value={venta.total} onChange={(e)=>setVenta({...venta, total: e.target.value})}></input><br/>               

                <input type="submit" value="Editar Total"></input>

            </form>
        </>
    )



}

module.exports = EditarVentaPage;