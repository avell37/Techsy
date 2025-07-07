import { ArrowDown } from "@/shared/assets";
import { Button, Divider, Dropdown, Input } from "@/shared/ui";
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
        <div className="min-h-[750px] flex border-1 rounded-xl border-primary-900/30 mt-5 
        filters-bg-gradient shadow-lg max-lg:max-w-[200px] max-md:max-w-[150px] max-lg:hidden">
            <div className="flex flex-col gap-[10px] mt-[20px]">
                <Dropdown
                    trigger={
                        <Button
                            text={selectedType.name}
                            className="relative w-[250px] h-[40px] text-start pl-8 text-white 
                            border-primary-900/30 hover:border-primary-900 hover:bg-primary-300
                            focus:border-light-purple transition cursor-pointer"
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
                            className="relative w-[250px] h-[40px] text-start pl-8 text-white 
                            border-primary-900/30 hover:border-primary-900 hover:bg-primary-300 
                            focus:border-light-purple transition cursor-pointer"
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
                <Divider variant="h-[2px] w-full" />
                <label className="filter-label">
                    <Input
                        noWrap
                        type="checkbox"
                        className="peer absolute w-0 h-0 opacity-0 cursor-pointer"
                        checked={activeFilter === "priceLow"}
                        onChange={() => handleFilterChange("priceLow")}
                    />
                    <span className="custom-checkbox custom-checkbox-check" />
                    <span className="text-white ml-4 max-sm:break-words max-sm:max-w-[100px]">Сначала недорогие</span>
                </label>
                <label className="filter-label">
                    <Input
                        noWrap
                        type="checkbox"
                        className="peer absolute w-0 h-0 opacity-0 cursor-pointer"
                        checked={activeFilter === "priceHigh"}
                        onChange={() => handleFilterChange("priceHigh")}
                    />
                    <span className="custom-checkbox custom-checkbox-check" />
                    <span className="text-white ml-4 max-sm:break-words max-sm:max-w-[100px]">Сначала дорогие</span>
                </label>
                <label className="filter-label">
                    <Input
                        noWrap
                        type="checkbox"
                        className="peer absolute w-0 h-0 opacity-0 cursor-pointer"
                        checked={activeFilter === "rating"}
                        onChange={() => handleFilterChange("rating")}
                    />
                    <span className="custom-checkbox custom-checkbox-check" />
                    <span className="text-white ml-4 max-sm:break-words max-sm:max-w-[100px]">По рейтингу</span>
                </label>
                {isFilterActive && (
                    <Button
                        className="w-[250px] h-[40px] text-center text-white rounded-md border-primary-900/30 
                        hover:border-primary-900 hover:bg-primary-300/30 transition cursor-pointer"
                        text="Сбросить всё"
                        onClick={handleResetFilters}
                    />
                )}
            </div>
        </div>
    );
};
