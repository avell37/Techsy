import { Button, Divider, Dropdown, Input } from "@/shared/ui";
import { ProductFiltersSchema } from "../model/types/productFiltersSchema";
import { ArrowDown } from "@/shared/assets";

export const ProductFiltersResponsive = ({
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
        <div className="h-full flex justify-center filters-bg-gradient shadow-lg">
            <div className="flex flex-col gap-[10px] w-full">
                <Dropdown
                    trigger={
                        <Button
                            text={selectedType.name}
                            className="relative max-w-[300px] w-full h-[40px] text-start pl-8 text-white 
                                border-primary-900/30 hover:border-primary-900 hover:bg-primary-300
                                focus:border-light-purple transition cursor-pointer mt-8"
                        >
                            <ArrowDown
                                width="20px"
                                height="20px"
                                className="absolute top-[10px] left-1"
                            />
                        </Button>
                    }
                    items={typeItems}
                    className="w-[320px]"
                />
                <Dropdown
                    trigger={
                        <Button
                            text={selectedBrand.name}
                            className="relative max-w-[300px] w-full h-[40px] text-start pl-8 text-white 
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
                    className="w-[320px]"
                />
                <Divider variant="h-[2px] w-full" />
                <label className="filter-label-responsive">
                    <Input
                        noWrap
                        type="checkbox"
                        className="peer absolute w-0 h-0 opacity-0 cursor-pointer"
                        checked={activeFilter === "priceLow"}
                        onChange={() => handleFilterChange("priceLow")}
                    />
                    <span className="custom-checkbox custom-checkbox-check" />
                    <span className="text-white ml-4">Сначала недорогие</span>
                </label>
                <label className="filter-label-responsive">
                    <Input
                        noWrap
                        type="checkbox"
                        className="peer absolute w-0 h-0 opacity-0 cursor-pointer"
                        checked={activeFilter === "priceHigh"}
                        onChange={() => handleFilterChange("priceHigh")}
                    />
                    <span className="custom-checkbox custom-checkbox-check" />
                    <span className="text-white ml-4">Сначала дорогие</span>
                </label>
                <label className="filter-label-responsive">
                    <Input
                        noWrap
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
                        className="max-w-[320px] w-full h-[40px] text-center text-white rounded-md 
                        border-primary-900/30 hover:border-primary-900 hover:bg-primary-300/30 
                        transition cursor-pointer"
                        text="Сбросить всё"
                        onClick={handleResetFilters}
                    />
                )}
            </div>
        </div>
    );
}
