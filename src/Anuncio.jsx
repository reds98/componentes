import React from "react";
import './Anuncio.css';

function Anuncio({titulo, color, linkImagen, precio , mensaje}) {

    // function saludar() {
    //     alert("Hola, bienvenido a nuestro anuncio!");
    // }
    const saludar = () => {
        alert("Hola, bienvenido a nuestro anuncio!");
    }





    return (
        <div>
            <h2 className={color}>{titulo}</h2>
            <img src={linkImagen} />
            <p > el precio es: {precio}</p>
            <p className="parrafoRojo"> este es el mensaje {mensaje}</p>
            <button onClick={saludar}>Saludar</button>
        </div>
    );
}

export default Anuncio;
