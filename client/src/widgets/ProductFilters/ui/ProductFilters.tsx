import { useAppSelector } from "@/shared/types/useAppSelector";
import { Dropdown } from "@/shared/ui/Dropdown/Dropdown";
import { Button } from "@/shared/ui/Button/Button";
import { filtersDropdownItems } from "@shared/model/filtersDropdownItems";
import { ArrowDown } from "@/shared/assets/ArrowDown";

export const ProductFilters = () => {
    const typeFilters = useAppSelector((state) => state.typeReducer.types);
    const brandFilters = useAppSelector((state) => state.brandReducer.brands);

    const handleTypeSelect = (id: string, name: string) => {
        console.log(`Выбран тип: ${name}`);
    };

    const handleBrandSelect = (id: string, name: string) => {
        console.log(`Выбран бренд: ${name}`);
    };

    const typeItems = filtersDropdownItems({
        list: typeFilters,
        onSelect: handleTypeSelect,
    });
    const brandItems = filtersDropdownItems({
        list: brandFilters,
        onSelect: handleBrandSelect,
    });

    return (
        <div className="border-r-1 border-[#5120B8]/30 w-[250px] h-full">
            <div className="sticky top-30 flex flex-col justify-center items-center gap-[10px] mt-[20px]">
                <Dropdown
                    trigger={
                        <Button
                            text="Тип"
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
                            text="Бренд"
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
            </div>
        </div>
    );
};
