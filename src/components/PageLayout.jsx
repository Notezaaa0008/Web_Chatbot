import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./SignOutButton";
import logoBot from "../img/logo-ptt.png";

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = props => {
  const isAuthenticated = useIsAuthenticated();

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
            <h4>BOT PTT</h4>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={{ color: "white", paddingRight: "15px" }}>
              <h6>Welcome {props.name}</h6>
            </div>
            <div>{isAuthenticated && <SignOutButton />}</div>
          </div>
        </div>
      </Navbar>
      {props.children}
    </>
  );
};
