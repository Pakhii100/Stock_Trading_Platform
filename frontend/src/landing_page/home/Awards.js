import React from 'react';

function Awards() {
  return (
   <div className='container mb-3'>
     <div className='row'>
          <div className='col-6 p-5'>
               <img src='media/images/images/largestBroker.svg' alt='largest broker' />
          </div>
          <div className='col-6 p-5 mt-5'>
               <h1>Largest Stock Broker in India</h1>
               <p className='mb-5'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
               <div className='row'>
                    <div className='col-6'>
                         <ul>
                              <li><p>Futures and Options</p></li>
                              <li><p>Commodity derivatives</p></li>
                              <li><p>Currency derivatives</p></li>
                         </ul>
                    </div>
                    <div className='col-6'>
                         <ul>
                              <li><p>Stocks & IPOs</p></li>
                              <li><p>Direct mutual funds</p></li>
                              <li><p>Bonds & Govt. Securities</p></li>
                         </ul>
                    </div>
                    <img src='media/images/images/pressLogos.png' alt='Press Logos' style={{ width: '90%', height: 'auto' }} className='mt-3 text-center'/>
               </div>
          </div>

     </div>
        
        
   </div>
)
}

export default Awards;