import React from 'react';

function Stats() {
  return (
    <div className="container mb-0" >
      <div className="row py-3">
        <div className="col-6 p-5" >

          <h2 className="mb-4">Trust with confidence</h2>
          
          <div>
            <h3>Customer-first always</h3>
            <p className="text-muted">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
          </div>

          <div>
            <h3>No spam or gimmicks</h3>
            <p className="text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href='/' style={{ textDecoration: 'None' }}>Our philosophies.</a></p>
          </div>

          <div>
            <h3>The Zerodha universe</h3>
            <p className="text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          </div>

          <div>
            <h3>Do better with money</h3>
            <p className="text-muted">With initiatives like <a href='/' style={{ textDecoration: 'None' }}>Nudge</a> and <a href='/' style={{ textDecoration: 'None' }}>Kill Switch</a>, we don't just facilitate transactions, but actively help you do better with your money.</p>
          </div>

        </div>

        <div className="col-6 text-center p-4 ">
          <img src="media/images/images/ecosystem.png" alt="ecosystem" style={{ width: '85%' }}  />
          <div className='text-center'>
            <a href="/" style={{ textDecoration: 'None' }}>Explore our products<i class="fa-solid fa-arrow-right"></i></a> &nbsp;&nbsp;
            <a href="/" style={{ textDecoration: 'None' }}>Try Kite demo<i class="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Stats;