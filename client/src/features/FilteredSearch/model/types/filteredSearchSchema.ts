import { IDropdownItem } from "@/shared/types";

export interface FilteredSearchSchema {
    value: string,
    onChange: (value: string) => void,
    activeFilter: 'priceHigh' | 'priceLow' | 'rating' | null;
    selectedBrand: {
        id: string;
        name: string;
    };
    selectedType: {
        id: string;
        name: string;
    };
    brandItems: IDropdownItem[];
    typeItems: IDropdownItem[];
    isFilterActive: boolean;
    handleResetFilters: () => void;
    handleFilterChange: (filterType: 'priceHigh' | 'priceLow' | 'rating') => void;
}