import React from "react";
import "./Sociallogin.css";
import fb from "../../img/icon/fb.svg";
import github from "../../img/icon/githiub.svg";
import google from "../../img/icon/google.svg";

const Sociallogin = () => {
  return (
    <div className="social-icon">
      <button>
        <img src={fb} alt="" />
      </button>
      <button>
        <img src={github} alt="" />
      </button>
      <button>
        <img src={google} alt="" />
      </button>
    </div>
  );
};

export default Sociallogin;
