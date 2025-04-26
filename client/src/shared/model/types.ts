export interface FilterItemProps {
    id: string,
    name: string
}

export interface FiltersDropdownProps {
    list: FilterItemProps[],
    onSelect: (id: string, name: string) => void
}