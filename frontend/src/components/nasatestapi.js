import React, { useEffect } from "react";
import axios from "axios";

const NASA_API_URL =
  "https://eonet.gsfc.nasa.gov/api/v2.1/events?api_key=F1N1giWtnQlp1x20oByh7kYL8xc6RFo9L3xIKfkS";

const FetchNASAData = () => {
  useEffect(() => {
    axios
      .get(NASA_API_URL)
      .then((response) => {
        console.log("NASA API Response:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching data from NASA API:", error);
      });
  }, []);

  return <div>Check the console for NASA API response.</div>;
};

export default FetchNASAData;
