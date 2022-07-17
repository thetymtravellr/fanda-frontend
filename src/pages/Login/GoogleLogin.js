import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import googleLogo from "../../assets/images/icons/google.png";
import auth from "../../firebase.init";

const GoogleLogin = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  
  return (
    <button
      className="btn-primary border-blue-400  text-blue-400 hover:bg-blue-300 hover:border-blue-500 bg-transparent"
      onClick={() => signInWithGoogle()}
    >
      <img className="w-8" src={googleLogo} alt="" />
    </button>
  );
};

export default GoogleLogin;
