import React from "react";
import { Link } from "react-router-dom"

import "./style.css";
export default function Card() {
  return (
    <div className="col-lg-3 col-md-3">
      <div className="wedding-listing">
        <div className="img">
          <Link to="listing-singular.html">
            <img src="assets/images/weddings/wedding_listing_1.jpg" alt="" />
          </Link>
          <div className="img-content">
            <div className="top">
              <span className="price">
                <i className="fa fa-tag"></i>
                <span>$500-$800</span>
              </span>
            </div>
            <div className="bottom">
              <Link className="tags" to="javascript:">
                Fashion
              </Link>
              <Link className="favorite" to="javascript:">
                <i className="fa fa-heart-o"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="gap">
            <h3>
              <Link to="listing-singular.html">
                Happy Wedding Fashions{" "}
                <span className="verified">
                  <i className="fa fa-check-circle"></i>
                </span>
              </Link>
            </h3>
            <div>
              <i className="fa fa-map-marker"></i> Surat, Gujrat, India
            </div>
          </div>
          <div className="reviews">
            <span className="stars">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half-o"></i>
              <i className="fa fa-star-o"></i>
            </span>
            (6 review)
          </div>
        </div>
      </div>
    </div>
  );
}
