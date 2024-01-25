import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
// import Footer from './components/Footer';
import WhatsApp from './components/WhatsApp';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

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
            <Services/>
            <About/>
            <Contact/>
            <WhatsApp/>
        </main>
        {/* <Footer /> */}
        <div className="back-to-top-back">
            <div className="back-to-top" onClick={scrollToTop} aria-label="Back to top"></div>
        </div>
    </div>
    );
}

export default App;
