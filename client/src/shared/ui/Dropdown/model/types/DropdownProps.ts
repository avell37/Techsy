import { IDropdownItem } from "@/shared/types/IDropdownItem";

export interface DropdownProps {
    trigger: React.ReactNode;
    items: IDropdownItem[],
    className?: string,
    triggerClassname?: string,
}