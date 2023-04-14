import React from 'react'
import './Intro.css'

function Intro() {
    return (
        <section className="intro">
            <div className="titleContainer">
                <h1 className="text-3xl">Prueba técnica front end WORTEV</h1>         
            </div>
            <div className="mainContainer">
                <label for="input-field" className="text-lg font-medium">Suscríbete para conocer más personajes:</label>
                <div className="ctaContainer">
                    <input type="email" id="input-field" className="input" name="name" placeholder="John Doe" required/>
                    <button type="submit" className="button">Suscribirse al boletín</button>                
                </div>
                <div className="messageContainer">
                    <p>
                        Al dar click en "Suscribirse al boletín", te redirigirá a otra página en la cual 
                        se simula la confirmación de tu suscripción.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Intro
