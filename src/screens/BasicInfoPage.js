// BasicInfoPage.js
import React from 'react';
import { useHistory } from 'react-router-dom';
import saveDataToFile from './DataStorage';

function BasicInfoPage() {
    const history = useHistory();

    const handleSubmit = () => {

      // Save basic information to local storage
      saveDataToFile(/* basic information data */);
      
      // Navigate to the attendance screen
      history.push('/attendance');
    };

  return (

    <div>
      <h1>Enter Your Basic Information</h1>
      <form>
        <label>
          First Name:
          <input type="text" />
        </label>
        <label>
          Last Name:
          <input type="text" />
        </label>
        <label>
          Full Address:
          <input type="text" />
        </label>
        <label>
          Phone Number:
          <input type="tel" />
        </label>
        <label>
          Program Identifier Code:
          <input type="text" />
        </label>
        <button type="submit">Save Information</button>
      </form>
      <button onClick={handleSubmit}>Continue</button>
    </div>
  );
}

export default BasicInfoPage;