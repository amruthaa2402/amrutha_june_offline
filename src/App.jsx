import React from "react";
import Navbar from "./component/Navbar";
import Banner from "./component/Banner";
import WhyChooseUs from "./component/WhyChooseUs";
import ExploreMenu from "./component/ExploreMenu";
import HealthyFood from "./component/HealthyFood";
import DeliveryPayment from "./component/DeliveryPayment";
import ThankingCustomers from "./component/ThankingCustomers";
import FollowUs from "./component/FollowUs";
import Footer from "./component/Footer";
import "./food.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <WhyChooseUs />
      <ExploreMenu />
      <HealthyFood />
      <DeliveryPayment />
      <ThankingCustomers />
      <FollowUs />
      <Footer />
    </>
  );
}
