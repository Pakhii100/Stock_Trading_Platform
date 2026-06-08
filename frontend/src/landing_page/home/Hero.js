import React from 'react';

function Hero() {
  return (
   <div className="container p-5 mb-4">
    <div className="row text-center">
        <img src="media/images/images/homeHero.png" alt="Hero" className='mb-5' />
        <h1 className='mt-5'>Invest in everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className='btn btn-primary p-3 fs-5 mb-4' style={{width:'25%', margin:'0 auto'}}>Sign up for free</button>
    </div>   
   </div>
)
}

export default Hero;