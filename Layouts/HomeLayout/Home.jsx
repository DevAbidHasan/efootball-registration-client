import React from 'react';
import Hero from '../../Pages/Header/Hero';
import TournamentInfo from '../../Pages/other-pages/TournamentInfo';
import HowItWorks from '../../Pages/other-pages/HowItWorks';
import TournamentOverview from '../../Pages/other-pages/TournamentOverview';
import PrizePool from '../../Pages/other-pages/PrizePool';
import RegistrationCTA from '../../Pages/other-pages/RegistrationCTA';
import FAQ from '../../Pages/other-pages/FAQ';

const Home = () => {
    return (
        <div>
            <Hero/>
            <TournamentInfo/>
            <HowItWorks/>
            <TournamentOverview/>
            <PrizePool/>
            <RegistrationCTA/>
            <FAQ/>
        </div>
    );
};

export default Home;