import { Control, FieldErrors, Path } from "react-hook-form";

export interface DropdownControllerItem {
    id: string;
    name: string;
}

export interface FormDropdownControllerProps<T extends Record<string, any>> {
    name: Path<T>;
    control: Control<T>,
    items: DropdownControllerItem[];
    errors?: FieldErrors<T>;
    label?: string;
    placeholder?: string;
    className?: string;
}