import type { IDropdownItem } from "./IDropdownItem";

export interface DropdownProps {
    trigger: React.ReactNode;
    items: IDropdownItem[];
    className?: string;
}
