import React, { useState, useEffect, useCallback } from "react";
import Card from './../Card/Card';
import './CardsDisplayer.css';
import md5 from 'md5';

function CardsDisplayer() {
    const [data, setData] = useState([]);
    const publicKey = process.env.REACT_APP_PUBLIC_API_KEY;
    const privateKey = process.env.REACT_APP_PRIVATE_API_KEY;
    const baseURL = process.env.REACT_APP_URL;
    const ts = Date.now().toString();
    const hash = md5(ts + privateKey + publicKey);

    const fetchData = useCallback(async () => {
        try {
          const url = `${baseURL}characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          const responseJson = await response.json();
          setData(responseJson.data.results);
        } catch (err) {
          console.log(err);
        }
      }, [baseURL, ts, publicKey, hash, setData]);

    useEffect(() => {
        fetchData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    console.log(data)

    const mappedCards = data.map((item) =>{
        console.log(item.thumbnail.path.split('/').slice(-1))
        if (item.thumbnail.path.split('/').slice(-1).toString() !== 'image_not_available') {
            console.log('holaaaa')
            return (
                <Card
                characterImage={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}
                characterName={item.name}
                characterComics={item.comics.available}
                characterStories={item.stories.available}
                comics={item.comics.items}
                />   
            );
          } else {
            return null; 
          }
    })

    // <Card
    // characterImage={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}
    // characterName={item.name}
    // characterComics={item.comics.available}
    // characterStories={item.stories.available}
    // comics={item.comics.items}
    // />   

    return (
        <section className="cardsDisplayer">
            <div className="mainCardsContainer">
                <div className="cardsContainer">
                    { mappedCards }  
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
