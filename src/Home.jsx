import React from "react";

const Home = ({ user, onLogout }) => {
  const handleLogout = () => {
    // Call the logout function passed from App.js to handle the logout action
    onLogout();
  };

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
      {/* You can display any other information about the user here */}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
