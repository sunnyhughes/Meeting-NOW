// HomePage.js
import React from 'react';
import logo from '.logo.png'; // Replace 'logo.png' with the path to youur logo file
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div>
        {/* Logo */}
        <img src={logo} alt="Logo" style={{ width: '100px', height: '100px' }} />

        {/* Welcome message */}
      <h1>Welcome to Your App</h1>
      <p>We're excited to have you here! Sign in to access your account and start using our services.</p>

      {/* Signin area */}
      <div>
        <h2>Sign In</h2>
        {/* Add your sign-in form or component here */}

      {/* Registration Link */}
      <p>First time using the app? <Link to="/register">Click here to begin registration</Link></p>
      {/* Add any additional content or components as needed */}
    </div>

  {/* Company Name */}
  <footer>
    <p>&copy; Your Company Name</p>
  </footer>
  </div>
  );
}

export default HomePage;