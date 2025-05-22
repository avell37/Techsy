export interface FilterItemSchema {
    id: string,
    name: string
}

export interface FiltersDropdownSchema {
    list: FilterItemSchema[],
    onSelect: (id: string, name: string) => void
}