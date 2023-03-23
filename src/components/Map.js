import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export const Map = ({ results }) => {
  return (
    <div className="map-block">
      <div className="results-block">
        <div className="block">
          <p>IP ADDRESS</p>
          <h2>{results?.ip}</h2>
        </div>

        <div className="block">
          <p>LOCATION</p>
          <h2>
            {results?.location.city} {results?.location?.country}
          </h2>
        </div>

        <div className="block">
          <p>TIMEZONE</p>
          <h2>{results?.location?.timezone}</h2>
        </div>

        <div className="block">
          <p>ISP</p>
          <h2>{results?.isp}</h2>
        </div>
      </div>

      <MapContainer
        center={[results?.location?.lat, results?.location?.lng]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[results?.location?.lat, results?.location?.lng]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
