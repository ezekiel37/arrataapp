import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown, Modal, Button} from 'react-bootstrap';
import './css/App.scss';
import './css/osahan.css';

import { Link } from "react-router-dom";

import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faPlusCircle, faBell, faHeadphonesAlt, faStar, faEdit, faEnvelope, 
faHome, faVideo, faUserCircle, faSignOutAlt, faUser, faUserAlt,
 faCloudUploadAlt, faFolder, faHistory, faSignal, faTimesCircle, faPlayCircle, faCalendarAlt, faCog, faCircle, faCaretDown, faEllipsisH, faAngleDown, faAngleUp} from '@fortawesome/free-solid-svg-icons'



function App() {
   const options ={
      
      responsive: {
         0:{
             items:1,
         },
         600:{
             items:3,
             nav:false
         },
         1000: {
           items: 4,
         },
         1200: {
           items: 8,
         }
   }, };
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
      <span className="dropdown-togle"

     
        ref={ref}
        onClick={(e) => {
          e.preventDefault();
          onClick(e);
        }}
      >
        {children}
      
      </span>
    ));
    
   const [isActive, setActive] = useState("false");

   const handleToggle = () => {
      
      setActive(!isActive);
      console.log("okay");
    };
   
  return (
    <>   
     {/* nav begin  */}
     <div className={isActive ? "body" : "sidebar-toggled"} id="page-top">
      <nav className="navbar navbar-expand navbar-light bg-white static-top osahan-nav sticky-top">
         &nbsp;&nbsp; 
         <button className="btn btn-link btn-sm text-secondary order-1 order-sm-0" id="sidebarToggle" onClick={handleToggle}>
         <FontAwesomeIcon icon={faBars} />
         </button> &nbsp;&nbsp;
         <Link className="navbar-brand mr-1" to="/"><img className="img-fluid" alt="" src="img/logo.png"/></Link>
       {/* nav search  */}
         <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-5 my-2 my-md-0 osahan-navbar-search">
            <div className="input-group">
               <input type="text" className="form-control" placeholder="Search for..."/>
               <div className="input-group-append">
                  <button className="btn btn-light" type="button">
                  <FontAwesomeIcon icon={faSearch} />
                  </button>
               </div>
            </div>
         </form>
          {/* navbar  */}
         <ul className="navbar-nav ml-auto ml-md-0 osahan-right-navbar">
            <li className="nav-item mx-1">
               <Link className="nav-link" to="/upload">
               <FontAwesomeIcon className="fa-fw" icon={faPlusCircle} />
               Upload Video
               </Link>
            </li>
            <li className="nav-item dropdown no-arrow mx-1">
               <Link className="nav-link dropdown-toggle" to="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               <FontAwesomeIcon className="fa-fw" icon={faBell} />
               <span className="badge badge-danger">9+</span>
               </Link>
               <div className="dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown">
                  <Link className="dropdown-item" to="#"><FontAwesomeIcon className="fa-fw" icon={faEdit} /> &nbsp; Action</Link>
                  <Link className="dropdown-item" to="#"><FontAwesomeIcon className="fa-fw" icon={faHeadphonesAlt} /> &nbsp; Another action</Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="#"><FontAwesomeIcon className="fa-fw" icon={faStar} /> &nbsp; Something else here</Link>
               </div>
            </li>
            <li className="nav-item dropdown no-arrow mx-1">
               <Link className="nav-link dropdown-toggle" to="#" id="messagesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               <FontAwesomeIcon className="fa-fw" icon={faEnvelope} />
               <span className="badge badge-success">7</span>
               </Link>
               <div className="dropdown-menu dropdown-menu-right" aria-labelledby="messagesDropdown">
                  <Link className="dropdown-item" to="#"><FontAwesomeIcon className="fa-fw" icon={faEdit} /> &nbsp; Action</Link>
                  <Link className="dropdown-item" to="#"><FontAwesomeIcon className="fa-fw" icon={faHeadphonesAlt} /> &nbsp; Another action</Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="#"><FontAwesomeIcon className="fa-fw" icon={faStar} />  &nbsp; Something else here</Link>
               </div>
            </li>
            <li className="nav-item dropdown no-arrow osahan-right-navbar-user">
              {/* dropdown  */}
              <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        <Link className="nav-link dropdown-toggle user-dropdown-link" to="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               <img alt="Avatar" src="img/user.png"/>
               Osahan 
               </Link>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">
          <Link className="dropdown-item" to="/account"><FontAwesomeIcon className="fa-fw" icon={faUserCircle} /> &nbsp; My Account</Link>
          </Dropdown.Item>
          <Dropdown.Item href="#">
          <Link className="dropdown-item" to="/subscription"><FontAwesomeIcon className="fa-fw" icon={faVideo} /> &nbsp; Subscriptions</Link>
          </Dropdown.Item>
          <Dropdown.Item href="#">
          <Link className="dropdown-item" to="/setting"><FontAwesomeIcon className="fa-fw" icon={faCog} /> &nbsp; Settings</Link>
          </Dropdown.Item>
          <div className="dropdown-divider"></div>
          <Dropdown.Item href="#">
      
          <Link className="dropdown-item" to="#" onClick={handleShow}><FontAwesomeIcon className="fa-fw" icon={faSignOutAlt} /> &nbsp; Logout</Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
                          {/*end dropdown */} 

            </li>
         </ul>
      </nav>
      <div id="wrapper">
         {/* sidebar  */}
         
         <ul className= {`navbar-nav ${isActive ? "sidebar" : "sidebar toggled"}`} >
            <li className="nav-item active">
               <Link className="nav-link" to="/">
               <FontAwesomeIcon className="fa-fw" icon={faHome} />
               <span>Home</span>
               </Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/channels">
               <FontAwesomeIcon className="fa-fw" icon={faUser} />
               <span>Channels</span>
               </Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/channel">
               <FontAwesomeIcon className="fa-fw" icon={faUserAlt} />
               <span>Single Channel</span>
               </Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/videopage">
               <FontAwesomeIcon className="fa-fw" icon={faVideo} />
               <span>Video Page</span>
               </Link>
            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/uploadvideo">
               <FontAwesomeIcon className="fa-fw" icon={faCloudUploadAlt} />
               <span>Upload Video</span>
               </Link>
            </li>
            <li className="nav-item dropdown">
             
            {/* dropdown  */}
            <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        <Link className="nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               <FontAwesomeIcon className="fa-fw" icon={faFolder} />
               <span>Pages</span>
               <FontAwesomeIcon className="fa-fw customicon" icon={faAngleDown} />
               </Link>
        </Dropdown.Toggle>
        <Dropdown.Menu>
        <h6 className="dropdown-header">Login Screens:</h6>
          <Dropdown.Item href="#">
          <Link className="dropdown-item" to="/login">Login</Link>
          </Dropdown.Item>
          <Dropdown.Item href="#">
          <Link className="dropdown-item" to="register.html">Register</Link>
          </Dropdown.Item>
          <Dropdown.Item href="#">
          <Link className="dropdown-item" to="/forgotpassword">Forgot Password</Link>
          </Dropdown.Item>
          <div className="dropdown-divider"></div>
          <Dropdown.Item href="#">
          <Link className="dropdown-item" to="/blog">Blog</Link>
          </Dropdown.Item>
          <Dropdown.Item href="#">
          <Link className="dropdown-item" to="/blogdetail">Blog Detail</Link>
          </Dropdown.Item>
          <Dropdown.Item href="#">
          <Link className="dropdown-item" to="blank.html">Blank Page</Link>
          </Dropdown.Item>
          <Dropdown.Item href="#">
          <Link className="dropdown-item" to="404.html">404 Page</Link>
          </Dropdown.Item>
          <Dropdown.Item href="#">
          <Link className="dropdown-item" to="/contact">Contact</Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
                          {/*end dropdown */} 


            </li>
            <li className="nav-item">
               <Link className="nav-link" to="/historypage">
               <FontAwesomeIcon className="fa-fw" icon={faHistory} />
               <span>History Page</span>
               </Link>
            </li>
            <li className="nav-item dropdown">
                
            {/* dropdown  */}
            <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        <Link className="nav-link dropdown-toggle" to="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               <FontAwesomeIcon className="fa-fw" icon={faFolder} />
               <span>Category</span>
               <FontAwesomeIcon className="fa-fw customicon" icon={faAngleDown} />
               </Link>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">
          <Link className="dropdown-item" to="/category">Movie</Link>
          </Dropdown.Item>
          <Dropdown.Item href="#">
          <Link className="dropdown-item" to="/category">Music</Link>
          </Dropdown.Item>
          <Dropdown.Item href="#">
          <Link className="dropdown-item" to="/category">Television</Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
                          {/*end dropdown */} 
            </li>
            <li className="nav-item channel-sidebar-list">
               <h6>SUBSCRIPTIONS</h6>
               <ul>
                  <li>
                     <Link to="/subscription">
                     <img className="img-fluid" alt="" src="img/s1.png"/> Your Life 
                     </Link>
                  </li>
                  <li>
                     <Link to="/subscription">
                     <img className="img-fluid" alt="" src="img/s2.png"/> Unboxing  <span className="badge badge-warning">2</span>
                     </Link>
                  </li>
                  <li>
                     <Link to="/subscription">
                     <img className="img-fluid" alt="" src="img/s3.png"/> Product / Service  
                     </Link>
                  </li>
                  <li>
                     <Link to="/subscription">
                     <img className="img-fluid" alt="" src="img/s4.png"/>  Gaming 
                     </Link>
                  </li>
               </ul>
            </li>
         </ul>
         {/* content wrapper */}
         <div id="content-wrapper">
            <div className="container-fluid pb-0">
               <div className="top-mobile-search">
                  <div className="row">
                     <div className="col-md-12">   
                        <form className="mobile-search">
                           <div className="input-group">
                             <input type="text" placeholder="Search for..." className="form-control"/>
                               <div className="input-group-append">
                                 <button type="button" className="btn btn-dark"><FontAwesomeIcon className="fa-fw" icon={faSearch} /></button>
                               </div>
                           </div>
                        </form>   
                     </div>
                  </div>
               </div>
               <div className="top-category section-padding mb-4">
                  <div className="row">
                     <div className="col-md-12">
                        <div className="main-title">
                           <div className="btn-group float-right right-action">
              {/* dropdown  */}
              <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        <Link to="#" className="right-action-link text-gray"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                             <FontAwesomeIcon  icon={faEllipsisH} />
                              </Link>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">
          <Link className="dropdown-item" to="#"><FontAwesomeIcon className="fa-fw" icon={faStar} /> &nbsp; Top Rated</Link>
          </Dropdown.Item>
          <Dropdown.Item href="#">
          <Link className="dropdown-item" to="#"><FontAwesomeIcon className="fa-fw" icon={faSignal} /> &nbsp; Viewed</Link>
          </Dropdown.Item>
          <Dropdown.Item href="#">
          <Link className="dropdown-item" to="#"><FontAwesomeIcon className="fa-fw" icon={faTimesCircle} /> &nbsp; Close</Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
                          {/*end dropdown */} 
         </div>
        
                           <h6>Channels Categories</h6>
                        </div>
                     </div>
                     <div className="col-md-12">
                        <div className="myowl">
                           {/*  carousel  */}
                           <OwlCarousel className="owl-carousel owl-theme " 
                           loop margin={10} nav autoplay autoplaySpeed={1000}
                           autoplayHoverPause items={8}  {...options}
                          
                           
                           >
                           <div className="item">
                              <div className="category-item">
                                 <Link to="#">
                                    <img className="" src="img/s1.png" alt=""/>
                                    <h6>Your Home</h6>
                                    <p>74,853 views</p>
                                 </Link>
                              </div>
                           </div>
                           <div className="item">
                              <div className="category-item">
                                 <Link to="#">
                                    <img className="img-fluid" src="img/s2.png" alt=""/>
                                    <h6>Unboxing Cool</h6>
                                    <p>74,853 views</p>
                                 </Link>
                              </div>
                           </div>
                           <div className="item">
                              <div className="category-item">
                                 <Link to="#">
                                    <img className="img-fluid" src="img/s3.png" alt=""/>
                                    <h6>Service Reviewing</h6>
                                    <p>74,853 views</p>
                                 </Link>
                              </div>
                           </div>
                           <div className="item">
                              <div className="category-item">
                                 <Link to="#">
                                    <img className="img-fluid" src="img/s4.png" alt=""/>
                                    <h6>Gaming <span title="" data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></span></h6>
                                    <p>74,853 views</p>
                                 </Link>
                              </div>
                           </div>
                           <div className="item">
                              <div className="category-item">
                                 <Link to="#">
                                    <img className="img-fluid" src="img/s5.png" alt=""/>
                                    <h6>Technology Tutorials</h6>
                                    <p>74,853 views</p>
                                 </Link>
                              </div>
                           </div>
                           <div className="item">
                              <div className="category-item">
                                 <Link to="#">
                                    <img className="img-fluid" src="img/s6.png" alt=""/>
                                    <h6>Singing</h6>
                                    <p>74,853 views</p>
                                 </Link>
                              </div>
                           </div>
                           <div className="item">
                              <div className="category-item">
                                 <Link to="#">
                                    <img className="img-fluid" src="img/s7.png" alt=""/>
                                    <h6>Cooking</h6>
                                    <p>74,853 views</p>
                                 </Link>
                              </div>
                           </div>
                           <div className="item">
                              <div className="category-item">
                                 <Link to="#">
                                    <img className="img-fluid" src="img/s8.png" alt=""/>
                                    <h6>Traveling</h6>
                                    <p>74,853 views</p>
                                 </Link>
                              </div>
                           </div>
                           <div className="item">
                              <div className="category-item">
                                 <Link to="#">
                                    <img className="img-fluid" src="img/s1.png" alt=""/>
                                    <h6>Education</h6>
                                    <p>74,853 views</p>
                                 </Link>
                              </div>
                           </div>
                           <div className="item">
                              <div className="category-item">
                                 <Link to="#">
                                    <img className="img-fluid" src="img/s2.png" alt=""/>
                                    <h6>Noodles, Sauces & Instant Food</h6>
                                    <p>74,853 views</p>
                                 </Link>
                              </div>
                           </div>
                           <div className="item">
                              <div className="category-item">
                                 <Link to="#">
                                    <img className="img-fluid" src="img/s3.png" alt=""/>
                                    <h6>Comedy <span title="" data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></span></h6>
                                    <p>74,853 views</p>
                                 </Link>
                              </div>
                           </div>
                           <div className="item">
                              <div className="category-item">
                                 <Link to="#">
                                    <img className="img-fluid" src="img/s4.png" alt=""/>
                                    <h6>Lifestyle Advice</h6>
                                    <p>74,853 views</p>
                                 </Link>
                              </div>
                           </div>
                           </OwlCarousel>
                        </div>
                     </div>
                  </div>
               </div>
               <hr/>
               <div className="video-block section-padding">
                  <div className="row">
                     <div className="col-md-12">
                        <div className="main-title">
                           <div className="btn-group float-right right-action">
                             
                     {/* dropdown  */}
                           {/* dropdown  */}
                           <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        <Link to="#" className="right-action-link text-gray"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Sort by <FontAwesomeIcon  icon={faCaretDown} />
                              </Link>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">
          <Link className="dropdown-item" to="#"><FontAwesomeIcon className="fa-fw" icon={faStar} /> &nbsp; Top Rated</Link>
          </Dropdown.Item>
          <Dropdown.Item href="#">
          <Link className="dropdown-item" to="#"><FontAwesomeIcon className="fa-fw" icon={faSignal} /> &nbsp; Viewed</Link>
          </Dropdown.Item>
          <Dropdown.Item href="#">
          <Link className="dropdown-item" to="#"><FontAwesomeIcon className="fa-fw" icon={faTimesCircle} /> &nbsp; Close</Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
                          {/*end dropdown */} 
                          {/*end dropdown */} 
                                 <div className="dropdown-menu dropdown-menu-right">
                                  </div>
                           </div>
                           <h6>Featured Videos</h6>
                        </div>
                     </div>
                     <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="video-card">
                           <div className="video-card-image">
                              <Link className="play-icon" to="#"><FontAwesomeIcon className="fa-fw" icon={faPlayCircle} /></Link>
                              <Link to="#"><img className="img-fluid" src="img/v1.png" alt=""/></Link>
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <Link to="#">There are many variations of passages of Lorem</Link>
                              </div>
                              <div className="video-page text-success">
                                 Education  <Link title="" data-placement="top" data-toggle="tooltip" to="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></Link>
                              </div>
                              <div className="video-view">
                                 1.8M views &nbsp;<FontAwesomeIcon className="fa-fw" icon={faCalendarAlt} /> 11 Months ago
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="video-card">
                           <div className="video-card-image">
                              <Link className="play-icon" to="#"><FontAwesomeIcon className="fa-fw" icon={faPlayCircle} /></Link>
                              <Link to="#"><img className="img-fluid" src="img/v2.png" alt=""/></Link>
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <Link to="#">There are many variations of passages of Lorem</Link>
                              </div>
                              <div className="video-page text-success">
                                 Education  <Link title="" data-placement="top" data-toggle="tooltip" to="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></Link>
                              </div>
                              <div className="video-view">
                                 1.8M views &nbsp;<FontAwesomeIcon className="fa-fw" icon={faCalendarAlt} /> 11 Months ago
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="video-card">
                           <div className="video-card-image">
                              <Link className="play-icon" to="#"><FontAwesomeIcon className="fa-fw" icon={faCircle} /></Link>
                              <Link to="#"><img className="img-fluid" src="img/v3.png" alt=""/></Link>
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <Link to="#">There are many variations of passages of Lorem</Link>
                              </div>
                              <div className="video-page text-danger">
                                 Education  <Link title="" data-placement="top" data-toggle="tooltip" to="#" data-original-title="Unverified"><i className="fas fa-frown text-danger"></i></Link>
                              </div>
                              <div className="video-view">
                                 1.8M views &nbsp;<FontAwesomeIcon className="fa-fw" icon={faCalendarAlt} /> 11 Months ago
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="video-card">
                           <div className="video-card-image">
                              <Link className="play-icon" to="#"><FontAwesomeIcon className="fa-fw" icon={faPlayCircle} /></Link>
                              <Link to="#"><img className="img-fluid" src="img/v4.png" alt=""/></Link>
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <Link to="#">There are many variations of passages of Lorem</Link>
                              </div>
                              <div className="video-page text-success">
                                 Education  <Link title="" data-placement="top" data-toggle="tooltip" to="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></Link>
                              </div>
                              <div className="video-view">
                                 1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-sm-6 mb-3">
                     <div className="video-card">
                           <div className="video-card-image">
                              <Link className="play-icon" to="#"><FontAwesomeIcon className="fa-fw" icon={faPlayCircle} /></Link>
                              <Link to="#"><img className="img-fluid" src="img/v4.png" alt=""/></Link>
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <Link to="#">There are many variations of passages of Lorem</Link>
                              </div>
                              <div className="video-page text-success">
                                 Education  <Link title="" data-placement="top" data-toggle="tooltip" to="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></Link>
                              </div>
                              <div className="video-view">
                                 1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="video-card">
                           <div className="video-card-image">
                              <Link className="play-icon" to="#"><FontAwesomeIcon className="fa-fw" icon={faPlayCircle} /></Link>
                              <Link to="#"><img className="img-fluid" src="img/v4.png" alt=""/></Link>
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <Link to="#">There are many variations of passages of Lorem</Link>
                              </div>
                              <div className="video-page text-success">
                                 Education  <Link title="" data-placement="top" data-toggle="tooltip" to="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></Link>
                              </div>
                              <div className="video-view">
                                 1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-sm-6 mb-3">
                     <div className="video-card">
                           <div className="video-card-image">
                              <Link className="play-icon" to="#"><FontAwesomeIcon className="fa-fw" icon={faPlayCircle} /></Link>
                              <Link to="#"><img className="img-fluid" src="img/v4.png" alt=""/></Link>
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <Link to="#">There are many variations of passages of Lorem</Link>
                              </div>
                              <div className="video-page text-success">
                                 Education  <Link title="" data-placement="top" data-toggle="tooltip" to="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></Link>
                              </div>
                              <div className="video-view">
                                 1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="video-card">
                           <div className="video-card-image">
                              <Link className="play-icon" to="#"><FontAwesomeIcon className="fa-fw" icon={faPlayCircle} /></Link>
                              <Link to="#"><img className="img-fluid" src="img/v4.png" alt=""/></Link>
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <Link to="#">There are many variations of passages of Lorem</Link>
                              </div>
                              <div className="video-page text-success">
                                 Education  <Link title="" data-placement="top" data-toggle="tooltip" to="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></Link>
                              </div>
                              <div className="video-view">
                                 1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <hr className="mt-0"/>
               <div className="video-block section-padding">
                  <div className="row">
                     <div className="col-md-12">
                        <div className="main-title">
                           <div className="btn-group float-right right-action">
                              {/* dropdown  */}
                           <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        <Link to="#" className="right-action-link text-gray"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Sort by <FontAwesomeIcon  icon={faCaretDown} />
                              </Link>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#">
          <Link className="dropdown-item" to="#"><FontAwesomeIcon className="fa-fw" icon={faStar} /> &nbsp; Top Rated</Link>
          </Dropdown.Item>
          <Dropdown.Item href="#">
          <Link className="dropdown-item" to="#"><FontAwesomeIcon className="fa-fw" icon={faSignal} /> &nbsp; Viewed</Link>
          </Dropdown.Item>
          <Dropdown.Item href="#">
          <Link className="dropdown-item" to="#"><FontAwesomeIcon className="fa-fw" icon={faTimesCircle} /> &nbsp; Close</Link>
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
                          {/*end dropdown */} 
                           </div>
                           <h6>Popular Channels</h6>
                        </div>
                     </div>
                     <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="channels-card">
                           <div className="channels-card-image">
                              <Link to="#"><img className="img-fluid" src="img/s1.png" alt=""/></Link>
                              <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                           </div>
                           <div className="channels-card-body">
                              <div className="channels-title">
                                 <Link to="#">Channels Name</Link>
                              </div>
                              <div className="channels-view">
                                 382,323 subscribers
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="channels-card">
                           <div className="channels-card-image">
                              <Link to="#"><img className="img-fluid" src="img/s2.png" alt=""/></Link>
                              <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                           </div>
                           <div className="channels-card-body">
                              <div className="channels-title">
                                 <Link to="#">Channels Name</Link>
                              </div>
                              <div className="channels-view">
                                 382,323 subscribers
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="channels-card">
                           <div className="channels-card-image">
                              <Link to="#"><img className="img-fluid" src="img/s3.png" alt=""/></Link>
                              <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-secondary btn-sm">Subscribed <strong>1.4M</strong></button></div>
                           </div>
                           <div className="channels-card-body">
                              <div className="channels-title">
                                 <Link to="#">Channels Name <span title="" data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle"></i></span></Link>
                              </div>
                              <div className="channels-view">
                                 382,323 subscribers
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="channels-card">
                           <div className="channels-card-image">
                              <Link to="#"><img className="img-fluid" src="img/s4.png" alt=""/></Link>
                              <div className="channels-card-image-btn"><button type="button" className="btn btn-outline-danger btn-sm">Subscribe <strong>1.4M</strong></button></div>
                           </div>
                           <div className="channels-card-body">
                              <div className="channels-title">
                                 <Link to="#">Channels Name</Link>
                              </div>
                              <div className="channels-view">
                                 382,323 subscribers
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
             {/* sticky footer*/}
            <footer className={isActive ? "sticky-footer" : "mycustom"}>
               <section className="section-padding footer-list">
         <div className="container">
            <div className="row">
               <div className="col-lg-3 col-md-3">
                  <div className="footer-logo mb-4"><Link className="logo" to="index.html"><img alt="" src="img/logo.png" className="img-fluid"/></Link></div>
                  <p>86 Petersham town, New South wales Waedll Steet, Australia</p>
                  <p className="mb-0"><Link to="#" className="text-dark"><i className="fas fa-mobile fa-fw"></i> +61 525 240 310</Link></p>
                  <p className="mb-0"><Link to="#" className="text-dark"><i className="fas fa-envelope fa-fw"></i> iamosahan@gmail.com</Link></p>
                  <p className="mb-0"><Link to="#" className="text-dark"><i className="fas fa-globe fa-fw"></i> www.askbootstrap.com</Link></p>
               </div>
               <div className="col-lg-2 col-md-2">
                  <h6 className="mb-4">Company</h6>
                  <ul>
                     <li><Link to="#">About us</Link></li>
                     <li><Link to="#">Careers</Link></li>
                     <li><Link to="#">Legal</Link></li>
                     <li><Link to="#">FAQ</Link></li>
                     <li><Link to="#">Privacy</Link></li>
                     <li><Link to="#">Terms</Link></li>
                     <li><Link to="#">Contact us</Link></li>
                  </ul>
               </div>
               <div className="col-lg-2 col-md-2">
                  <h6 className="mb-4">Features</h6>
                  <ul>
                     <li><Link to="#">Retention</Link></li>
                     <li><Link to="#">People</Link></li>
                     <li><Link to="#">Messages</Link></li>
                     <li><Link to="#">Infrastructure</Link></li>
                     <li><Link to="#">Platform</Link></li>
                     <li><Link to="#">Funnels</Link></li>
                     <li><Link to="#">Live</Link></li>
                  </ul>
               </div>
               <div className="col-lg-2 col-md-2">
                  <h6 className="mb-4">Solutions</h6>
                  <ul>
                     <li><Link to="#">Enterprise</Link></li>
                     <li><Link to="#">Financial Services</Link></li>
                     <li><Link to="#">Consumer Tech</Link></li>
                     <li><Link to="#">Entertainment</Link></li>
                     <li><Link to="#">Product</Link></li>
                     <li><Link to="#">Marketing</Link></li>
                     <li><Link to="#">Analytics</Link></li>
                  </ul>
               </div>
               <div className="col-lg-3 col-md-3">
                  <h6 className="mb-4">NEWSLETTER</h6>
                  <div className="input-group">
                     <input type="text" className="form-control" placeholder="Email Address..."/>
                     <div className="input-group-append">
                        <button className="btn btn-primary" type="button"><i className="fas fa-arrow-right"></i></button>
                     </div>
                  </div>
                  <small>It is a long established fact that a reader will be distracted by..</small>
                  <h6 className="mb-2 mt-4">DOWNLOAD APP</h6>
                  <div className="app">
                           <Link to="#"><img alt="" src="img/google.png"/></Link>
                           <Link to="#"><img alt="" src="img/apple.png"/></Link>
                        </div>
               </div>
            </div>
         </div>
      </section>
      
            </footer>
         </div>
        {/* content wrapper  */}
      </div>
    {/* wrapper  */}
      {/* scrool to top  */}
      <Link className="myrounded" to="">
        <p>hello</p>
      <FontAwesomeIcon className="fa-fw" icon={faAngleUp} />
      </Link>
      {/* logout modal  */}
      <div className="modal fade" id="logoutModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog modal-sm modal-dialog-centered" role="document">
            <div className="modal-content">
               <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                  <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                  </button>
               </div>
               <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
               <div className="modal-footer">
                  <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                  <Link className="btn btn-primary" to="login.html">Logout</Link>
               </div>
            </div>
         </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ready to Leave?</Modal.Title>
        </Modal.Header>
        <Modal.Body>Select "Logout" below if you are ready to end your current session.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose}>
           Logout
          </Button>
        </Modal.Footer>
      </Modal>
     
   </div>
     {/*end nav   */}  
     
    </>
  );
}

export default App;
