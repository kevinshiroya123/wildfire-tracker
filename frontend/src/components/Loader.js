import React from 'react';
import './Loader.css'; // Import the CSS file for styling

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;
