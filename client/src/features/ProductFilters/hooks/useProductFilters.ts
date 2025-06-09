import { setSelectedBrand, setSelectedType } from "@/entities";
import { setSortType } from "@/features/FilteredSearch";
import { useAppDispatch, useAppSelector, useNotification } from "@/shared/hooks";
import { filtersDropdownItems } from "../lib/filtersDropdownItems";
import { useState, useCallback } from "react";

export const useProductFilters = () => {
    const dispatch = useAppDispatch();
    const { notifySuccess } = useNotification();
    const [activeFilter, setActiveFilter] = useState<'priceHigh' | 'priceLow' | 'rating' | null>(null);

    const { types, selectedType } = useAppSelector(
        (state) => state.typeReducer
    );
    const { brands, selectedBrand } = useAppSelector(
        (state) => state.brandReducer
    );

    const isFilterActive =
        selectedBrand.name !== "Бренд" || selectedType.name !== "Тип" || activeFilter !== null;

    const handleTypeSelect = (id: string, name: string) => {
        dispatch(setSelectedType({ id, name }));
    };

    const handleBrandSelect = (id: string, name: string) => {
        dispatch(setSelectedBrand({ id, name }));
    };

    const handleResetFilters = useCallback(() => {
        dispatch(setSelectedBrand({ id: "", name: "Бренд" }));
        dispatch(setSelectedType({ id: "", name: "Тип" }));
        dispatch(setSortType(null));
        setActiveFilter(null);
        notifySuccess("Фильтры сброшены");
    }, [dispatch, notifySuccess]);

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
            dispatch(setSortType(null));
            return;
        }

        setActiveFilter(filterType);
        
        switch (filterType) {
            case 'priceHigh':
                dispatch(setSortType('price-dec'));
                break;
            case 'priceLow':
                dispatch(setSortType('price-inc'));
                break;
            case 'rating':
                dispatch(setSortType('rating'));
                break;
        }
    }, [activeFilter, dispatch]);

    return {
        isFilterActive,
        selectedType,
        selectedBrand,
        handleTypeSelect,
        handleBrandSelect,
        handleResetFilters,
        typeItems,
        brandItems,
        handleFilterChange,
        activeFilter
    };
};

// const dispatch = useAppDispatch();
// const [filter, setFilter] = useState("Фильтры");

{/* <Dropdown
                trigger={
                    <Button
                        className="flex justify-center items-center w-[150px] h-[45px] text-white rounded-md border-1 border-[#5120B8]/30 hover:border-[#5120B8] hover:bg-[#1A1238]/30 transition cursor-pointer"
                        text={filter}
                    >
                        <ArrowDown
                            width="20px"
                            height="20px"
                            className="absolute top-3 right-1"
                        />
                    </Button>
                }
                items={dropdownItemsWithFilters({ dispatch, setFilter })}
            /> */}