import { Divider, Dropdown } from "@/shared/ui";
import { ProductFiltersSchema } from "../model/types/productFiltersSchema";
import { Sidebar } from "@/widgets/Sidebar/ui/Sidebar";
import { Button } from "@/shared/ui/ui-lib/Button/Button";
import { ChevronDown } from "lucide-react";
import { Input } from "@/shared/ui/ui-lib/Input/Input";

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
        <div className="max-lg:hidden">
            <Sidebar>
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
                    className="w-62"
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
                    className="w-62"
                />
                <Divider variant="h-[2px] w-full" />
                <label className="filter-label">
                    <Input
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
                        variant="ghost"
                        className="flex justify-center w-[250px] h-[40px] text-white rounded-md hover:bg-main transition cursor-pointer"
                        onClick={handleResetFilters}
                    >
                        Сбросить всё
                    </Button>
                )}
            </Sidebar>
        </div>
    );
};