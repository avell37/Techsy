import { RootState } from "@/app/providers/store/store";
import { createSelector } from "@reduxjs/toolkit";

const selectDevices = (state: RootState) => state.deviceReducer.devices;
const selectSelectedBrand = (state: RootState) => state.brandReducer.selectedBrand;
const selectSelectedType = (state: RootState) => state.typeReducer.selectedType;
const selectSortType = (state: RootState) => state.sortReducer.sortType;
const selectSearch = (state: RootState) => state.sortReducer.search;

export const selectFilteredDevices = createSelector(
    [selectDevices, selectSelectedBrand, selectSelectedType,
        selectSortType, selectSearch],
    (devices = [], selectedBrand, selectedType, sortType, search) => {
        const searchQuery = search?.toLowerCase() || '';

        let filtered = devices.filter((device) => {
            const matchedSearch = device.name?.toLowerCase().includes(searchQuery);
            const matchedBrand = selectedBrand.name !== 'Бренд' ?
                device.brandId === selectedBrand.id : true;
            const matchedType = selectedType.name !== 'Тип' ?
                device.typeId === selectedType.id : true;
            return matchedSearch && matchedBrand && matchedType;
        })

        switch (sortType) {
            case 'price-inc':
                filtered = [...filtered].sort((a, b) => a.price - b.price);
                break;
            case 'price-dec':
                filtered = [...filtered].sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filtered = [...filtered].sort((a, b) => b.rating - a.rating);
                break;
        }


        return filtered;
    }
)