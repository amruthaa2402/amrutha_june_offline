import React from "react";
import "../food.css";

export default function Footer() {
  return (
    <div class="footer-section pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 text-center">
            <img
              src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/food-munch-logo-light.png"
              class="food-munch-logo"
            />
            <h1 class="footer-section-mail-id">orderfood@foodmunch.com</h1>
            <p class="footer-section-address">
              123 Ayur Vigyan Nagar, New Delhi, India.
            </p>
          </div>
        </div>
      </div>
    </div>
    
  );
}
