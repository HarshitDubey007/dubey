import React from 'react'

export default function Header() {
    return (
        <>
        
            <header class="fixed-top header-anim">
        <div class="top-bar-stripe">
            <div class="container px-md-0">
                <div class="row align-items-center">
                    <div class="col-lg-auto col-sm-12">
                        <div class="top-icons">
                            <span><i class="fa fa-map-marker"></i> 4998 Elk Creek Road Canton GA 30114</span>
                            <span><a href="mailto:info@weddingdir.com"><i class="fa fa-envelope"></i> info@weddingdir.com</a></span>
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg">
                        <div class="social-icons">
                            {/* <ul class="list-unstyled">
                                <li><a href="javascript:"><i class="fa fa-facebook-f"></i></a></li>
                                <li><a href="javascript:"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="javascript:"><i class="fa fa-instagram"></i></a>
                                <li><a href="javascript:"><i class="fa fa-linkedin"></i></a></li>
                            </ul> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
       
        <nav class="navbar navbar-expand-lg">
            <div class="container text-nowrap bdr-nav px-0">
                <div class="d-flex mr-auto">
                    <a class="navbar-brand" href="index.html">
                        <img src="assets/images/logo_dark.svg" alt=""/>
                    </a>
                </div>
               
                <span class="order-lg-last d-inline-flex ml-3">
                    <a class="btn btn-primary" href="#" role="button" data-toggle="modal" data-target="#login_form"> Get Started Now</a>
                </span>
                
                <button class="navbar-toggler x collapsed" type="button" data-toggle="collapse"
                    data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                
    
                <div class="collapse navbar-collapse" id="navbarCollapse" data-hover="dropdown"
                    data-animations="slideInUp slideInUp slideInUp slideInUp">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle-mob" href="index.html" id="dropdown03" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">Home <i class="fa fa-chevron-down"></i></a>
                            <ul class="dropdown-menu dropdownhover-bottom" aria-labelledby="dropdown03">
                                <li><a class="dropdown-item" href="index.html">Home page 1</a></li>
                                <li><a class="dropdown-item" href="index-2.html">Home page 2</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle-mob" href="index.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages <i class="fa fa-chevron-down"></i></a>
                            <ul class="dropdown-menu dropdownhover-bottom">                                
                                <li><a class="dropdown-item" href="about-us.html">About Us</a></li>                                
                                <li><a class="dropdown-item" href="pricing.html">Pricing Table</a></li>
                                <li><a class="dropdown-item" href="team-page.html">Meet Our Team</a></li>
                                <li><a class="dropdown-item" href="error-404.html">404 Error Page</a></li>
                                <li><a class="dropdown-item" href="faq.html">FAQ's</a></li>
                                <li><a class="dropdown-item" href="typography.html">Typography</a></li>                                
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle-mob" href="index.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Blog <i class="fa fa-chevron-down"></i></a>    
                            <ul class="dropdown-menu dropdownhover-bottom">
                                <li><a class="dropdown-item" href="blog.html">Blog</a></li>
                                <li><a class="dropdown-item" href="blog-details.html">Blog Details</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle-mob" href="index.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Listing <i class="fa fa-chevron-down"></i></a>    
                            <ul class="dropdown-menu dropdownhover-bottom">
                                <li><a class="dropdown-item" href="right-side-map-listing.html">Right Side Map Listing</a></li>
                                <li><a class="dropdown-item" href="search-result-page.html">Search Result Page</a></li>
                                <li><a class="dropdown-item" href="listing-singular.html">Listing Singular</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle-mob" href="index.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Real Wedding <i class="fa fa-chevron-down"></i></a>    
                            <ul class="dropdown-menu dropdownhover-bottom">
                                <li><a class="dropdown-item" href="real-wedding.html">Real Wedding</a></li>
                                <li><a class="dropdown-item" href="real-wedding-details.html">Real Wedding Details</a></li>
                                <li><a class="dropdown-item" href="couple-website.html">Couple Website</a></li>
                            </ul>
                        </li>                        
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle-mob" href="index.html" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">User Panel <i class="fa fa-chevron-down"></i></a>
                            <ul class="dropdown-menu dropdownhover-bottom dropdown-menu-right">
                                <li class="dropdown">
                                    <a class="dropdown-toggle-mob dropdown-item dropdown-toggle-click" href="#" id="navbarDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Couple Dashboard <i class="fa fa-chevron-right"></i></a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a href="couple-dashboard.html">Dashboard</a></li>
                                        <li><a href="couple-dashboard-todo-list.html">Checklist</a></li>
                                        <li><a href="couple-dashboard-vendor-manager.html">Vendor Manager</a></li>
                                        <li><a href="couple-dashboard-guest-manager.html">Guest List</a></li>
                                        <li><a href="couple-dashboard-budget.html">Budget</a></li>
                                        <li><a href="couple-dashboard-realwedding.html">RealWedding</a></li>
                                        <li><a href="javascript:">Seating Chart</a></li>
                                        <li><a href="javascript:">Registry</a></li>
                                        <li><a href="javascript:">Chat</a></li>
                                        <li><a href="couple-dashboard-profile.html">My Profile</a></li>
                                        <li><a href="javascript:">Wedding Website</a></li>            
                                        <li><a href="javascript:">Logout</a></li>
                                    </ul>
                                </li>
                                <li class="dropdown">
                                    <a class="dropdown-toggle-mob dropdown-item dropdown-toggle-click" href="#" id="navbarDropdown_vendor" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Vendor Dashboard <i class="fa fa-chevron-right"></i></a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown_vendor">
                                        <li><a href="vendor-dashboard.html">Dashboard</a></li>
                                        <li><a href="vendor-dashboard-listing.html">My Listing</a></li>
                                        <li><a href="vendor-dashboard-pricing.html">Pricing Table</a></li>
                                        <li><a href="vendor-dashboard-quote.html">Request Quote</a></li>
                                        <li><a href="vendor-dashboard-reviews.html">Reviews</a></li>
                                        <li><a href="vendor-dashboard-invoice.html">Invoice</a></li>
                                        <li><a href="javascript:">Chat</a></li>
                                        <li><a href="vendor-dashboard-profile.html">My Profile</a></li>
                                        <li><a href="javascript:">Logout</a></li>
                                    </ul>
                                </li>                                
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact-us.html">Contact Us</a>
                       </li>
                    </ul>
                 
                </div>
    
    
            </div>
        </nav>
        
    </header> 
        </>
    )
}
