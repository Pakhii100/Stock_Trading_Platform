import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from './Hero';
import LeftImg from './LeftImg';
import RightImg from './RightImg';
import Universe from './Universe';

function ProductPage() {
    return (
        <div>
            <Navbar />
            <Hero />
            <LeftImg/>
            <RightImg/>
            <Universe/>
            <Footer />
        </div>
    )
}

export default ProductPage;