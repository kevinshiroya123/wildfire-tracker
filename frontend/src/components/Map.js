import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import axios from 'axios';
import AllocationMarker from './AllocationMarker';
import LocationInfo from './LocationInfo';
import Loader from './Loader';
import Header from './Header';
import './Map.css';

const center = {
  lat: 37.7749,
  lng: -122.4194,
};

const Map = () => {
  const [fireLocations, setFireLocations] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    const fetchFireData = async () => {
      try {
        const response = await axios.get(
          `https://eonet.gsfc.nasa.gov/api/v2.1/events?api_key=${process.env.REACT_APP_NASA_API_KEY}`
        );

        const fires = response.data.events.filter(
          (event) => event.categories.some((cat) => cat.title === 'Wildfires')
        );

        const locations = fires.map((fire) => ({
          id: fire.id,
          title: fire.title,
          description: fire.description,
          link: fire.link,
          position: {
            lat: fire.geometries[0].coordinates[1],
            lng: fire.geometries[0].coordinates[0],
          },
        }));

        setFireLocations(locations);
      } catch (error) {
        console.error('Error fetching fire data:', error);
      } finally {
        setLoading(false); // Stop the loader once data is fetched
      }
    };

    fetchFireData();
  }, []);

  const mapOptions = {
    disableDefaultUI: true, // Disable all default UI
    zoomControl: true, // Enable zoom control only
  };

  return (
    <>
      <Header />
      <div className="map-container">
        {loading && <Loader />} {/* Show loader while loading */}
        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={center}
            zoom={5}
            options={mapOptions} // Pass map options here
          >
            {fireLocations.map((location) => (
              <AllocationMarker
                key={location.id}
                position={location.position}
                onClick={() => setSelectedEvent(location)}
              />
            ))}
          </GoogleMap>
        </LoadScript>
        {selectedEvent && (
          <div className="info-box">
            <LocationInfo info={selectedEvent} onClose={() => setSelectedEvent(null)} />
          </div>
        )}
      </div>
    </>
  );
};

export default Map;
