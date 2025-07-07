import React from "react";
import "../food.css";


export default function HealthyFood() {
  return (
        <div class="healthy-food-section pt-5 pb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-5">
            <div class="text-center">
              <img
                src="https://d2clawv67efefq.cloudfront.net/ccbp-responsive-website/healthy-food-plate-img.png"
                class="healthy-food-section-img"
              />
            </div>
          </div>
          <div class="col-12 col-md-7">
            <h1 class="healthy-food-section-heading">
              Fresh, Healthy, Organic, Delicious Fruits
            </h1>
            <p class="healthy-food-section-description">
              Say no to harmful chemicals and go fully organic with our range of
              fresh fruits and veggies. Pamper your body and your senses with
              the true and unadulterated gifts from mother nature. with the true
              and unadulterated gifts from mother nature.
            </p>
            <button class="custom-button">Watch Video</button>
          </div>
        </div>
      </div>
    </div>
  );
}
