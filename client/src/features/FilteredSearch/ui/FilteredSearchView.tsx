import { Input } from "@/shared/ui";
import { FilteredSearchSchema } from "../model/types/filteredSearchSchema";

export const FilteredSearchView = ({
    value,
    onChange,
}: FilteredSearchSchema) => {

    return (
        <div className="flex gap-[10px] w-full mt-[12px]">
            <Input
                noWrap
                className="min-w-[200px] w-full border-1 border-[#5120B8]/30 hover:border-[#5120B8] hover:bg-[#1A1238]/30 focus:border-[#4F45E4] transition outline-none p-2 text-start rounded-md text-white focus:outline-none"
                type="text"
                placeholder="Введите название устройства..."
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
};
