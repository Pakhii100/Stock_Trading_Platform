import React from 'react';
import Brokerage from './Brokerage';
import Footer from '../Footer';
import Hero from './Hero';
import Navbar from '../Navbar';

function PricingPage() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Brokerage />
            <Footer />
        </div>
    )
}

export default PricingPage;