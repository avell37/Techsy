import { ArrowDown } from "@/shared/assets";
import { Button, Dropdown } from "@/shared/ui";
import { ProductFiltersSchema } from "../model/types/productFiltersSchema";

export const ProductFiltersView = ({
    activeFilter,
    selectedType,
    typeItems,
    selectedBrand,
    brandItems,
    isFilterActive,
    handleResetFilters,
    handleFilterChange,
}: ProductFiltersSchema) => {
    return (
        <div className="flex border-1 rounded-xl border-[#5120B8]/30 h-screen mt-5 filters-bg-gradient shadow-lg">
            <div className="sticky top-30 flex flex-col gap-[10px] mt-[20px] mb-[20px]">
                <Dropdown
                    trigger={
                        <Button
                            text={selectedType.name}
                            className="relative w-[250px] h-[40px] text-start pl-8 text-white border-[#5120B8]/30 hover:border-[#5120B8] hover:bg-[#1A1238] focus:border-[#4F45E4] transition cursor-pointer"
                        >
                            <ArrowDown
                                width="20px"
                                height="20px"
                                className="absolute top-[10px] left-1"
                            />
                        </Button>
                    }
                    items={typeItems}
                    className="w-[250px]"
                />
                <Dropdown
                    trigger={
                        <Button
                            text={selectedBrand.name}
                            className="relative w-[250px] h-[40px] text-start pl-8 text-white border-[#5120B8]/30 hover:border-[#5120B8] hover:bg-[#1A1238] focus:border-[#4F45E4] transition cursor-pointer"
                        >
                            <ArrowDown
                                width="20px"
                                height="20px"
                                className="absolute top-[10px] left-1"
                            />
                        </Button>
                    }
                    items={brandItems}
                    className="w-[250px]"
                />
                <div className="divider" />
                <label className="filter-label">
                    <input
                        type="checkbox"
                        className="peer absolute w-0 h-0 opacity-0 cursor-pointer"
                        checked={activeFilter === "priceLow"}
                        onChange={() => handleFilterChange("priceLow")}
                    />
                    <span className="custom-checkbox custom-checkbox-check" />
                    <span className="text-white ml-4">Сначала недорогие</span>
                </label>
                <label className="filter-label">
                    <input
                        type="checkbox"
                        className="peer absolute w-0 h-0 opacity-0 cursor-pointer"
                        checked={activeFilter === "priceHigh"}
                        onChange={() => handleFilterChange("priceHigh")}
                    />
                    <span className="custom-checkbox custom-checkbox-check" />
                    <span className="text-white ml-4">Сначала дорогие</span>
                </label>
                <label className="filter-label">
                    <input
                        type="checkbox"
                        className="peer absolute w-0 h-0 opacity-0 cursor-pointer"
                        checked={activeFilter === "rating"}
                        onChange={() => handleFilterChange("rating")}
                    />
                    <span className="custom-checkbox custom-checkbox-check" />
                    <span className="text-white ml-4">По рейтингу</span>
                </label>
                {isFilterActive && (
                    <Button
                        className="w-[250px] h-[40px] text-center text-white rounded-md border-[#5120B8]/30 hover:border-[#5120B8] hover:bg-[#1A1238]/30 transition cursor-pointer"
                        text="Сбросить всё"
                        onClick={handleResetFilters}
                    />
                )}
            </div>
        </div>
    );
};
