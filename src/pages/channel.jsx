import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown} from 'react-bootstrap';
import '../css/App.scss';
import '../css/osahan.css';

import { Link } from "react-router-dom";

import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faSearch, faPlusCircle, faBell, faHeadphonesAlt, faStar, faEdit, faEnvelope, 
faHome, faVideo, faUserCircle, faSignOutAlt, faUser, faUserAlt,
 faCloudUploadAlt, faFolder, faHistory, faSignal, faTimesCircle, faPlayCircle, faCalendarAlt, faCog, faCircle, faCaretDown, faEllipsisH, faAngleDown} from '@fortawesome/free-solid-svg-icons'



function Channel() {
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
         <Link className="navbar-brand mr-1" to="index.html"><img className="img-fluid" alt="" src="img/logo.png"/></Link>
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
          <Link className="dropdown-item" to="#" data-toggle="modal" data-target="#logoutModal"><FontAwesomeIcon className="fa-fw" icon={faSignOutAlt} /> &nbsp; Logout</Link>
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
         <div className="single-channel-image">
               <img className="img-fluid" alt="" src="img/channel-banner.png"/>
               <div className="channel-profile">
                  <img className="channel-profile-img" alt="" src="img/s2.png"/>
                  <div className="social hidden-xs">
                     Social &nbsp;
                     <a className="fb" href="#">Facebook</a>
                     <a className="tw" href="#">Twitter</a>
                     <a className="gp" href="#">Google</a>
                  </div>
               </div>
            </div>
            <div className="single-channel-nav">
               <nav className="navbar navbar-expand-lg navbar-light">
                  <a className="channel-brand" href="#">Osahan Channel <span title="" data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></span></a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                           <a className="nav-link" href="#">Videos <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#">Playlist</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#">Channels</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#">Discussion</a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item dropdown">
                           <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           Donate
                           </a>
                           <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <a className="dropdown-item" href="#">Action</a>
                              <a className="dropdown-item" href="#">Another action</a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" href="#">Something else here</a>
                           </div>
                        </li>
                     </ul>
                     <form className="form-inline my-2 my-lg-0">
                        <input className="form-control form-control-sm mr-sm-1" type="search" placeholder="Search" aria-label="Search"/><button className="btn btn-outline-success btn-sm my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button> &nbsp;&nbsp;&nbsp; <button className="btn btn-outline-danger btn-sm" type="button">Subscribe <strong>1.4M</strong></button>
                     </form>
                  </div>
               </nav>
            </div>
            <div className="container-fluid">
               <div className="video-block section-padding">
                  <div className="row">
                     <div className="col-md-12">
                        <div className="main-title">
                           <div className="btn-group float-right right-action">
                              <a href="#" className="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Sort by <i className="fa fa-caret-down" aria-hidden="true"></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                 <a className="dropdown-item" href="#"><i className="fas fa-fw fa-star"></i> &nbsp; Top Rated</a>
                                 <a className="dropdown-item" href="#"><i className="fas fa-fw fa-signal"></i> &nbsp; Viewed</a>
                                 <a className="dropdown-item" href="#"><i className="fas fa-fw fa-times-circle"></i> &nbsp; Close</a>
                              </div>
                           </div>
                           <h6>Videos</h6>
                        </div>
                     </div>
                     <div className="col-xl-3 col-sm-6 mb-3">
                        <div className="video-card">
                           <div className="video-card-image">
                              <a className="play-icon" href="#"><i className="fas fa-play-circle"></i></a>
                              <a href="#"><img className="img-fluid" src="img/v1.png" alt=""/></a>
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div className="video-page text-success">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
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
                              <a className="play-icon" href="#"><i className="fas fa-play-circle"></i></a>
                              <a href="#"><img className="img-fluid" src="img/v2.png" alt=""/></a>
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div className="video-page text-success">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
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
                              <a className="play-icon" href="#"><i className="fas fa-play-circle"></i></a>
                              <a href="#"><img className="img-fluid" src="img/v3.png" alt=""/></a>
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div className="video-page text-danger">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Unverified"><i className="fas fa-frown text-danger"></i></a>
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
                              <a className="play-icon" href="#"><i className="fas fa-play-circle"></i></a>
                              <a href="#"><img className="img-fluid" src="img/v4.png" alt=""/></a>
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div className="video-page text-success">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
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
                              <a className="play-icon" href="#"><i className="fas fa-play-circle"></i></a>
                              <a href="#"><img className="img-fluid" src="img/v5.png" alt=""/></a>
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div className="video-page text-success">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
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
                              <a className="play-icon" href="#"><i className="fas fa-play-circle"></i></a>
                              <a href="#"><img className="img-fluid" src="img/v6.png" alt=""/></a>
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div className="video-page text-danger">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Unverified"><i className="fas fa-frown text-danger"></i></a>
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
                              <a className="play-icon" href="#"><i className="fas fa-play-circle"></i></a>
                              <a href="#"><img className="img-fluid" src="img/v7.png" alt=""/></a>
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div className="video-page text-success">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
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
                              <a className="play-icon" href="#"><i className="fas fa-play-circle"></i></a>
                              <a href="#"><img className="img-fluid" src="img/v8.png" alt=""/></a>
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div className="video-page text-success">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
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
                              <a className="play-icon" href="#"><i className="fas fa-play-circle"></i></a>
                              <a href="#"><img className="img-fluid" src="img/v1.png" alt=""/></a>
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div className="video-page text-success">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
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
                              <a className="play-icon" href="#"><i className="fas fa-play-circle"></i></a>
                              <a href="#"><img className="img-fluid" src="img/v2.png" alt=""/></a>
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div className="video-page text-success">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
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
                              <a className="play-icon" href="#"><i className="fas fa-play-circle"></i></a>
                              <a href="#"><img className="img-fluid" src="img/v3.png" alt=""/></a>
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div className="video-page text-danger">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Unverified"><i className="fas fa-frown text-danger"></i></a>
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
                              <a className="play-icon" href="#"><i className="fas fa-play-circle"></i></a>
                              <a href="#"><img className="img-fluid" src="img/v4.png" alt=""/></a>
                              <div className="time">3:50</div>
                           </div>
                           <div className="video-card-body">
                              <div className="video-title">
                                 <a href="#">There are many variations of passages of Lorem</a>
                              </div>
                              <div className="video-page text-success">
                                 Education  <a title="" data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success"></i></a>
                              </div>
                              <div className="video-view">
                                 1.8M views &nbsp;<i className="fas fa-calendar-alt"></i> 11 Months ago
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <nav aria-label="Page navigation example">
                     <ul className="pagination justify-content-center pagination-sm mb-0">
                        <li className="page-item disabled">
                           <a tabIndex="-1" href="#" className="page-link">Previous</a>
                        </li>
                        <li className="page-item active"><a href="#" className="page-link">1</a></li>
                        <li className="page-item"><a href="#" className="page-link">2</a></li>
                        <li className="page-item"><a href="#" className="page-link">3</a></li>
                        <li className="page-item">
                           <a href="#" className="page-link">Next</a>
                        </li>
                     </ul>
                  </nav>
               </div>
            </div>
            {/* <!-- /.container-fluid -->
            <!-- Sticky Footer --> */}
            <footer className="sticky-footer ml-0">
               <div className="container">
                  <div className="row no-gutters">
                     <div className="col-lg-6 col-sm-6">
                        <p className="mt-1 mb-0">&copy; Copyright 2018 <strong className="text-dark">Vidoe</strong>. All Rights Reserved<br/>
                           <small className="mt-0 mb-0">Made with <i className="fas fa-heart text-danger"></i> by <a className="text-primary" target="_blank" href="https://askbootstrap.com/">Ask Bootstrap</a>
                           </small>
                        </p>
                     </div>
                     <div className="col-lg-6 col-sm-6 text-right">
                        <div className="app">
                           <a href="#"><img alt="" src="img/google.png"/></a>
                           <a href="#"><img alt="" src="img/apple.png"/></a>
                        </div>
                     </div>
                  </div>
               </div>
            </footer>
         </div>
        {/* content wrapper  */}
      </div>
    {/* wrapper  */}
      {/* scrool to top  */}
      <Link className="scroll-to-top rounded" to="#page-top">
      <i className="fas fa-angle-up"></i>
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
     
   </div>
     {/*end nav   */}  
     
    </>
  );
}

export default Channel;
