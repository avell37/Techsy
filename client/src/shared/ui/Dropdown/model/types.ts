export interface DropdownItem {
    text: string,
    onClick: () => void
}

export interface DropdownProps {
    trigger: React.ReactNode;
    items: DropdownItem[],
    className?: string
}