import { FC, useState } from "react";
import { Button } from "@/shared/ui/Button/ui/Button";
import { DropdownSchema } from "../model/DropdownSchema";
import { useDropdownClickOutside } from "@/shared/hooks/useDropdownClickOutside/useDropdownClickOutside";
import { Spinner } from "@/shared/assets";

export const Dropdown: FC<DropdownSchema> = ({
    trigger,
    items,
    className,
    triggerClassname,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const dropdownRef = useDropdownClickOutside(() => setIsOpen(false));

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className={triggerClassname}
            >
                {trigger}
            </div>
            {isOpen && (
                <div
                    className={`${className} absolute mt-2 w-44 bg-[#1A1238] rounded-xl shadow-lg z-10000`}
                >
                    <div className={`py-1 scrollable`}>
                        {items.length > 0 ? (
                            items.map((item, i) => (
                                <Button
                                    key={i}
                                    className="w-full text-center px-4 py-2 text-white rounded-xl hover:bg-[#3A2D67] transition"
                                    text={item.text}
                                    onClick={() => {
                                        setIsOpen(false);
                                        item.onClick();
                                    }}
                                />
                            ))
                        ) : (
                            <Spinner
                                width="30px"
                                height="30px"
                                className="p-2"
                            />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};
