import React from 'react';

function Navbar() {
     return (
         
               <nav className="navbar navbar-expand-lg border-bottom" style={{backgroundColor:'#FFF;'}}>
                    
                    <div className="container p-2">
                         
                         <a className="navbar-brand" href="#"><img src="media/images/images/logo.svg" alt="Logo" style={{width:'30%'}}  /></a>
                         
                         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                         </button>
                         
                         <div className="collapse navbar-collapse mr-2" id="navbarSupportedContent">
                                                        
                              <form className="d-flex mr-2" role="search">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                   
                                   <li className="nav-item ">
                                        <a className="nav-link active" aria-current="page" href="/signup">Signup</a>
                                   </li>
                                   <li className="nav-item ">
                                        <a className="nav-link active" aria-current="page" href="/about">About</a>
                                   </li>
                                   <li className="nav-item ">
                                        <a className="nav-link active" aria-current="page" href="/pricing">Pricing</a>
                                   </li>
                                   <li className="nav-item ">
                                        <a className="nav-link active" aria-current="page" href="/products">Products</a>
                                   </li>
                                   <li className="nav-item ">
                                        <a className="nav-link active" aria-current="page" href="/support">Support</a>
                                   </li>
                                   <li className="nav-item ">
                                        <a className="nav-link active" aria-current="page" href="#"><i class="fa-solid fa-bars"></i></a>
                                   </li>


                              </ul>
                              </form>
                         
                         </div>
                    
                    </div>
              
               </nav>

     )
}

export default Navbar;