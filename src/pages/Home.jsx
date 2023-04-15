import React from 'react';
import './../styles/Home.css';
import { useTheme } from '../context/Layout';

// componentes
import Intro from '../components/Intro/Intro';
import CardsDisplayer from '../components/CardsDisplayer/CardsDisplayer';

const Home = () => {

  const { theme, updateTheme } = useTheme();

  return (
    <section className="home" style={{ backgroundColor: theme.backgroundColor, backgroundImage: theme.backgroundImage }}>
        <div>
          <button
            className="themeButton"
            onClick={()=>updateTheme()}
            style={{backgroundColor: theme.backgroundColor}}
          >
            Cambiar tema
          </button>
        </div>
        <div className="curve">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
            </svg>
        </div>
        <Intro/>
        <CardsDisplayer/>
    </section>
  )
}

export default Home