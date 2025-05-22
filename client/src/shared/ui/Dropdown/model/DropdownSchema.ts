export interface DropdownItemSchema {
    text: string,
    onClick: () => void
}

export interface DropdownSchema {
    trigger: React.ReactNode;
    items: DropdownItemSchema[],
    className?: string,
    triggerClassname?: string
}