import { FilteredSearchView } from "./FilteredSearchView";
import { useCallback, useState } from "react";
import { useActions } from "@/shared/hooks";
import { useProductFilters } from "@/features/ProductFilters/hooks/useProductFilters";

export const FilteredSearch = () => {
    const { setSearchFilter } = useActions();
    const {
        isFilterActive,
        selectedType,
        selectedBrand,
        typeItems,
        brandItems,
        activeFilter,
        handleResetFilters,
        handleFilterChange,
    } = useProductFilters();

    const [value, setValue] = useState("");

    const onChangeFilters = useCallback((value: string) => {
        setValue(value);
        setSearchFilter(value);
    }, []);

    return <FilteredSearchView
        value={value}
        onChange={onChangeFilters}
        isFilterActive={isFilterActive}
        selectedType={selectedType}
        selectedBrand={selectedBrand}
        typeItems={typeItems}
        brandItems={brandItems}
        activeFilter={activeFilter}
        handleResetFilters={handleResetFilters}
        handleFilterChange={handleFilterChange}
    />;
};
