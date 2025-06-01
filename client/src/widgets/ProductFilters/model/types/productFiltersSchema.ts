import { IDropdownItem } from "@/shared/types/IDropdownItem";

export interface ProductFiltersSchema {
    selectedBrand: {
        id: string,
        name: string
    },
    selectedType: {
        id: string,
        name: string
    },
    brandItems: IDropdownItem[],
    typeItems: IDropdownItem[],
    isFilterActive: boolean,
    handleResetFilters: () => void;
}