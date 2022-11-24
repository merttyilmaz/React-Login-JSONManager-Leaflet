import { useQuery } from "react-query";

import DeviceJSON from "@/assets/data/data.json";
import { Device } from "@/utils/typings";

export const useGetDevices = () => {
  return useQuery<Device[], Error>("devices", () => {
    return DeviceJSON;
  });
};
