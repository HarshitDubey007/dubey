import React from "react";

export default function Slider() {
  return (
    <>
      <div className="slider-wrap">
        <div className="owl-carousel owl-theme" id="slider-home">
          <div className="item">
            <div className="home-slider">
              <img src="assets/images/slider/slider_img_1.jpg" alt="" />
            </div>
          </div>

          <div className="item">
            <div className="home-slider">
              <img src="assets/images/slider/slider_img_2.jpg" alt="" />
            </div>
          </div>
        </div>

        <div className="slider-content">
          <div className="container">
            <div className="row">
              <div className="col-xl-9 col-lg-12 mx-auto">
                <h1>Find the Perfect Wedding Vendor</h1>
                <p className="lead txt-white text-center">
                  Search over 360,000 wedding vendors with reviews, pricing,
                  availability and more
                </p>
                <div className="slider-form rounded">
                  <div className="row no-gutters align-items-center">
                    <div className="col-12 col-md-5">
                      <select
                        className="form-light-select theme-combo home-select-1"
                        name="state"
                      >
                        <option>Choose Vendor Type</option>
                        <option value="AL">Vendor Type 1</option>
                        <option value="WY">Vendor Type 2</option>
                        <option value="WY">Vendor Type 3</option>
                        <option value="WY">Vendor Type 4</option>
                        <option value="WY">Vendor Type 5</option>
                      </select>
                    </div>
                    <div className="col-12 col-md-5 left-border">
                      <select
                        className="form-light-select theme-combo home-select-2"
                        name="state"
                      >
                        <option>Choose Location</option>
                        <option value="AL">Mumbai</option>
                        <option value="WY">Goa</option>
                        <option value="WY">Surat</option>
                        <option value="WY">Delhi</option>
                        <option value="WY">Baroda</option>
                      </select>
                    </div>
                    <div className="col-12 col-md-2">
                      <a
                        href="right-side-map-listing.html"
                        className="btn btn-default text-nowrap btn-block"
                      >
                        Search Now
                      </a>
                    </div>
                  </div>
                </div>
                <p className="lead txt-white text-center">
                  Or browse featured categories
                </p>
                <div className="slider-category">
                  <a href="javascript:">
                    <i className="weddingdir_camera_alt"></i> Photography
                  </a>
                  <a href="javascript:">
                    <i className="weddingdir_cup_cakes"></i> Cakes
                  </a>
                  <a href="javascript:">
                    <i className="weddingdir_fashion"></i> Fashion
                  </a>
                  <a href="javascript:">
                    <i className="weddingdir_music"></i> Music
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
