// OrganizationRegistrationPage.js
import React, {useState} from 'react';

function OrganizationRegistrationPage() {
  // Form logic for organization registration
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [alphanumericID, setAlphanumericID] = useState('');
  
    // Function to handle form submission
    const handleSubmit = async (event) => {
      event.preventDefault();
      // Send username, password, and other registration data to the backend for account creation
      // Example: fetch('/api/register/organization', { method: 'POST', body: JSON.stringify({ username, password, otherData }) });
      const response = await fetch('/api/register/organization', { method: 'POST', body: JSON.stringify({ username, password }) });
      const data = await response.json();
      setAlphanumericID(data.alphanumericID); // Assuming the backend returns the alphanumeric ID after account creation
    };

  return (
    <div>
      <h2>Organization Registration</h2>
      {/* Organization registration form */}
      <form onSubmit={handleSubmit}>
        {/* Organization registration form fields */}
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        {/* Other registration form fields */}
        <button type="submit">Register</button>
      </form>
      {/* Display alphanumeric ID code after successful account creation */}
      {alphanumericID && <p>Your alphanumeric ID code: {alphanumericID}</p>}
    </div>
  );
}


export default OrganizationRegistrationPage;