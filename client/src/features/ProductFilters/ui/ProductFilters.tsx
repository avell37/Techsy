import { useProductFilters } from "../hooks/useProductFilters";
import { ProductFiltersView } from "./ProductFiltersView";

export const ProductFilters = () => {
    const {
        isFilterActive,
        selectedType,
        selectedBrand,
        handleResetFilters,
        typeItems,
        brandItems,
        handleFilterChange,
        activeFilter,
    } = useProductFilters();
    
    return (
        <ProductFiltersView
            selectedType={selectedType}
            typeItems={typeItems}
            selectedBrand={selectedBrand}
            brandItems={brandItems}
            isFilterActive={isFilterActive}
            handleResetFilters={handleResetFilters}
            handleFilterChange={handleFilterChange}
            activeFilter={activeFilter}
        />
    );
};