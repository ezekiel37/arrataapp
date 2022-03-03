
import '../css/App.scss';
import '../css/osahan.css';



import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



export default function ForgotPassword() {
    return (
    <div className="login-main-body">
      <section className="login-main-wrapper">
         <div className="container-fluid pl-0 pr-0">
            <div className="row no-gutters">
            <div class="col-md-5 p-5 bg-white full-height">
                  <div class="login-main-left">
                     <div class="text-center mb-5 login-main-left-header pt-4">
                        <img src="img/favicon.png" class="img-fluid" alt="LOGO"/>
                        <h5 class="mt-3 mb-3">Reset Password</h5>
                        <p>It is a long established fact that a reader <br/> will be distracted by the readable.</p>
                     </div>
                     <form action="index.html">
                        <div class="form-group">
                           <label>Enter Email / Mobile number</label>
                           <input type="text" class="form-control" placeholder="Enter Email / Mobile number"/>
                        </div>
                        <div class="mt-4">
                           <button type="submit" class="btn btn-outline-primary btn-block btn-lg">Reset Password</button>
                        </div>
                     </form>
                     <div class="text-center mt-5">
                        <p class="light-gray">Don’t have an account? <a href="register.html">Sign Up</a></p>
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