import { FiltersDropdownProps } from "./types";

export const filtersDropdownItems = ({list, onSelect}: FiltersDropdownProps) => {
    if (!Array.isArray(list) || list.length === 0) return [];

    return list.map((item) => ({
        text: item.name,
        onClick: () => onSelect(item.id, item.name)
    }))
}