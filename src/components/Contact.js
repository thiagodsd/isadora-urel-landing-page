import React from 'react';

import contact_00_img from '../assets/images/contact_00.png';
import contact_01_img from '../assets/images/contact_01.png';
import contact_02_img from '../assets/images/contact_02.png';
import contact_03_img from '../assets/images/contact_03.png';

import '../styles/Contact.css';

function ContactSection() {
    return (
        <div className="contact-container" id="contact" data-aos="fade-up">
            <div className="contact-section">
                <div className="contact-list">
                    <div className="contact">
                        <div className="contact-image">
                            <img src={contact_00_img} alt="Atendimento" />
                        </div>
                        <div className="contact-text">
                            <h2>Atendimento</h2>
                            <p>
                                Uma das maiores dificuldades em momentos como os conflitos familiares é escolher um profissional qualificado e empático, <b>sempre abro 15 minutos na minha agenda para que você, via videochamada, possa me conhecer e entender como trabalho e posso lhe atender</b>.
                            </p>
                            <br />
                            <p>
                                Os atendimentos servem para darmos o primeiro passo rumo à confiança e compreensão mútua.
                            </p>
                        </div>
                    </div>
                    <div className="contact">
                        <div className="contact-image">
                            <img src={contact_01_img} alt="Consultoria" />
                        </div>
                        <div className="contact-text">
                            <h2>Consultoria</h2>
                            <p>
                                Em meio as tantas dúvidas e inseguranças que surgem em momentos delicados em especial nesse campo tão sensível que mistura sentimento e patrimônio, <b>a consultoria é o serviço voltado à a busca do melhor caminho para sua situação</b>.
                            </p>
                            <br />
                            <p>
                                As consultas servem como sessões de esclarescimento de dúvidas e definição de estratégias de solução.
                            </p>
                        </div>
                    </div>
                </div>
                    <div className="contact-list">
                    <div className="contact">
                        <div className="contact-image">
                            <img src={contact_02_img} alt="Parceria" />
                        </div>
                        <div className="contact-text">
                            <h2>Parceria</h2>
                            <p>
                                Pensando em atender os clientes da melhor forma possível, buscando a melhor alternativa técnica e visando a maximização de chance de sucesso, faço parcerias <b>com profissionais que não atuam em direito das famílias e buscam o melhor atendimento para seus clientes, bem como com profissionais que são dessa área</b> e estão em buscando visões alternativas ou complementares para agregar valor às suas demandas.
                            </p>
                            <br />
                            <p>
                                Cada parceria é única e enriquecedora para ambos e especialmente para o cliente.
                            </p>
                        </div>
                    </div>

                    <div className="contact">
                        <div className="contact-image">
                            <img src={contact_03_img} alt="Mentoria" />
                        </div>
                        <div className="contact-text">
                            <h2>Mentoria</h2>
                            <p>
                                Todos enfrentamos dificuldades no início da carreira, com atualização, ou ao ingressar no mercado de trabalho em uma nova área. Pensando nisso, <b>a mentoria é voltada a profissionais, sejam alunos, estagiários, advogados ou servidores, que queiram aprimoramento em sua jornada</b>.
                            </p>
                            <br />
                            <p>
                                Mentorias podem servir tanto para a análise e ajuda de casos concretos, como para que juntas(os) alavanquemos você em determinado assunto na área de Famílias, Sucessões e Planejamento Patrimonial.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;
