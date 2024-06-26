import React, { useEffect } from 'react';
import AOS from 'aos';

import Header from './components/Header';
import Hero from './components/Hero';
import ServicesHeader from './components/ServicesHeader';
import Services from './components/Services';
import About from './components/About';
import AboutHeader from './components/AboutHeader';
import Contact from './components/Contact';
import ContactHeader from './components/ContactHeader';
import WhatsApp from './components/WhatsApp';
import Footer from './components/Footer';
import navigateAndLog from './components/navigateAndLog';

import 'aos/dist/aos.css';
import './styles/App.css';

function App() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            duration: 1200
        });
    };

    useEffect(() => {
        AOS.init({
            duration : 1200
        });
    }, []);
    return (
    <div className="app-container">
        <Header />
        <main>
            <Hero/>
            <ServicesHeader/>
            <Services/>
            <AboutHeader/>
            <About/>
            <ContactHeader/>
            <Contact/>
            <WhatsApp/> 
        </main>
        <Footer />
        <div className="back-to-top-back" onClick={() => navigateAndLog('#', 'back-to-top')} >
            <div className="back-to-top" onClick={scrollToTop} aria-label="Back to top"></div>
        </div>
    </div>
    );
}

export default App;
