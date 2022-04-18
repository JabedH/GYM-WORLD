import React from "react";
import Photo from "../../Photo/Photo";
import Reviews from "../../Home/Reviews/Reviews";
import Carosl from "../Carosl/Carosl";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Carosl />
      <Services />
      <Photo />
      <Reviews />
    </div>
  );
};

export default Home;
