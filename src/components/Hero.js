import React from 'react';
// import front_image from '../assets/images/landing_page_isa_00_1080_1600.png';
// import front_image from '../assets/images/cube_green_purple_01.png';

const Hero = () => {
    return (
        <div className="hero-container">
            <div className="hero-text">
                <h1>Isadora Urel</h1>
                <h2>Direito das Famílias, Sucessões &amp; Planejamento Patrimonial</h2>
                {/* <p>Guarda de Menores &#x2022; Divórcio &#x2022; Partilha de Bens &#x2022; Testamentos e Heranças &#x2022; Contrato de União Estável &#x2022; Regime de Bens</p> */}
                <p>Especialista em Casais, Ex-casais e Menores</p>
            </div>
            {/* <div className="hero-image">
                <img src={front_image} alt="React Logo" />
            </div> */}
        </div>
    );
}

export default Hero;
