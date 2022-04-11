import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import logoBot from "../img/logo-ptt.png";
import "./pageLayout.css";
import { AiOutlineMore } from "react-icons/ai";

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = props => {
  const isAuthenticated = useIsAuthenticated();
  const [dropDown, setDropDown] = useState(false);

  const handleSetting = e => {
    e.preventDefault();
    setDropDown(!dropDown);
  };

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
            margin: "0px 25px"
          }}
        >
          <div>
            <img src={logoBot} alt="" width="40" height="40" />
          </div>
          <div style={{ color: "white" }}>
            <h4>OGC Smart Chatbot</h4>
          </div>
          <div className="name-singOut">
            <div style={{ color: "white", paddingRight: "15px" }}>
              <h6>Welcome {props.name}</h6>
            </div>
            <div>{isAuthenticated && <SignOutButton />}</div>
          </div>
          <div className="setting" onClick={handleSetting}>
            <AiOutlineMore size={28} />
          </div>
          {dropDown && (
            <div className="dropDown-setting">
              <div style={{ color: "black", zIndex: "21", textAlign: "center" }}>
                <h6 style={{ paddingTop: "10px" }}>Welcome </h6>
                <hr />
                <h6>
                  {props.name.split(" ")[0]} {`${props.name.split(" ")[1][0]}.`}
                </h6>
              </div>
              <div className="bt-signOut">
                {isAuthenticated && <SignOutButton dropDown={dropDown} setDropDown={setDropDown} />}
              </div>
            </div>
          )}
        </div>
      </Navbar>
      {props.children}
    </>
  );
};
