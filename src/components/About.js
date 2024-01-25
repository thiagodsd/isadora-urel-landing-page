import React from 'react';
import '../About.css'; 
import about_image from '../assets/images/landing_page_isa_about.jpg';
import lattes_image from '../assets/images/about_icon_00_lattes.png';
import instagram_image from '../assets/images/about_icon_01_instagram.png';
import linkedin_image from '../assets/images/about_icon_02_linkedin.png';
import youtube_image from '../assets/images/about_icon_03_youtube.png';

function AboutSection() {
    return (
        <div className="about-container" id="about" data-aos="fade-up">
            {/* <h1>Sobre</h1> */}
            <div className="about-section">
                <div className="image-container">
                    <img src={about_image} alt="About Us" />
                    <div className="about-icons">
                        <a href="https://www.linkedin.com/in/isadoraurel/" target="_blank" rel="noreferrer">
                            <img src={linkedin_image} alt="Perfil no LinkedIn" />
                        </a>
                        <a href="https://www.linkedin.com/in/isadora-urel-6b1b1b1b/" target="_blank" rel="noreferrer">
                            <img src={instagram_image} alt="About Us" />
                        </a>
                        <a href="https://www.linkedin.com/in/isadora-urel-6b1b1b1b/" target="_blank" rel="noreferrer">
                            <img src={youtube_image} alt="About Us" />
                        </a>
                        <a href="https://www.linkedin.com/in/isadora-urel-6b1b1b1b/" target="_blank" rel="noreferrer">
                            <img src={lattes_image} alt="About Us" />
                        </a>
                    </div>
                </div>
                <div className="text-container">
                    <p>
                        Sou Isadora Urel, advogada apaixonada pelo universo jurídico, por onde transito em ambas as esferas do ensino e da advocacia.
                    </p>
                    <br/>
                    <p>
                        Minha jornada começou na Faculdade Integradas Antônio Eufrásio de Toledo, onde me formei em Direito. Desde então, me dediquei a aprofundar meus conhecimentos, tornando-me <b>duplamente especialista em Direito de Família e Sucessões e em Direito e Processo Penal</b>. Meu amor por essas áreas me levaram a conquistar os títulos de <b>Mestra e Doutora pela Pontifícia Universidade Católica de São Paulo</b>. No mundo acadêmico atuo como escritora, palestrante e professora universitária.
                    </p>
                    <br/>
                    <p>
                        Atuo principalmente no <b>consultivo e contencioso nas áreas de Direito de Família e Sucessões</b>. Minha abordagem é sempre personalizada, buscando compreender a fundo as necessidades de cada cliente, do planejamento matrimonial ao patrimonial. Com <b>mais de uma década de experiência</b>, meu objetivo é oferecer soluções jurídicas eficientes e humanizadas, sempre pautadas na ética e na excelência profissional. Seja em situações desafiadoras ou momentos de celebração, estou aqui para garantir que seus direitos e interesses sejam protegidos e respeitados.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
