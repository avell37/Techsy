import { brandSelector, typeSelector } from "@/entities";
import { useActions, useAppSelector, useNotification } from "@/shared/hooks";
import { filtersDropdownItems } from "../lib/filtersDropdownItems";
import { useState, useCallback } from "react";

export const useProductFilters = () => {
    const types = useAppSelector(typeSelector.types);
    const selectedType = useAppSelector(typeSelector.selectedType);
    const brands = useAppSelector(brandSelector.brands);
    const selectedBrand = useAppSelector(brandSelector.selectedBrand)
    const { setSelectedBrand, setSelectedType, setSortType } = useActions();
    const [activeFilter, setActiveFilter] = useState<'priceHigh' | 'priceLow' | 'rating' | null>(null);
    const { notifySuccess } = useNotification();

    const isFilterActive =
        selectedBrand.name !== "Бренд" || selectedType.name !== "Тип" || activeFilter !== null;

    const handleTypeSelect = (id: string, name: string) => {
        setSelectedType({ id, name });
    };

    const handleBrandSelect = (id: string, name: string) => {
        setSelectedBrand({ id, name });
    };

    const handleResetFilters = useCallback(() => {
        setSelectedBrand({ id: "", name: "Бренд" })
        setSelectedType({ id: "", name: "Тип" });
        setSortType(null);
        setActiveFilter(null);
        notifySuccess("Фильтры сброшены");
    }, [notifySuccess]);

    const typeItems = filtersDropdownItems({
        list: types,
        onSelect: handleTypeSelect,
    });

    const brandItems = filtersDropdownItems({
        list: brands,
        onSelect: handleBrandSelect,
    });

    const handleFilterChange = useCallback((filterType: 'priceHigh' | 'priceLow' | 'rating') => {
        if (activeFilter === filterType) {
            setActiveFilter(null);
            setSortType(null);
            return;
        }

        setActiveFilter(filterType);

        switch (filterType) {
            case 'priceHigh':
                setSortType('price-dec');
                break;
            case 'priceLow':
                setSortType('price-inc');
                break;
            case 'rating':
                setSortType('rating');
                break;
        }
    }, [activeFilter]);

    return {
        isFilterActive,
        selectedType,
        selectedBrand,
        typeItems,
        brandItems,
        activeFilter,
        handleTypeSelect,
        handleBrandSelect,
        handleResetFilters,
        handleFilterChange
    };
};