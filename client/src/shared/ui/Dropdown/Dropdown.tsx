import { FC, useState } from "react";
import { Button } from "@shared/ui/Button/Button";
import { DropdownProps } from "@shared/ui/types";
import { useDropdownClickOutside } from "@/shared/hooks/useDropdownClickOutside";

export const Dropdown: FC<DropdownProps> = ({ trigger, items, className }) => {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useDropdownClickOutside(() => setIsOpen(false));

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
                {trigger}
            </div>
            {isOpen && (
                <div
                    className={`${className} absolute mt-2 w-44 bg-[#1A1238] rounded-xl shadow-lg z-10000`}
                >
                    <div className="py-1">
                        {items.map((item, i) => (
                            <Button
                                key={i}
                                className="w-full text-left px-4 py-2 text-white rounded-xl hover:bg-[#3A2D67] transition"
                                text={item.text}
                                onClick={() => {
                                    setIsOpen(false);
                                    item.onClick();
                                }}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};
