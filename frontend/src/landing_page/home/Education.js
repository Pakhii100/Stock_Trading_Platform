import React from 'react';

function Education() {
     return (
          <div className='container mt-0 pt-0 '>
               <div className='row '>
                    <div className='col pb-5'>
                         <img src='media/images/images/education.svg' alt='varsity' style={{width:'75%'}}></img>
                    </div>
                    <div className='col py-5'>
                         <h2>Free and open market education</h2>
                         <br></br>
                         <div>
                         <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                         <a href="/" style={{ textDecoration: 'None' }}>Varsity <i class="fa-solid fa-arrow-right"></i></a>
                         </div>
                         <br></br>
                         <div>
                         <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                         <a href="/" style={{ textDecoration: 'None' }}>TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                         </div>
                    </div>
               </div>
          </div>
     )
}
export default Education;