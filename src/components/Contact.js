import React from 'react';
import '../Contact.css'; // Ensure to create this CSS file

function ContactSection() {
    return (
        <div className="services-container" id="contact">
            {/* <h1>Serviços</h1> */}
        <div className="services-section">
            <div className="service">
                <h3>Atendimento</h3>
                <p>
                Navegar por questões jurídicas pode ser um processo complicado e gerar tensão. Compreendemos que este é um período delicado, e encontrar um profissional que inspire confiança e ofereça acolhimento representa um desafio significativo, especialmente em casos de direito de família e sucessões.
                </p>
                <br/>
                <p>
                Com o objetivo de proporcionar o suporte essencial neste momento crucial, reservamos um horário especial em nossa agenda para atendê-lo(a) online. Assim, você terá a oportunidade de expor suas necessidades e preocupações e conhecer nossa especialista, que está pronta para orientá-lo(a) com empatia e expertise.
                </p>
            </div>
            <div className="service">
                <h3>Consulta</h3>
                <p>
                    Enfrentar desafios legais pode ser complexo e estressante. Nossa consultoria é especialmente projetada para pessoas que estão enfrentando questões delicadas de direito de família e sucessões e precisam de orientações claras sobre como proceder. Aqui, você encontrará o auxílio necessário para compreender suas opções e planejar seus próximos passos com confiança. Nós fornecemos o suporte necessário para que você tome decisões informadas.
                </p>
                <br/>
                <p>
                    Nosso atendimento é personalizado e realizado online, sempre com horários marcados, pois entendemos que cada situação é única. Agende sua consulta em um momento que seja conveniente para você e esclareça suas dúvidas jurídicas de forma personalizada, no conforto de sua casa.
                </p>
                <br/>
                <p>
                    Caso seja necessário, realizamos uma análise detalhada de todos os documentos relevantes para o seu caso, garantindo que nenhuma informação importante seja perdida e que sua estratégia legal seja embasada em uma compreensão completa da situação.
                </p>
            </div>
            <div className="service">
                <h3>Mentoria</h3>
                <p>
                    Nossa mentoria é especialmente voltada para profissionais do direito que buscam um caminho sólido nas áreas de direito de família, sucessões e planejamento patrimonial.
                </p>
                <br/>
                <p>
                    Este serviço é ideal tanto para o aprimoramento em casos concretos, visando otimizar o atendimento aos clientes finais, quanto para impulsionar sua a carreira, destacando e desenvolvendo as habilidades para tornar sua prática jurídica mais lucrativa e eficiente.
                </p>
                <br/>
                <p>
                    Nossa mentora, com seu perfil excepcional, é uma referência no campo jurídico. Atuando como professora, Phd, advogada e palestrante, ela tem uma experiência diversificada, englobando tanto a advocacia quanto a docência em projetos complexos. Seu profundo conhecimento é crucial para auxiliar você a se tornar um profissional ainda mais competente e bem-sucedido no dinâmico mundo do direito.
                </p>
            </div>
            </div>
        </div>
    );
}

export default ContactSection;
