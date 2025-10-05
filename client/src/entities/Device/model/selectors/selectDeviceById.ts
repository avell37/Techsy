import { RootState } from "@/app/providers/store/store";

export const selectDeviceById = (id: string | undefined) => (state: RootState) => 
    state.deviceReducer.devices.find(device => device.id === id);
