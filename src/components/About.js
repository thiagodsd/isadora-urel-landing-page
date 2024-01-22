import React from 'react';
import '../About.css'; 
import about_image from '../assets/images/landing_page_isa_about.jpg';


function AboutSection() {
    return (
        <div className="about-container" id="about" data-aos="fade-up">
            {/* <h1>Sobre</h1> */}
            <div className="about-section">
                <div className="image-container">
                    <img src={about_image} alt="About Us" />
                </div>
                <div className="text-container">
                    <p>
                        Com 33 anos de idade, sou Isadora Urel, muito prazer!
                    </p>
                    <br/>
                    <p>
                        Sou mestre e doutora pela renomada PUC-SP, especializada em direito das famílias e sucessões. Além disso, completei vários cursos de mediação, focando em métodos alternativos de resolução de conflitos e extrajudicialização de demandas. Esta formação me permitiu alcançar uma taxa de sucesso de 70% em acordos nos casos em que atuo, buscando sempre soluções criativas, satisfatórias e duradouras, que evitam o agravamento de conflitos.
                    </p>
                    <br/>
                    <p>
                        Minha carreira jurídica é pautada pela constante busca pela excelência e atualização contínua em legislações e tendências jurídicas. Ofereço aos meus clientes soluções legais claras, estratégicas e criativas, sempre visando superar as expectativas com um serviço jurídico de alta qualidade.
                    </p>
                    <br/>
                    <p>
                        A empatia e compreensão são essenciais na minha prática. Trato cada cliente com o máximo respeito e integridade, proporcionando um ambiente acolhedor e compreensivo. Esta abordagem é reforçada pela minha experiência pessoal com o divórcio, que me oferece uma visão íntima e realista das complexidades emocionais dessas situações.
                    </p>
                    <br/>
                    <p>
                        Minha jornada no direito é enriquecida por experiências diversas, incluindo minha paixão anterior pela dança como ex-bailarina, o que me proporcionou uma perspectiva única sobre disciplina e expressão. Além disso, atuo como professora e palestrante, compartilhando meu conhecimento e experiências, o que me permite manter uma visão ampla e atualizada do campo jurídico, auxiliando inclusive profissionais da área a melhorar sua atuação.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutSection;
