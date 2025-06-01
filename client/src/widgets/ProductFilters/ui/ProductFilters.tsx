import { filtersDropdownItems } from "@widgets/ProductFilters";
import {
    useAppDispatch,
    useNotification,
    useAppSelector,
} from "@/shared/hooks";
import { setSelectedBrand } from "@/entities/Brand";
import { setSelectedType } from "@/entities/Type";
import { ProductFiltersView } from "./ProductFiltersView";

export const ProductFilters = () => {
    const dispatch = useAppDispatch();
    const { notifySuccess } = useNotification();

    const { types, selectedType } = useAppSelector(
        (state) => state.typeReducer
    );
    const { brands, selectedBrand } = useAppSelector(
        (state) => state.brandReducer
    );

    const isFilterActive =
        selectedBrand.name !== "Бренд" || selectedType.name !== "Тип";

    const handleTypeSelect = (id: string, name: string) => {
        dispatch(setSelectedType({ id, name }));
    };

    const handleBrandSelect = (id: string, name: string) => {
        dispatch(setSelectedBrand({ id, name }));
    };

    const handleResetFilters = () => {
        dispatch(setSelectedBrand({ id: "", name: "Бренд" }));
        dispatch(setSelectedType({ id: "", name: "Тип" }));
        notifySuccess("Фильтры сброшены");
    };

    const typeItems = filtersDropdownItems({
        list: types,
        onSelect: handleTypeSelect,
    });

    const brandItems = filtersDropdownItems({
        list: brands,
        onSelect: handleBrandSelect,
    });

    return (
        <ProductFiltersView
            selectedType={selectedType}
            typeItems={typeItems}
            selectedBrand={selectedBrand}
            brandItems={brandItems}
            isFilterActive={isFilterActive}
            handleResetFilters={handleResetFilters}
        />
    );
};
