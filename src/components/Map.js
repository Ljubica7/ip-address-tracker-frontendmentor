import React from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import { Icon } from "leaflet";

export const Map = ({ results, position }) => {
  console.log(results);

  return (
    <div className="map-block">
      <div className="results-block">
        <div className="block">
          <p>IP ADDRESS</p>
          <h2>192.212.174.101</h2>
        </div>

        <div className="block">
          <p>LOCATION</p>
          <h2>Brooklyn, NY 10001</h2>
        </div>

        <div className="block">
          <p>TIMEZONE</p>
          <h2>UTC-05:00</h2>
        </div>

        <div className="block">
          <p>ISP</p>
          <h2>SpaceX Starlink</h2>
        </div>
      </div>

      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
