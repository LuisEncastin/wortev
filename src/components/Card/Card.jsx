import React from 'react'

import './Card.css'

function Card() {
    return (
        <section className="card">
            <div className="cardInner">
                <div className="cardFront">
                    <div className="imageContainer">

                    </div>
                    <div className="cardMenuContainer">
                        <p className="characterName">Nombre</p>
                        <div className="cardSubcontainer">
                            <p className="characterName">Categoria</p>
                            <p className="characterName">Superpoder</p>
                        </div>
                    </div>                
                </div>
                <div className="cardBack">
                    <p>Hola mundo</p>
                </div>                
            </div>

        </section>
    )
}

export default Card
