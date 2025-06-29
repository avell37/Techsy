import { useProductFilters } from "../hooks/useProductFilters";
import { ProductFiltersView } from "./ProductFiltersView";

export const ProductFilters = () => {
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

    return (
        <ProductFiltersView
            selectedType={selectedType}
            typeItems={typeItems}
            selectedBrand={selectedBrand}
            brandItems={brandItems}
            isFilterActive={isFilterActive}
            activeFilter={activeFilter}
            handleResetFilters={handleResetFilters}
            handleFilterChange={handleFilterChange}
        />
    );
};