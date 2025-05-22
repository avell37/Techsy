import { Button, Input, Dropdown } from "@/shared/ui";
import { FilteredSearchSchema } from "../model/types/filteredSearchSchema";
import { dropdownItemsWithFilters } from "../model/constants/dropdownItemsWithFilters";

export const FilteredSearchView = ({
    value,
    onChange,
}: FilteredSearchSchema) => {
    return (
        <div className="flex gap-[10px] w-full max-w-[1150px] mt-[10px]">
            <Input
                noWrap
                className="min-w-[200px] w-full border-1 border-[#5120B8]/30 hover:border-[#5120B8] hover:bg-[#1A1238]/30 focus:border-[#4F45E4] transition outline-none p-2 text-start rounded-md text-white focus:outline-none"
                type="text"
                placeholder="Введите название какой нить хуеты"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            <Dropdown
                trigger={
                    <Button
                        className="w-[150px] h-[40px] bg-[#5120B8] text-center text-white rounded-md"
                        text="Фильтры"
                    />
                }
                items={dropdownItemsWithFilters()}
            />
        </div>
    );
};
