import React from 'react';
import './LocationInfo.css'; // Import CSS styles

const LocationInfo = ({ info, onClose }) => {
  return (
    <div className="location-info">
      <div className="location-info-header">
        <h2>Event Information</h2>
        <button className="close-btn" onClick={onClose}>
          &times; {/* Unicode for the "X" sign */}
        </button>
      </div>
      <p><strong>Title:</strong> {info.title}</p>
      <p><strong>Description:</strong> {info.description || "No description available"}</p>
    </div>
  );
};

export default LocationInfo;
