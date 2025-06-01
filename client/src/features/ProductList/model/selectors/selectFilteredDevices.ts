import { RootState } from "@/app/providers/store/store";

export const selectFilteredDevices = (state: RootState) => {
    const { devices } = state.deviceReducer;
    const { selectedBrand } = state.brandReducer;
    const { selectedType } = state.typeReducer; 
    const { sortType, search } = state.sortReducer;
    
    const filtered = devices.filter((device) => {
        const searchQuery = search?.toLowerCase() || '';
        const deviceName = device.name?.toLowerCase() || '';
        const matchedSearch = deviceName.includes(searchQuery);
        
        const matchedBrand = selectedBrand.name !== 'Бренд' ? device.brandId === selectedBrand.id : true;
        const matchedType = selectedType.name !== 'Тип' ? device.typeId === selectedType.id : true;
        return matchedSearch && matchedBrand && matchedType;
    })

    if (sortType === 'price-inc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortType === 'price-dec') {
        filtered.sort((a, b) => b.price - a.price)
    } else if (sortType === 'rating') {
        filtered.sort((a, b) => b.rating - a.rating)
    }

    return filtered;
}