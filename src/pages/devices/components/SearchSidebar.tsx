import { useNavigate, useParams } from "react-router-dom";

import { Device } from "@/utils/typings";

type Props = {
  searchedDevices?: Device[];
  setQuery: (searchTerm: string) => void;
  setSelectedDevice: (selectedDevice: Device) => void;
};

const Searchbar = (props: Props) => {
  const navigate = useNavigate();
  const params = useParams();

  return (
    <section className="h-full text-white bg-[#393939] w-1/4 pt-4 ">
      <div className="px-2">
        <input
          type="text"
          placeholder="Search devices..."
          className="bg-[#393939] text-white border border-white placeholder:white rounded-lg w-full px-4 py-2"
          onChange={(e) => props.setQuery(e.target.value.toLowerCase())}
        />
      </div>
      <div className="text-center mt-2">
        {props.searchedDevices?.map((device) => (
          <div
            key={device.ip}
            className={`w-full text-xl hover:bg-[#585454] py-4 cursor-pointer ${
              device.name.toLowerCase() === params.device ? "bg-[#585454]" : ""
            }`}
            onClick={() => {
              props.setSelectedDevice(device);
              navigate(`/devices/${device.name.toLowerCase()}`);
            }}
          >
            {device.name} - {device.ip}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Searchbar;
