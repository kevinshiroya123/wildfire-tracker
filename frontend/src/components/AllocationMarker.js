import React from 'react';
import { Marker } from '@react-google-maps/api';
import fireAlertIcon from '@iconify-icons/mdi/fire-alert';

const AllocationMarker = ({ position,onClick  }) => {
  // Modify the SVG body to ensure paths are red
  const iconBody = fireAlertIcon.body.replace(/fill="[^"]*"/g, 'fill="red"');

  // Generate the SVG as a data URL with updated color
  const iconUrl = `data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="${fireAlertIcon.viewBox}" width="40" height="40">${iconBody}</svg>`;

  return (
    <Marker
      position={position}
      onClick={onClick} // Trigger event on marker click
      icon={{
        url: iconUrl,
        scaledSize: new window.google.maps.Size(40, 40),
      }}
    />
  );
};

export default AllocationMarker;
