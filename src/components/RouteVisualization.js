// src/components/RouteVisualization.js
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';

function RouteVisualization({ route, markers }) {
  return (
    <MapContainer>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Polyline positions={route} />
      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position}>
          <Popup>{marker.tollInfo}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
