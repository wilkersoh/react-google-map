import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";

const JSON = {};

const Map = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 1.486925, lng: 103.388962 }}>
      <Marker
        onClick={() =>
          setSelectedPlace({
            name: "I am web developer",
            details: "say hi to me",
          })
        } // can insert object || true
        position={{ lat: 1.4802729364769138, lng: 103.38727170083912 }}
        icon={
          {
            // url: "/someimage.svg",
            // scaledSize: new window.google.maps.Size(25, 25)
          }
        }
      />
      {selectedPlace && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedPlace(null);
          }}
          position={{ lat: 1.4802729364769138, lng: 103.38727170083912 }}>
          <div>
            <h4>{selectedPlace.name}</h4>
            <p>{selectedPlace.details}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
        loadingElement={<div style={{ height: "100%" }}></div>}
        containerElement={<div style={{ height: "100%" }}></div>}
        mapElement={<div style={{ height: "100%" }}></div>}
      />
    </div>
  );
}

export default App;
