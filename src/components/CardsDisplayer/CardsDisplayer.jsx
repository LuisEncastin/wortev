import React, { useState, useEffect, useCallback } from "react";
import Card from './../Card/Card';
import './CardsDisplayer.css';
import md5 from 'md5';

function CardsDisplayer() {
    const [data, setData] = useState([]);
    const [filteredValue, setFilteredValue] = useState('');

    /**
     * API parameters
     *  */ 
    const publicKey = process.env.REACT_APP_PUBLIC_API_KEY;
    const privateKey = process.env.REACT_APP_PRIVATE_API_KEY;
    const baseURL = process.env.REACT_APP_URL;
    const ts = Date.now().toString();
    const hash = md5(ts + privateKey + publicKey);

    /**
     * Function to fetch the data from the API
     *  */ 
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

    /**
     * Function to map the cards from the API
     *  */ 
    const mappedCards = data.map((item) =>{
        if (item.thumbnail.path.split('/').slice(-1).toString() !== 'image_not_available') {
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
            return null
          }
    })

    /**
     * Function to filter the cards from the API
     *  */ 
    const namesArr = data.map(item => item?.name)
    const filteredNames = namesArr.filter(item => item ? item.toLowerCase().includes(filteredValue.toLowerCase()) : false).map((item) => namesArr.indexOf(item)).map(idx => namesArr[idx]);

    const filteredCards = data.map((item) =>{
      if (filteredNames.includes(item?.name)) {
          return (
              <Card
              characterImage={`${item?.thumbnail?.path}/portrait_uncanny.${item?.thumbnail?.extension}`}
              characterName={item?.name}
              characterComics={item?.comics?.available}
              characterStories={item?.stories?.available}
              comics={item.comics?.items}
              />   
          );
        } else {
          return null
        }
    })

    return (
        <section className="cardsDisplayer">
            <div className="filterContainer">
              <p>Busca tu personaje:</p>
              <input
                type="text"
                className="input"
                name="filter"
                onChange={e => setFilteredValue(e.target.value)}
                placeholder="Buscar"
              />
            </div>
            <div className="mainCardsContainer">
                <div className="cardsContainer">
                    { filteredValue ? filteredCards : mappedCards }  
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
