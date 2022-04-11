import React from "react";
import { useMsal } from "@azure/msal-react";
import Button from "react-bootstrap/Button";
import "./signOutButton.css";

function handleLogout(instance, props) {
  instance.logoutRedirect().catch(e => {
    console.error(e);
  });
  props.setDropDown(false);
}

/**
 * Renders a button which, when selected, will open a popup for logout
 */
export const SignOutButton = props => {
  const { instance } = useMsal();

  return (
    <>
      <Button
        variant="secondary"
        className={!props.dropDown ? "ml-auto" : "ml-auto-dropDown"}
        onClick={() => handleLogout(instance, props)}
      >
        Sign out
      </Button>
    </>
  );
};
