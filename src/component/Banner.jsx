import React from "react";
import "../food.css";

export default function Banner() {
  return (
  <div class="banner-section-bg-container d-flex justify-content-center flex-column">
      <div class="text-center">
        <h1 class="banner-heading mb-3">Get Delicious Food Anytime</h1>
        <p class="banner-caption mb-4">Eat Smart & Healthy</p>
        <button class="custom-button">View Menu</button>
        <button class="custom-outline-button">Order Now</button>
      </div>
    </div>
  );
}
