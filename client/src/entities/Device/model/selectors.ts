import { RootState } from "@/app/providers/store/store";

export const selectFilteredDevices = (state: RootState) => {
    const { devices, filters } = state.deviceReducer;
    
    return devices.filter((device) => {
        const searchQuery = filters.search?.toLowerCase() || '';
        const deviceName = device.name?.toLowerCase() || '';
        const matchedSearch = deviceName.includes(searchQuery);

        return matchedSearch;
    })
}