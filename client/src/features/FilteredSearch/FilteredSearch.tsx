import { FilteredSearchView } from "./FilteredSearchView";
import { useState } from "react";
import { useAppDispatch } from "@/shared/hooks";
import { setSearchFilter } from "@/entities";

export const FilteredSearch = () => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState("");

    const onChangeFilters = (value: string) => {
        setValue(value);
        dispatch(setSearchFilter(value));
    };

    return <FilteredSearchView value={value} onChange={onChangeFilters} />;
};
