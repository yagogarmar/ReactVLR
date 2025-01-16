import React, { useState, useEffect } from 'react'
import Product from './Team';



const Gallery = () => {
    //Definición del estado
    const [listaProductos, setListaProductos] = useState([]);

    const llenarProductos = () => {
        setListaProductos([...productos]);
    }

    useEffect(() => {
      const obtenerDatos = async () => {
        const res = await fetch('https://apiexpress-x7sl.onrender.com/productos');
        const data = await res.json();
        setListaProductos([...data]);
      }

      obtenerDatos();

    }, []);
    

    //Si no hay producto emitimos un mensaje
    if (listaProductos.length === 0) {
        return <>
        <h1>Cargando productos...</h1>
        </>
    }
    
    //Mostramos los productos
  return (
    /*
    <div style={{display:'flex', width:'100%', flexWrap:'wrap'}}>
    {
        listaProductos.map((p, i) => {
            return <Product key={i} product={p}></Product>
        })
    }
    </div>
    */
    <>
        <div className="grid place-items-center w-full bg-base-200">
            <div className="max-w-5xl py-24 content-center justify-center">
                <h1 className="text-4xl  text-center font-bold">Our Services</h1>
                <div className="grid mt-12 md:grid-cols-3 grid-cols-1 gap-8">
                {
                    listaProductos.map((p, i) => {
                        return <Team key={i} product={p}></Team>
                    })
                }
                </div>
            </div>
        </div>
    </>
  )
}

export default Gallery