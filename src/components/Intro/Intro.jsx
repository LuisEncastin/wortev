import React, {useState, useCallback, useEffect} from 'react'
import './Intro.css'
import { Link } from 'react-router-dom';

function Intro() {
    const [email, setEmail] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(null);

    const validateEmail = useCallback((email) => {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(regexEmail.test(email)){
            setIsValidEmail(true)
        } else {
            setIsValidEmail(false)
        }
    }, []);

    useEffect(()=>{
        validateEmail(email)
    },[email, validateEmail])

    const saveEmail = (valor) =>{
        window.localStorage.setItem('email', valor);
    }

    return (
        <section className="intro">
            <div className="titleContainer">
                <h1 className="text-3xl">Prueba técnica front end WORTEV</h1>         
            </div>
            <div className="mainContainer">
                <label for="input-field" className="text-lg font-medium">Suscríbete para conocer más personajes:</label>
                <div className="ctaContainer">
                    <input
                    type="email"
                    id="input-field"
                    className="input"
                    name="email"
                    onChange={e => setEmail(e.target.value)}
                    placeholder="John@doe.com" required
                    />
                    <Link to="/success">
                        <button
                        type="submit"
                        className={`${isValidEmail ? "enabledButton" : "disabledButton"}`}
                        onClick={()=>{saveEmail(email)}}
                        disabled={!isValidEmail}>Suscribirse al boletín</button>
                    </Link>           
                </div>
                {
                (!isValidEmail && email.length > 8 )  &&
                    <div className="errorMsgContainer">
                        <p>Por favor, ingresa un correo válido</p>                       
                    </div>
                }
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
