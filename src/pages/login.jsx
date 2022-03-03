
import '../css/App.scss';
import '../css/osahan.css';



import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



export default function Login() {
    return (
    <div className="login-main-body">
      <section className="login-main-wrapper">
         <div className="container-fluid pl-0 pr-0">
            <div className="row no-gutters">
               <div className="col-md-5 p-5 bg-white full-height">
                  <div className="login-main-left">
                     <div className="text-center mb-5 login-main-left-header pt-4">
                        <img src="img/favicon.png" className="img-fluid" alt="LOGO"/>
                        <h5 className="mt-3 mb-3">Welcome to Vidoe</h5>
                        <p>It is a long established fact that a reader <br/> will be distracted by the readable.</p>
                     </div>
                     <form action="index.html">
                        <div className="form-group">
                           <label>Mobile number</label>
                           <input type="text" className="form-control" placeholder="Enter mobile number"/>
                        </div>
                        <div className="form-group">
                           <label>Password</label>
                           <input type="password" className="form-control" placeholder="Password"/>
                        </div>
                        <div className="mt-4">
                           <div className="row">
                              <div className="col-12">
                                 <button type="submit" className="btn btn-outline-primary btn-block btn-lg">Sign In</button>
                              </div>
                           </div>
                        </div>
                     </form>
                     <div className="text-center mt-5">
                        <p className="light-gray">Don’t have an account? <a href="register.html">Sign Up</a></p>
                     </div>
                  </div>
               </div>
               <div className="col-md-7">
                  <div className="login-main-right bg-white p-5 mt-3 mb-1">
                      {/*  carousel  */}
                      <OwlCarousel className="owl-carousel owl-theme owl-carousel-login" 
                           loop margin={10} autoplay autoplaySpeed={1000}
                           autoplayHoverPause items={1} 
                           
                           >
                     
                        <div className="item">
                           <div className="carousel-login-card text-center">
                              <img src="img/login.png" className="img-fluid" alt="LOGO"/>
                              <h5 className="mt-5 mb-3">​Watch videos offline</h5>
                              <p className="mb-4">when an unknown printer took a galley of type and scrambled<br/> it to make a type specimen book. It has survived not <br/>only five centuries</p>
                           </div>
                        </div>
                        <div className="item">
                           <div className="carousel-login-card text-center">
                              <img src="img/login.png" className="img-fluid" alt="LOGO"/>
                              <h5 className="mt-5 mb-3">Download videos effortlessly</h5>
                              <p className="mb-4">when an unknown printer took a galley of type and scrambled<br/> it to make a type specimen book. It has survived not <br/>only five centuries</p>
                           </div>
                        </div>
                        <div className="item">
                           <div className="carousel-login-card text-center">
                              <img src="img/login.png" className="img-fluid" alt="LOGO"/>
                              <h5 className="mt-5 mb-3">Create GIFs</h5>
                              <p className="mb-4">when an unknown printer took a galley of type and scrambled<br/> it to make a type specimen book. It has survived not <br/>only five centuries</p>
                           </div>
                        </div>
                     
                     {/* end carousel */}
                     </OwlCarousel>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
    
    );
  }