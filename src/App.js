import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { PageLayout } from "./components/PageLayout";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import Button from "react-bootstrap/Button";
import { callMsGraph } from "./graph";
import { ChatBot } from "./components/ChatBot";
import SignIn from "./components/SignInComponent/SignIn";

function ProfileContent() {
  const { instance, accounts } = useMsal();
  const [graphData, setGraphData] = useState(null);

  const name = accounts[0] && accounts[0].name;

  function RequestProfileData() {
    const request = {
      ...loginRequest,
      account: accounts[0]
    };

    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    instance
      .acquireTokenSilent(request)
      .then(response => {
        callMsGraph(response.accessToken).then(response => setGraphData(response));
      })
      .catch(e => {
        instance.acquireTokenPopup(request).then(response => {
          callMsGraph(response.accessToken).then(response => setGraphData(response));
        });
      });
  }

  return <>{graphData ? <ChatBot graphData={graphData} /> : RequestProfileData()}</>;
}

function App() {
  const { accounts } = useMsal();
  const name = accounts[0] && accounts[0].name;
  return (
    <PageLayout name={name}>
      <AuthenticatedTemplate>
        <ProfileContent />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <SignIn />
      </UnauthenticatedTemplate>
    </PageLayout>
  );
}

export default App;
