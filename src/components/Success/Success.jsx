import React, { useState, useEffect } from 'react'
import './Success.css'
import { Link } from 'react-router-dom';

function Success() {
    const [email, setEmail] = useState('');

    useEffect(()=>{
        setEmail(window.localStorage.getItem('email'));
    },[])

    return (
        <section className="success">
            <div className="successMainContainer">
                <div className="titleContainer">
                    <h1 className="text-lg text-center">Tu registro fue completado con éxito usando el siguiente correo:</h1>         
                </div>
                <div className="registeredMailContainer">
                    <p className="text-lg text-center">{email}</p>         
                </div>
                <div className="buttonContainer">
                    <Link to="/"><button type="button" className="enabledButton">Regresar a la página principal</button></Link>              
                </div>
            </div>
        </section>
    )
}

export default Success
