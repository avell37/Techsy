import { Button, Divider, Dropdown, Input } from "@/shared/ui";
import { ChevronDown } from "lucide-react";
import type { ProductFiltersSchema } from "../model/types/productFiltersSchema";

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
        <div className="h-full flex justify-center bg-gradient shadow-lg">
            <div className="flex flex-col gap-[10px] pt-10 w-full">
                <Dropdown
                    trigger={
                        <Button
                            variant="ghost"
                            className="relative flex items-center w-[250px] h-[40px] text-start pl-8 text-white
                            hover:bg-main focus:border-primary-900 transition cursor-pointer"
                        >
                            <ChevronDown />
                            {selectedType.name}
                        </Button>
                    }
                    items={typeItems}
                />
                <Dropdown
                    trigger={
                        <Button
                            variant="ghost"
                            className="relative flex items-center w-[250px] h-[40px] text-start pl-8 text-white
                            hover:bg-main focus:border-primary-900 transition cursor-pointer"
                        >
                            <ChevronDown />
                            {selectedBrand.name}
                        </Button>
                    }
                    items={brandItems}
                />
                <Divider variant="h-[2px] w-full" />
                <label className="filter-label-responsive">
                    <Input
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
                        variant="ghost"
                        className="flex justify-center w-[250px] h-[40px] text-white rounded-md hover:bg-main transition cursor-pointer"
                        onClick={handleResetFilters}
                    >
                        Сбросить всё
                    </Button>
                )}
            </div>
        </div>
    );
}
