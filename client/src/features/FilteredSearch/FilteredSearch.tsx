import { FilteredSearchView } from "./FilteredSearchView";
import { useState } from "react";
import { useAppDispatch } from "@/shared/types/useAppDispatch";
import { setSearchFilter } from "@/entities/Device";
import { useAppSelector } from "@/shared/types/useAppSelector";

export const FilteredSearch = () => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState("");
    const { search } = useAppSelector((state) => state.deviceReducer.filters);

    const onChangeFilters = (value: string) => {
        setValue(value);
        dispatch(setSearchFilter(value));
    };

    console.log(value);
    console.log(search);

    return <FilteredSearchView value={value} onChange={onChangeFilters} />;
};
