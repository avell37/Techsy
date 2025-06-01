import { ArrowDown } from "@/shared/assets";
import { Button, Dropdown } from "@/shared/ui";
import { ProductFiltersSchema } from "../model/types/productFiltersSchema";

export const ProductFiltersView = ({
    selectedType,
    typeItems,
    selectedBrand,
    brandItems,
    isFilterActive,
    handleResetFilters,
}: ProductFiltersSchema) => {
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
