import React from "react";
import "./signIn.css";
import { SignInButton } from "../SignInButton";
import logoPtt from "../../img/pngegg.png";

const SignIn = () => {
  return (
    <div className="popup-login">
      <div className="popup-inner-login">
        <div>
          <img className="imageLogo" src={logoPtt} alt="" width="225" height="225" />
        </div>
        <div className="popup-header-login">Please sign in to connect with chatbot</div>
        <div>
          <hr />
        </div>
        <div>
          <SignInButton />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
