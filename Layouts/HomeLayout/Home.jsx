import React from 'react';
import Hero from '../../Pages/Header/Hero';
import TournamentInfo from '../../Pages/other-pages/TournamentInfo';
import HowItWorks from '../../Pages/other-pages/HowItWorks';

const Home = () => {
    return (
        <div>
            <Hero/>
            <TournamentInfo/>
            <HowItWorks/>
        </div>
    );
};

export default Home;