import React from 'react';
import Cards from '../components/Cards';
import '../App.css';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import Contact from './Contact';
import GratitudeSection from '../components/GratitudeSection';


function Home() {
    return(
        <>
        <HeroSection />
        <Cards/>
        <AboutSection />
        <Contact />
        <GratitudeSection />
        </>
    )
    
    
}

export default Home;