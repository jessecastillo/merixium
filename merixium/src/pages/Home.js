import React from 'react';
import Cards from '../components/Cards';
import '../App.css';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import Contact from './Contact';


function Home() {
    return(
        <>
        <HeroSection />
        <Cards/>
        <AboutSection />
        <Contact />
        </>
    )
    
    
}

export default Home;