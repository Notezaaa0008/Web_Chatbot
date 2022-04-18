export const msalConfig = {
  auth: {
    clientId: "c883c8b0-c0ea-410d-a0a2-498bc4b091d0",
    // "Enter_the_Application_Id_Here"
    authority: "https://login.microsoftonline.com/76160da0-7e67-48b3-a716-85c6497ed5ec", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    //"Enter_the_Cloud_Instance_Id_Here/Enter_the_Tenant_Info_Here"
    redirectUri: "https://localhost:3000"
    //"Enter_the_Redirect_Uri_Here"
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false // Set this to "true" if you are having issues on IE11 or Edge
  }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ["User.Read"]
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
  graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
  //"Enter_the_Graph_Endpoint_Here/v1.0/me"
};
