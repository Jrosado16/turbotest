import React from 'react';
import logoSvg from '../assets/logo/logoBlue.svg'
import fb from '../assets/icons/facebook.svg'
import ig from '../assets/icons/instagram.svg'


const Footer = () => {
    return ( 
        <footer>
            <div className="container">
                <div className="logo">
                    <img src={logoSvg} alt="" />
                    <div className="description">
                        Uuummmm, this is a tasty burger!
                    </div>
                </div>
                <div className="info">
                    <div className="title">
                        CONTACT
                    </div>
                    <div className="detail">
                        <p>info@bukyapp.com</p><br />
                        <p>+ 34 722 73 96 22</p>
                    </div>
                    <div className="direction">
                        Calle Isaac Peral, 39, <br /> <br />
                        35660, Las Palmas
                    </div>
                </div>
                <div className="info explora">
                    <div className="title">
                        EXPLORA
                    </div>
                    <a>Home</a>
                    <a>Recomendados</a>
                    <a>La Agenda</a>
                    <a>Contacto</a>
                </div>
            </div>
            <div className="cookies">
                <div className="container">
                    <div className="redes">
                        <img src={fb} alt="" />
                        <img src={ig} alt="" />
                    </div>
                    <div className="legal">
                        <li>Aviso legal</li>
                        <li>Politica de Cookies</li>
                        <li>Politica de Privacidad</li>
                    </div>
                </div>
            </div>
            <div className="copy">
                <div className="container">
                    <p>
                        &copy; Turbo Testing 2021
                    </p>
                    <p>
                        Made for Carlos Rosado
                    </p>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;