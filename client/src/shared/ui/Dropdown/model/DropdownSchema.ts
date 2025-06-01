import { IDropdownItem } from "@/shared/types/IDropdownItem";

export interface DropdownSchema {
    trigger: React.ReactNode;
    items: IDropdownItem[],
    className?: string,
    triggerClassname?: string
}