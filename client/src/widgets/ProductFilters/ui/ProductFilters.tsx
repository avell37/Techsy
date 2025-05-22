import { Dropdown, Button } from "@/shared/ui";
import { filtersDropdownItems } from "@widgets/ProductFilters";
import { ArrowDown } from "@/shared/assets";
import {
    useAppDispatch,
    useNotification,
    useAppSelector,
} from "@/shared/hooks";
import { setSelectedBrand } from "@/entities/Brand";
import { setSelectedType } from "@/entities/Type";

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
        <div className="border-r-1 border-[#5120B8]/30 w-[250px] h-full">
            <div className="sticky top-30 flex flex-col justify-center items-center gap-[10px] mt-[20px]">
                <Dropdown
                    trigger={
                        <Button
                            text={selectedType.name}
                            className="w-[175px] h-[40px] text-center text-white rounded-md border-1 border-[#5120B8]/30 hover:border-[#5120B8] hover:bg-[#1A1238]/30 focus:border-[#4F45E4] transition"
                        >
                            <ArrowDown
                                width="20px"
                                height="20px"
                                className="absolute top-[10px] right-1"
                            />
                        </Button>
                    }
                    items={typeItems}
                />
                <Dropdown
                    trigger={
                        <Button
                            text={selectedBrand.name}
                            className="w-[175px] h-[40px] text-center text-white rounded-md border-1 border-[#5120B8]/30 hover:border-[#5120B8] hover:bg-[#1A1238]/30 focus:border-[#4F45E4] transition"
                        >
                            <ArrowDown
                                width="20px"
                                height="20px"
                                className="absolute top-[10px] right-1"
                            />
                        </Button>
                    }
                    items={brandItems}
                />
                {isFilterActive && (
                    <Button
                        className="w-[175px] h-[40px] text-center text-white rounded-md border-1 border-[#5120B8]/30 hover:border-[#5120B8] hover:bg-[#1A1238]/30 transition"
                        text="Сбросить всё"
                        onClick={handleResetFilters}
                    />
                )}
            </div>
        </div>
    );
};
