import { Button, Input, Dropdown } from "@/shared/ui";
import { FilteredSearchSchema } from "../model/types/filteredSearchSchema";
import { dropdownItemsWithFilters } from "../model/constants/dropdownItemsWithFilters";
import { useAppDispatch } from "@/shared/hooks";
import { useState } from "react";
import { ArrowDown } from "@/shared/assets";

export const FilteredSearchView = ({
    value,
    onChange,
}: FilteredSearchSchema) => {
    const dispatch = useAppDispatch();
    const [filter, setFilter] = useState("Фильтры");

    return (
        <div className="flex gap-[10px] w-full max-w-[1150px] mt-[10px]">
            <Input
                noWrap
                className="min-w-[200px] w-full border-1 border-[#5120B8]/30 hover:border-[#5120B8] hover:bg-[#1A1238]/30 focus:border-[#4F45E4] transition outline-none p-2 text-start rounded-md text-white focus:outline-none"
                type="text"
                placeholder="Введите название устройства..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            <Dropdown
                trigger={
                    <Button
                        className="flex justify-center items-center w-[150px] h-[45px] text-white rounded-md border-1 border-[#5120B8]/30 hover:border-[#5120B8] hover:bg-[#1A1238]/30 transition cursor-pointer"
                        text={filter}
                    >
                        <ArrowDown
                            width="20px"
                            height="20px"
                            className="absolute top-3 right-1"
                        />
                    </Button>
                }
                items={dropdownItemsWithFilters({ dispatch, setFilter })}
            />
        </div>
    );
};
