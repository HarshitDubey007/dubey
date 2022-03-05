import React from "react";
import "./style.css";
export default function Card() {
  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h4 class="text-center">
              {/* <strong>STYLE 1</strong> */}
            </h4>
            {/* <hr /> */}
            <div class="profile-card-2">
              <img
                src="img/Indian_Wedding_Hands_2019_0.jpg"
                class="img img-responsive"
              />
              <div class="profile-name">Taj mahal</div>
              <div class="profile-username">Agra</div>
              <div class="profile-icons">
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa fa-linkedin"></i>
                </a>
              <button class="btn btn-outline-dark">Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
