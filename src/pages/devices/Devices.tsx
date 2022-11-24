import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useGetDevices } from "@/hooks/useGetDevices";
import Searchbar from "./components/SearchSidebar";
import { Device } from "@/utils/typings";
import DeviceDetails from "./components/DeviceDetails";
import Loading from "@/common/components/loading";

const Devices = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDevice, setSelectedDevice] = useState<Device>({
    name: "",
    ip: "",
    coordinates: {
      latitude: 0,
      longitude: 0,
    },
  });

  let { device } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useGetDevices();

  useEffect(() => {
    if (selectedDevice.name === "" && device && data) {
      const findDeviceFromUrl = data?.find(
        (devices: Device) => devices.name.toLowerCase() === device
      );

      if (findDeviceFromUrl === undefined) {
        navigate("/devices");
        return;
      }

      setSelectedDevice(findDeviceFromUrl!);
    }
  }, [device, data]);

  const search = data?.filter(
    (device: Device) =>
      device.name.toLowerCase().includes(searchTerm) ||
      device.ip.toLowerCase().includes(searchTerm)
  );

  const searchedDevices = searchTerm ? search : data;

  return (
    <div className="h-full">
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <div className="text-center text-2xl text-white">
          Error fetching devices
        </div>
      ) : (
        <div className="flex h-full w-full">
          <Searchbar
            searchedDevices={searchedDevices}
            setSearchTerm={setSearchTerm}
            setSelectedDevice={setSelectedDevice}
          />
          {selectedDevice?.name?.length !== 0 && (
            <DeviceDetails selectedDevice={selectedDevice} />
          )}
        </div>
      )}
    </div>
  );
};

export default Devices;
