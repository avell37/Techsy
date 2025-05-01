import { RootState } from "@/app/providers/store/store";

export const selectFilteredDevices = (state: RootState) => {
    const { devices, search } = state.deviceReducer;
    const { selectedBrand } = state.brandReducer;
    const { selectedType } = state.typeReducer; 
    
    return devices.filter((device) => {
        const searchQuery = search?.toLowerCase() || '';
        const deviceName = device.name?.toLowerCase() || '';
        const matchedSearch = deviceName.includes(searchQuery);
        
        const matchedBrand = selectedBrand.name !== 'Бренд' ? device.brandId === selectedBrand.id : true;
        const matchedType = selectedType.name !== 'Тип' ? device.typeId === selectedType.id : true;
        return matchedSearch && matchedBrand && matchedType;
    })
}