import React from 'react'
import '../App.css';
//import { Button } from '@mui/material';
import { Button } from './Button';
import './HeroSection.css';
import Identity from './Identity';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video autoPlay loop muted playsInline src='/videos/video-2.mp4' type='video/mp4'></video>
            <h1>Your Euphonious Adventure AWAITS</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn-outline'
                buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
            </div>
        </div>
    )
}


/*<Button className='btns' buttonStyle='btn-primary'
buttonSize='btn--large'
>
    Watch Trailer <i className='far  fa-play-circle' />
</Button>*/

            /*<div className='lcontainer'>
                <p class="typewriter">I'm a 
                <span data-text="web developer., designer., photographer."></span>
                
                </p>
            </div>
            */

export default HeroSection
