import React from 'react'

export default function Slider() {
    return (
        <>
            <section class="slider-wrap">
        <div class="owl-carousel owl-theme" id="slider-home">                        
          
            <div class="item">
                <div class="home-slider">
                    <img src="assets/images/slider/slider_img_1.jpg" alt=""/>
                </div>
            </div>
           
           
            <div class="item">
                <div class="home-slider">
                    <img src="assets/images/slider/slider_img_2.jpg" alt=""/>
                </div>
            </div>
            
        </div>

        <div class="slider-content">
            <div class="container">
                <div class="row">
                    <div class="col-xl-9 col-lg-12 mx-auto">
                        <h1>Find the Perfect Wedding Vendor</h1>
                        <p class="lead txt-white text-center">Search over 360,000 wedding vendors with reviews, pricing, availability and more</p>
                        <div class="slider-form rounded">
                            <div class="row no-gutters align-items-center">
                                <div class="col-12 col-md-5">
                                    <select class="form-light-select theme-combo home-select-1" name="state">
                                        <option>Choose Vendor Type</option>
                                        <option value="AL">Vendor Type 1</option>
                                        <option value="WY">Vendor Type 2</option>
                                        <option value="WY">Vendor Type 3</option>
                                        <option value="WY">Vendor Type 4</option>
                                        <option value="WY">Vendor Type 5</option>
                                    </select>
                                </div>
                                <div class="col-12 col-md-5 left-border">
                                    <select class="form-light-select theme-combo home-select-2" name="state">
                                        <option>Choose Location</option>
                                        <option value="AL">Mumbai</option>
                                        <option value="WY">Goa</option>
                                        <option value="WY">Surat</option>
                                        <option value="WY">Delhi</option>
                                        <option value="WY">Baroda</option>
                                    </select>
                                </div>
                                <div class="col-12 col-md-2">
                                    <a href="right-side-map-listing.html" class="btn btn-default text-nowrap btn-block" >Search Now</a>
                                </div>
                            </div>
                        </div>
                        <p class="lead txt-white text-center">Or browse featured categories</p>
                        <div class="slider-category">
                            <a href="javascript:"><i class="weddingdir_camera_alt"></i> Photography</a>
                            <a href="javascript:"><i class="weddingdir_cup_cakes"></i> Cakes</a>
                            <a href="javascript:"><i class="weddingdir_fashion"></i> Fashion</a>
                            <a href="javascript:"><i class="weddingdir_music"></i> Music</a>
                        </div>
                    </div>
                </div>           
            </div>
            
        </div>
    </section> 
        </>
    )
}
