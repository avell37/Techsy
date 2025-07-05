import { FC, useState } from "react";
import { Button } from "@/shared/ui/Button/ui/Button";
import { useDropdownClickOutside } from "@/shared/hooks/useDropdownClickOutside/useDropdownClickOutside";
import { SpinnerAnimation } from "@/shared/assets";
import { DropdownProps } from "../model/types/DropdownProps";
import { AnimatePresence, motion } from "framer-motion";

export const Dropdown: FC<DropdownProps> = ({
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
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className={`${className} absolute mt-2 w-44 bg-primary-300 rounded-xl shadow-lg z-50`}
                    >
                        <div className={`py-1 scrollable`}>
                            {items.length > 0 ? (
                                items.map((item, i) => (
                                    <Button
                                        key={i}
                                        className="w-full text-center px-4 py-2 text-white rounded-xl hover:bg-black-purple transition"
                                        text={item.text}
                                        onClick={() => {
                                            setIsOpen(false);
                                            item.onClick();
                                        }}
                                    />
                                ))
                            ) : (
                                <div className="flex justify-center items-center">
                                    <SpinnerAnimation
                                        width="30px"
                                        height="30px"
                                        className="p-2"
                                    />
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
