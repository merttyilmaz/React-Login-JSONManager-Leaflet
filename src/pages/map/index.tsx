import { MapContainer, TileLayer, Marker } from "react-leaflet";
import * as L from "leaflet";

import MarkerImage from "@/assets/images/marker.png";
import "leaflet/dist/leaflet.css";

import { useGetDevices } from "@/hooks/useGetDevices";
import { LatLngExpression } from "leaflet";
import { Device } from "@/utils/typings";
import { useNavigate } from "react-router-dom";

const Map = () => {
  const navigate = useNavigate();
  const { data } = useGetDevices();

  const coordinatesOfTurkey: LatLngExpression = data
    ? [data[0].coordinates.latitude, data[0].coordinates.longitude]
    : [39.92077, 32.85411];

  return (
    <MapContainer center={coordinatesOfTurkey} zoom={7} scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data?.map((device: Device) => (
        <Marker
          key={device.ip}
          position={[device.coordinates.latitude, device.coordinates.longitude]}
          icon={
            new L.Icon({
              iconUrl: MarkerImage,
              iconSize: [35, 35],
            })
          }
          eventHandlers={{
            click: () => {
              navigate(`/devices/${device.name.toLowerCase()}`);
            },
          }}
        />
      ))}
    </MapContainer>
  );
};

export default Map;
