import React from 'react';
import Cards from '../components/Cards';
import '../App.css';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import Contact from './Contact';
import GratitudeSection from '../components/GratitudeSection';
import Identity from '../components/Identity';


function Home() {
    return(
        <>
        <HeroSection />
        <Identity />
        <Cards/>
        <AboutSection />
        <Contact />
        <GratitudeSection />
        </>
    )
    
    
}

export default Home;