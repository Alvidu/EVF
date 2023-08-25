const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client');

const HomePage = require("./pages/home");
const NuevoProductoPage = require("./pages/nuevo-producto");
const VerProductoPage = require("./pages/ver-producto");
const VerVentaPage = require("./pages/ver-venta")
const EditarProductoPage = require("./pages/editar-producto");
const { createBrowserRouter, RouterProvider } = require('react-router-dom');
const EditarVentaPage = require("./pages/editar-venta");
const NuevoVentaPage = require("./pages/nuevo-venta");
const NuevoVentaDetalle = require('./pages/nuevo-venta_detalle');


const router = createBrowserRouter([
    {path:'/', element:<HomePage/>},
    {path:'/nuevo-producto',element:<NuevoProductoPage/>},
    {path:'/ver-producto/:id',element:<VerProductoPage/>},
    {path:'/editar-producto/:id', element:<EditarProductoPage/>},
    {path:'/ver-venta/:id',element:<VerVentaPage/>},
    {path:'/editar-venta/:id', element:<EditarVentaPage/>},
    {path:'/nuevo-venta',element:<NuevoVentaPage/>},
    {path:'/ver-venta/:id/nuevo-venta_detalle',element:<NuevoVentaDetalle/>}

])


ReactDOM.render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>, document.getElementById('react'));
