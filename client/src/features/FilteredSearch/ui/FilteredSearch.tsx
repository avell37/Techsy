import { FilteredSearchView } from "./FilteredSearchView";
import { useCallback, useState } from "react";
import { useActions } from "@/shared/hooks";

export const FilteredSearch = () => {
    const { setSearchFilter } = useActions();

    const [value, setValue] = useState("");

    const onChangeFilters = useCallback((value: string) => {
        setValue(value);
        setSearchFilter(value);
    }, []);

    return <FilteredSearchView
        value={value}
        onChange={onChangeFilters}
    />;
};
