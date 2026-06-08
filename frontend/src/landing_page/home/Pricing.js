import React from 'react';

function Pricing() {
     return (
          <div className='container mt-0 pt-0'>
               <div className='row p-5 '>
                    <div className='col-4 p-3'>
                         <h2 className='mb-4'>Unbeatable Pricing</h2>
                         <p className='mb-3'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                         <a href="/" style={{ textDecoration: 'None' }} >See pricing<i class="fa-solid fa-arrow-right"></i></a>
                    </div>

                    <div className='col-2 '></div>

                    <div className='col-6  p-5'>
                         <div className="row py-3">

                              <div className="col ">
                                   <h1 style={{ color: '#FFD700' }}>&#8377;O</h1>
                                   <p>Free account opening</p>
                              </div>

                              <div className="col ">
                                   <h1 style={{ color: '#FFD700' }}>&#8377;O</h1>
                                   <p>Free equity delivery and direct mutual funds</p>
                              </div>

                              <div className="col ">
                                   <h1 style={{ color: '#FFD700' }}>&#8377;2O</h1>
                                   <p>Intraday and F&O</p>
                              </div>

                         </div>

                    </div>


               </div>
          </div>
     )
}

export default Pricing;