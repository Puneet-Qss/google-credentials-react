import React, { useState } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import "./App.css";
import Home from "./Home";

function App() {
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (credentialResponse) => {
    const details = jwt_decode(credentialResponse.credential);
    console.log("Details", details);
    console.log(credentialResponse);

    // Save the user details in state
    setUser({
      name: details.name,
      email: details.email,
      // Add any other relevant user information from the decoded JWT
    });
  };

  const handleLoginError = () => {
    console.log("Login Failed");
  };

  const handleLogout = () => {
    // Clear the user state when logging out
    setUser(null);
  };

  return (
    <div className="App">
      <GoogleOAuthProvider clientId="795438949240-o0uq03tvqjsg8eb2rksma787bod1hr3k.apps.googleusercontent.com">
        {user ? (
          // Render the Home component when the user is signed in
          <Home user={user} onLogout={handleLogout} />
        ) : (
          // Render the GoogleLogin component when the user is not signed in
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginError}
          />
        )}
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
