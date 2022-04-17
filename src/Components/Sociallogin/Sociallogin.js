import React from "react";
import "./Sociallogin.css";
import fb from "../../img/icon/fb.svg";
import github from "../../img/icon/githiub.svg";
import google from "../../img/icon/google.svg";
import auth from "../../firebase.init";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";

const Sociallogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const [signInWithFacebook, user2, loading2, error2] =
    useSignInWithFacebook(auth);

  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  if (user || user1 || user2) {
    navigate(from, { replace: true });
  }
  return (
    <div className="social-icon">
      <button onClick={() => signInWithGoogle()}>
        <img src={google} alt="" />
      </button>
      <button onClick={() => signInWithFacebook()}>
        <img src={fb} alt="" />
      </button>
      <button onClick={() => signInWithGithub()}>
        <img src={github} alt="" />
      </button>
    </div>
  );
};

export default Sociallogin;
