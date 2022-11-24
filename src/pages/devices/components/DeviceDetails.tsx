import { Device } from "@/utils/typings";

type Props = {
  selectedDevice: Device;
};

const DeviceDetails = (props: Props) => {
  return (
    <article className="flex flex-col pt-6 pl-6 text-xl gap-6  w-3/4">
      <p>
        <span className="font-bold">Device Name:</span>{" "}
        {props.selectedDevice.name}
      </p>
      <p>
        <span className="font-bold">Device IP:</span> {props.selectedDevice.ip}
      </p>
      <p>
        <span className="font-bold">Device Latitude:</span>{" "}
        {props.selectedDevice.coordinates.latitude}
      </p>
      <p>
        <span className="font-bold">Device Longitude:</span>{" "}
        {props.selectedDevice.coordinates.longitude}
      </p>
    </article>
  );
};

export default DeviceDetails;
