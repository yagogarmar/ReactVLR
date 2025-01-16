import React, { useState, useEffect } from 'react'
import Team from './Team.jsx';



const Gallery = () => {
    //Definición del estado
    const [listaProductos, setListaProductos] = useState([]);

    const llenarProductos = () => {
        setListaProductos([...productos]);
    }

    useEffect(() => {
      const obtenerDatos = async () => {
        const res = await fetch('/api/rankings?region=eu');
        const data = await res.json();
        console.log(data);
        setListaProductos([...data.data]);
      }

      obtenerDatos();

    }, []);
    

    //Si no hay producto emitimos un mensaje
    if (listaProductos.length === 0) {
        return <>
            <h1>Cargando Datos...</h1>
        </>
    }
    
    //Mostramos los productos
  return (
    <>
        <div className="grid place-items-center w-full bg-base-200">
            <div className="max-w-5xl py-24 content-center justify-center">
                <h2>RANKING EMEA</h2>
                <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
                {
                    listaProductos.map((p, i) => {
                        return <Team key={i} team={p} />
                    })
                }
                </div>
            </div>
        </div>
    </>
  )
}

export default Gallery