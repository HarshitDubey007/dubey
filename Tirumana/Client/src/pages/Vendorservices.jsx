import React from 'react'

export default function Vendorservices() {
  return (
    <>
        <section class="callout-main">
            <div class="container-fluid pl-0">
                <div class="row">
                    <div class="col-lg-6" style={{background: "url(assets/images/callout_img.jpg) center center no-repeat" , backgroundSize:"cover"}}>
                        <img src="assets/images/callout_img.jpg" class="d-lg-none invisible" alt=""/>                    
                    </div>
                    <div class="col-md-12 col-lg-6">
                        <div class="callout-text">
                            <div class="section-title">
                                <h1>The Best Wedding Vendor Service</h1>                        
                            </div> 
                            <p class="lead">Sed ut perspiciatis unde omnis iste oluptatem accusantium doloremque laud.</p>
                            <a href="contact-us.html" class="btn btn-default btn-rounded btn-lg">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
