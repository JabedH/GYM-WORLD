import React from "react";
import Photo from "../../Photo/Photo";
import Carosl from "../Carosl/Carosl";
import Services from "../Services/Services";
import Trainers from "../Trainers/Trainers";

const Home = () => {
  return (
    <div>
      <Carosl />
      <Services />
      <Trainers />
      <Photo />
    </div>
  );
};

export default Home;
