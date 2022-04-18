import React from "react";
import "./Photo.css";
import img1 from "../../img/Photo/gallery1.jpg";
import img2 from "../../img/Photo/gallery2.jpg";
import img3 from "../../img/Photo/gallery3.jpg";
import img4 from "../../img/Photo/gallery4.jpg";
import img5 from "../../img/Photo/gallery5.jpg";
import img6 from "../../img/Photo/gallery6.jpg";

const Photo = () => {
  return (
    <div>
      <h1 className="text-center mt-5 ">Phot Gallery</h1>
      <div className="line mb-5"></div>
      <div className="photo container">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
        <img src={img4} alt="" />
        <img src={img5} alt="" />
        <img src={img6} alt="" />
      </div>
    </div>
  );
};

export default Photo;
