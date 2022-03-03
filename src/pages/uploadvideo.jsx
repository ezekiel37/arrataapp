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



function UploadVideo() {
   
   const mystyle ={
      width: "75%"
   };
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
         <div className="container-fluid upload-details">
               <div className="row">
                  <div className="col-lg-12">
                     <div className="main-title">
                        <h6>Upload Details</h6>
                     </div>
                  </div>
                  <div className="col-lg-2">
                     <div className="imgplace"></div>
                  </div>
                  <div className="col-lg-10">
                     <div className="osahan-title">Contrary to popular belief, Lorem Ipsum (2019) is not.</div>
                     <div className="osahan-size">102.6 MB . 2:13 MIN Remaining</div>
                     <div className="osahan-progress">
                        <div className="progress">
                           <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75"   aria-valuemin="0" aria-valuemax="100" style={mystyle}></div>
                        </div>
                        <div className="osahan-close">
                           <a href="#"><i className="fas fa-times-circle"></i></a>
                        </div>
                     </div>
                     <div className="osahan-desc">Your Video is still uploading, please keep this page open until it's done.</div>
                  </div>
               </div>
               <hr/>
               <div className="row">
                  <div className="col-lg-12">
                     <div className="osahan-form">
                        <div className="row">
                           <div className="col-lg-12">
                              <div className="form-group">
                                 <label htmlFor="e1">Video Title</label>
                                 <input type="text" placeholder="Contrary to popular belief, Lorem Ipsum (2019) is not." id="e1" className="form-control"/>
                              </div>
                           </div>
                           <div className="col-lg-12">
                              <div className="form-group">
                                 <label htmlFor="e2">About</label>
                                 <textarea rows="3" id="e2" name="e2"
                                  defaultValue="description"
                                 className="form-control"/>
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-lg-3">
                              <div className="form-group">
                                 <label htmlFor="e3">Orientation</label>
                                 <select id="e3" className="custom-select">
                                    <option>Straight</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                 </select>
                              </div>
                           </div>
                           <div className="col-lg-3">
                              <div className="form-group">
                                 <label htmlFor="e4">Privacy Settings</label>
                                 <select id="e4" className="custom-select">
                                    <option>Public</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                 </select>
                              </div>
                           </div>
                           <div className="col-lg-3">
                              <div className="form-group">
                                 <label htmlFor="e5">Monetize</label>
                                 <select id="e5" className="custom-select">
                                    <option>Yes</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                 </select>
                              </div>
                           </div>
                           <div className="col-lg-3">
                              <div className="form-group">
                                 <label htmlFor="e6">License</label>
                                 <select id="e6" className="custom-select">
                                    <option>Standard</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                 </select>
                              </div>
                           </div>
                        </div>
                        <div className="row">
                           <div className="col-lg-5">
                              <div className="form-group">
                                 <label htmlFor="e7">Tags (13 Tags Remaining)</label>
                                 <input type="text" placeholder="Gaming, PS4" id="e7" className="form-control"/>
                              </div>
                           </div>
                           <div className="col-lg-4">
                              <div className="form-group">
                                 <label htmlFor="e8">Cast (Optional)</label>
                                 <input type="text" placeholder="Nathan Drake," id="e8" className="form-control"/>
                              </div>
                           </div>
                           <div className="col-lg-3">
                              <div className="form-group">
                                 <label htmlFor="e9">Language in Video (Optional)</label>
                                 <select id="e9" className="custom-select">
                                    <option>English</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                 </select>
                              </div>
                           </div>
                        </div>
                        <div className="row ">
                           <div className="col-lg-12">
                              <div className="main-title">
                                 <h6>Category ( you can select upto 6 categories )</h6>
                              </div>
                           </div>
                        </div>
                        <div className="row category-checkbox">
                           {/* <!-- checkbox 1col --> */}
                           <div className="col-lg-2 col-xs-6 col-4">
                              <div className="custom-control custom-checkbox">
                                 <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                 <label className="custom-control-label" htmlFor="customCheck1">Abaft</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                 <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                                 <label className="custom-control-label" htmlFor="customCheck2">Brick</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                 <input type="checkbox" className="custom-control-input" id="customCheck3"/>
                                 <label className="custom-control-label" htmlFor="customCheck3">Purpose</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                 <input type="checkbox" className="custom-control-input" id="customCheck4"/>
                                 <label className="custom-control-label" htmlFor="customCheck4">Shallow</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                 <input type="checkbox" className="custom-control-input" id="customCheck5"/>
                                 <label className="custom-control-label" htmlFor="customCheck5">Spray</label>
                              </div>
                           </div>
                           {/* <!-- checkbox 2col --> */}
                           <div className="col-lg-2 col-xs-6 col-4">
                              <div className="custom-control custom-checkbox">
                                 <input type="checkbox" className="custom-control-input" id="zcustomCheck1"/>
                                 <label className="custom-control-label" htmlFor="zcustomCheck1">Cemetery</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                 <input type="checkbox" className="custom-control-input" id="zcustomCheck2"/>
                                 <label className="custom-control-label" htmlFor="zcustomCheck2">Trouble</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                 <input type="checkbox" className="custom-control-input" id="zcustomCheck3"/>
                                 <label className="custom-control-label" htmlFor="zcustomCheck3">Pin</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                 <input type="checkbox" className="custom-control-input" id="zcustomCheck4"/>
                                 <label className="custom-control-label" htmlFor="zcustomCheck4">Fall</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                 <input type="checkbox" className="custom-control-input" id="zcustomCheck5"/>
                                 <label className="custom-control-label" htmlFor="zcustomCheck5">Leg</label>
                              </div>
                           </div>
                           {/* <!-- checkbox 3col --> */}
                           <div className="col-lg-2 col-xs-6 col-4">
                              <div className="custom-control custom-checkbox">
                                 <input type="checkbox" className="custom-control-input" id="czcustomCheck1"/>
                                 <label className="custom-control-label" htmlFor="czcustomCheck1">Scissors</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                 <input type="checkbox" className="custom-control-input" id="czcustomCheck2"/>
                                 <label className="custom-control-label" htmlFor="czcustomCheck2">Stitch</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                 <input type="checkbox" className="custom-control-input" id="czcustomCheck3"/>
                                 <label className="custom-control-label" htmlFor="czcustomCheck3">Agonizing</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                 <input type="checkbox" className="custom-control-input" id="czcustomCheck4"/>
                                 <label className="custom-control-label" htmlFor="czcustomCheck4">Rescue</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                 <input type="checkbox" className="custom-control-input" id="czcustomCheck5"/>
                                 <label className="custom-control-label" htmlFor="czcustomCheck5">Quiet</label>
                              </div>
                           </div>
                           {/* <!-- checkbox 1col --> */}
                           <div className="col-lg-2 col-xs-6 col-4">
                              <div className="custom-control custom-checkbox">
                                 <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                                 <label className="custom-control-label" htmlFor="customCheck1">Abaft</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                 <input type="checkbox" className="custom-control-input" id="customCheck2"/>
                                 <label className="custom-control-label" htmlFor="customCheck2">Brick</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                 <input type="checkbox" className="custom-control-input" id="customCheck3"/>
                                 <label className="custom-control-label" htmlFor="customCheck3">Purpose</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                 <input type="checkbox" className="custom-control-input" id="customCheck4"/>
                                 <label className="custom-control-label" htmlFor="customCheck4">Shallow</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                 <input type="checkbox" className="custom-control-input" id="customCheck5"/>
                                 <label className="custom-control-label" htmlFor="customCheck5">Spray</label>
                              </div>
                           </div>
                           {/* <!-- checkbox 2col --> */}
                           <div className="col-lg-2 col-xs-6 col-4">
                              <div className="custom-control custom-checkbox">
                                 <input type="checkbox" className="custom-control-input" id="zcustomCheck1"/>
                                 <label className="custom-control-label" htmlFor="zcustomCheck1">Cemetery</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                 <input type="checkbox" className="custom-control-input" id="zcustomCheck2"/>
                                 <label className="custom-control-label" htmlFor="zcustomCheck2">Trouble</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                 <input type="checkbox" className="custom-control-input" id="zcustomCheck3"/>
                                 <label className="custom-control-label" htmlFor="zcustomCheck3">Pin</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                 <input type="checkbox" className="custom-control-input" id="zcustomCheck4"/>
                                 <label className="custom-control-label" htmlFor="zcustomCheck4">Fall</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                 <input type="checkbox" className="custom-control-input" id="zcustomCheck5"/>
                                 <label className="custom-control-label" htmlFor="zcustomCheck5">Leg</label>
                              </div>
                           </div>
                           {/* <!-- checkbox 3col --> */}
                           <div className="col-lg-2 col-xs-6 col-4">
                              <div className="custom-control custom-checkbox">
                                 <input type="checkbox" className="custom-control-input" id="czcustomCheck1"/>
                                 <label className="custom-control-label" htmlFor="czcustomCheck1">Vessel</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                 <input type="checkbox" className="custom-control-input" id="czcustomCheck2"/>
                                 <label className="custom-control-label" htmlFor="czcustomCheck2">Stitch</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                 <input type="checkbox" className="custom-control-input" id="czcustomCheck3"/>
                                 <label className="custom-control-label" htmlFor="czcustomCheck3">Agonizing</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                 <input type="checkbox" className="custom-control-input" id="czcustomCheck4"/>
                                 <label className="custom-control-label" htmlFor="czcustomCheck4">Rescue</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                 <input type="checkbox" className="custom-control-input" id="czcustomCheck5"/>
                                 <label className="custom-control-label" htmlFor="czcustomCheck5">Quiet</label>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="osahan-area text-center mt-3">
                        <button className="btn btn-outline-primary">Save Changes</button>
                     </div>
                     <hr/>
                     <div className="terms text-center">
                        <p className="mb-0">There are many variations of passages of Lorem Ipsum available, but the majority <a href="#">Terms of Service</a> and <a href="#">Community Guidelines</a>.</p>
                        <p className="hidden-xs mb-0">Ipsum is therefore always free from repetition, injected humour, or non</p>
                     </div>
                  </div>
               </div>
            </div>
            {/* <!-- /.container-fluid -->
            <!-- Sticky Footer --> */}
            <footer className="sticky-footer">
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

export default UploadVideo;
