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



function Blog() {
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
         <div className="container-fluid">
               <section className="blog-page section-padding">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                        <div className="main-title">
                           <div className="btn-group float-right right-action">
                              <a aria-expanded="false" aria-haspopup="true" data-toggle="dropdown" className="right-action-link text-gray" href="#">
                              Sort by <i aria-hidden="true" className="fa fa-caret-down"></i>
                              </a>
                              <div className="dropdown-menu dropdown-menu-right">
                                 <a href="#" className="dropdown-item"><i className="fas fa-fw fa-star"></i> &nbsp; Top Rated</a>
                                 <a href="#" className="dropdown-item"><i className="fas fa-fw fa-signal"></i> &nbsp; Viewed</a>
                                 <a href="#" className="dropdown-item"><i className="fas fa-fw fa-times-circle"></i> &nbsp; Close</a>
                              </div>
                           </div>
                           <h6>Blog</h6>
                        </div>
                     </div>
               <div className="col-md-8">
                  <div className="card blog mb-4">
                     <div className="blog-header">  
                        <a href="#"><img className="card-img-top" src="img/blog/1.png" alt="Card image cap"/></a>
                     </div>
                     <div className="card-body">
                        <h5 className="card-title"><a href="#">Aliquam euismod libero eu enim. Nulla nec felis sed leo.</a></h5>
                        <div className="entry-meta">
                           <ul className="tag-info list-inline">
                              <li className="list-inline-item"><a href="#"><i className="fas fa-calendar"></i>  March 6, 2018</a></li>
                              <li className="list-inline-item"><i className="fas fa-folder"></i> <a rel="category tag" href="#">Image</a></li>
                              <li className="list-inline-item"><i className="fas fa-tag"></i> <a rel="tag" href="#">envato</a>, <a rel="tag" href="#">sale</a>, <a rel="tag" href="#">shop</a> </li>
                              <li className="list-inline-item"><i className="fas fa-comment"></i> <a href="#">4 Comments</a></li>
                           </ul>
                        </div>
                        <p className="card-text">Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo. Aliquam euismod libero eu enim. Nulla nec felis sed leo placerat imperdiet. Aenean suscipit nulla in justo. Suspendisse cursus rutrum augue. Nulla tincidunt tincidunt mi. Lorem ipsum dolor
                        </p>
                        <a href="#">READ MORE <span className="fas fa-chevron-right"></span></a>
                     </div>
                  </div>
                  <div className="card blog mb-4">
                     <div className="blog-header">  
                        <a href="#"><img className="card-img-top" src="img/blog/2.png" alt="Card image cap"/></a>
                     </div>
                     <div className="card-body">
                        <h5 className="card-title"><a href="#">Aliquam euismod libero eu enim. Nulla nec felis sed leo.</a></h5>
                        <div className="entry-meta">
                           <ul className="tag-info list-inline">
                              <li className="list-inline-item"><a href="#"><i className="fas fa-calendar"></i>  March 6, 2018</a></li>
                              <li className="list-inline-item"><i className="fas fa-folder"></i> <a rel="category tag" href="#">Image</a></li>
                              <li className="list-inline-item"><i className="fas fa-tag"></i> <a rel="tag" href="#">envato</a>, <a rel="tag" href="#">sale</a>, <a rel="tag" href="#">shop</a> </li>
                              <li className="list-inline-item"><i className="fas fa-comment"></i> <a href="#">4 Comments</a></li>
                           </ul>
                        </div>
                        <p className="card-text">Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo. Aliquam euismod libero eu enim. Nulla nec felis sed leo placerat imperdiet. Aenean suscipit nulla in justo. Suspendisse cursus rutrum augue. Nulla tincidunt tincidunt mi. Lorem ipsum dolor
                        </p>
                        <a href="#">READ MORE <span className="fas fa-chevron-right"></span></a>
                     </div>
                  </div>
                  <div className="card blog mb-4">
                     <div className="blog-header">  
                        <a href="#"><img className="card-img-top" src="img/blog/3.png" alt="Card image cap"/></a>
                     </div>
                     <div className="card-body">
                        <h5 className="card-title"><a href="#">Aliquam euismod libero eu enim. Nulla nec felis sed leo.</a></h5>
                        <div className="entry-meta">
                           <ul className="tag-info list-inline">
                              <li className="list-inline-item"><a href="#"><i className="fas fa-calendar"></i>  March 6, 2018</a></li>
                              <li className="list-inline-item"><i className="fas fa-folder"></i> <a rel="category tag" href="#">Image</a></li>
                              <li className="list-inline-item"><i className="fas fa-tag"></i> <a rel="tag" href="#">envato</a>, <a rel="tag" href="#">sale</a>, <a rel="tag" href="#">shop</a> </li>
                              <li className="list-inline-item"><i className="fas fa-comment"></i> <a href="#">4 Comments</a></li>
                           </ul>
                        </div>
                        <p className="card-text">Aliquam convallis sollicitudin purus. Praesent aliquam, enim at fermentum mollis, ligula massa adipiscing nisl, ac euismod nibh nisl eu lectus. Fusce vulputate sem at sapien. Vivamus leo. Aliquam euismod libero eu enim. Nulla nec felis sed leo placerat imperdiet. Aenean suscipit nulla in justo. Suspendisse cursus rutrum augue. Nulla tincidunt tincidunt mi. Lorem ipsum dolor
                        </p>
                        <a href="#">READ MORE <span className="fas fa-chevron-right"></span></a>
                     </div>
                  </div>
                  <ul className="pagination justify-content-center mt-4 pagination-sm">
                     <li className="page-item disabled">
                        <span className="page-link">Previous</span>
                     </li>
                     <li className="page-item"><a href="#" className="page-link">1</a></li>
                     <li className="page-item active">
                        <span className="page-link">
                        2
                        <span className="sr-only">(current)</span>
                        </span>
                     </li>
                     <li className="page-item"><a href="#" className="page-link">3</a></li>
                     <li className="page-item">
                        <a href="#" className="page-link">Next</a>
                     </li>
                  </ul>
               </div>
               <div className="col-md-4">
                  <div className="card sidebar-card mb-4">
                     <div className="card-body">
                        <div className="input-group">
                           <input type="text" placeholder="Search For" className="form-control"/>
                           <div className="input-group-append">
                              <button type="button" className="btn btn-secondary">Search <i className="fas fa-arrow-right"></i></button>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="card sidebar-card mb-4">
                     <div className="card-body">
                        <h5 className="card-title mb-3">Categories</h5>
                        <ul className="sidebar-card-list">
                           <li><a href="#"><i className="fas fa-chevron-right"></i> Audio</a></li>
                           <li><a href="#"><i className="fas fa-chevron-right"></i> Gallery</a></li>
                           <li><a href="#"><i className="fas fa-chevron-right"></i> Image</a></li>
                           <li><a href="#"><i className="fas fa-chevron-right"></i> Uncategorized</a></li>
                           <li><a href="#"><i className="fas fa-chevron-right"></i> Video</a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="card sidebar-card mb-4">
                     <div className="card-body">
                        <h5 className="card-title mb-3">Archives</h5>
                        <ul className="sidebar-card-list">
                           <li><a href="#"><i className="fas fa-chevron-right"></i> December, 2017</a></li>
                           <li><a href="#"><i className="fas fa-chevron-right"></i> November, 2017</a></li>
                           <li><a href="#"><i className="fas fa-chevron-right"></i> October, 2017</a></li>
                        </ul>
                     </div>
                  </div>
                  <div className="card sidebar-card mb-4">
                     <div className="card-body">
                        <h5 className="card-title mb-3">Tags</h5>
                        <div className="tagcloud">
                           <a className="tag-cloud-link" href="#">coupon</a>
                           <a className="tag-cloud-link" href="#">deals</a>
                           <a className="tag-cloud-link" href="#">discount</a>
                           <a className="tag-cloud-link" href="#">envato</a>
                           <a className="tag-cloud-link" href="#">gallery</a>
                           <a className="tag-cloud-link" href="#">sale</a>
                           <a className="tag-cloud-link" href="#">shop</a>
                           <a className="tag-cloud-link" href="#">stores</a>
                           <a className="tag-cloud-link" href="#">video</a>
                           <a className="tag-cloud-link" href="#">vimeo</a>
                           <a className="tag-cloud-link" href="#">youtube</a>
                        </div>
                     </div>
                  </div>
                  <div className="card sidebar-card mb-4">
                     <div className="card-body">
                        <h5 className="card-title mb-4">Newsletter</h5>
                        <div className="input-group">
                           <input type="text" placeholder="Your email address" className="form-control"/>
                           <div className="input-group-append">
                              <button type="button" className="btn btn-secondary">Sign up <i className="fas fa-arrow-right"></i></button>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="card sidebar-card mb-4">
                     <div className="card-body">
                        <h5 className="card-title mb-3">Meta</h5>
                        <ul className="sidebar-card-list">
                           <li><a href="#"><i className="fas fa-chevron-right"></i> Log in</a></li>
                           <li><a href="#"><i className="fas fa-chevron-right"></i> Entries RSS</a></li>
                           <li><a href="#"><i className="fas fa-chevron-right"></i> Comments RSS</a></li>
                           <li><a href="#"><i className="fas fa-chevron-right"></i> WordPress.org</a></li>
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
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

export default Blog;
