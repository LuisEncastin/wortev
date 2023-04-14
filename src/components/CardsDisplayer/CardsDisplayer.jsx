import React from 'react'
import Card from './../Card/Card';
import './CardsDisplayer.css'

function CardsDisplayer() {
    return (
        <section className="cardsDisplayer">
            <div className="mainCardsContainer">
                <div className="cardsContainer">  
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
            <div className="projectDescription">
                <p>
                    Este proyecto es la simulación de una landing page en la cual se consume una API para
                    desplegar la información de personajes de marvel.
                </p>                 
            </div>
        </section>
    )
}

export default CardsDisplayer
