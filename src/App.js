import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

function App() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
            duration: 1234
        });
    };

    useEffect(() => {
        AOS.init({
            duration : 1234
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
            {/* Future components like <Features /> and <Contact /> can be added here */}
        </main>
        {/* <Footer /> can be added later when created */}
        <div className="back-to-top-back">
            <div className="back-to-top" onClick={scrollToTop} aria-label="Back to top"></div>
        </div>
    </div>
    );
}

export default App;
