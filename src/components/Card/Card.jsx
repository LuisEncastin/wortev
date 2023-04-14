import React from 'react'

import './Card.css'

function Card({
    characterImage,
    characterName,
    characterComics,
    characterStories,
    comics
}) {
    return (
        <section className="card">
            <div className="cardInner">
                <div className="cardFront">
                    <div className="imageContainer">
                        <img src={characterImage} alt="character hero" className="cardImage"/>
                    </div>
                    <div className="cardMenuContainer">
                        <p className="characterName"><b>Nombre:</b> {characterName}</p>
                        <div className="cardSubcontainer">
                            <p className="characterComics"><b>Comics:</b> {characterComics}</p>
                            <p className="characterStories"><b>Historias:</b> {characterStories}</p>
                        </div>
                    </div>                
                </div>
                <div className="cardBack">
                    <h5>Comics en que ha aparecido:</h5>
                    <ul>
                        {
                        comics.map(item => 
                        <li className="comicNameItem">{item.name}</li>)
                        }
                    </ul>

                </div>                
            </div>

        </section>
    )
}

export default Card
