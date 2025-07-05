import { Button, Input } from "@/shared/ui";
import { FilteredSearchSchema } from "../model/types/filteredSearchSchema";
import { useState } from "react";
import { ProductFiltersResponsive } from "@/features/ProductFilters/ui/ProductFiltersResponsive";
import { XMarkIcon, FiltersIcon } from "@/shared/assets";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";

export const FilteredSearchView = ({
    value,
    onChange,
    ...filterProps
}: FilteredSearchSchema) => {
    const [showFilters, setShowFilters] = useState(false);
    return (
        <div>
            <div className="flex gap-[10px] w-full mt-[12px]">
                <Input
                    noWrap
                    className="min-w-[200px] w-full border-1 border-primary-900/30 hover:border-primary-900 
                    hover:bg-primary-300/30 focus:border-light-purple transition outline-none p-2 text-start 
                    rounded-md text-white focus:outline-none"
                    type="text"
                    placeholder="Введите название устройства..."
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
                <Button
                    className={clsx("hidden border p-2 rounded-md transition-all duration-300 max-lg:block", {
                        "border-light-purple": showFilters,
                        "border-primary-900/30": !showFilters
                    })}
                    type="button"
                    onClick={() => setShowFilters(!showFilters)}
                >
                    <FiltersIcon />
                </Button>
            </div >
            <AnimatePresence>
                {showFilters && (
                    <motion.div
                        initial={{ x: -350, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -350, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="fixed top-0 left-0 z-[993] h-full lg:hidden backdrop-blur-sm"
                    >
                        <div className="bg-[#0F0F1A] h-full w-[320px] relative shadow-xl">
                            <ProductFiltersResponsive {...filterProps} />
                            <Button onClick={() => setShowFilters(false)}>
                                <XMarkIcon
                                    className="stroke-white absolute right-4 top-4 cursor-pointer hover:stroke-gray-400 transition-all
                                duration-300 max-w-[25px] w-full max-h-[25px] h-full max-sm:max-w-[17px] max-sm:max-h-[17px] max-sm:right-8"
                                />
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
