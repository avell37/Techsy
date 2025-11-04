import clsx from "clsx";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import type { FilteredSearchSchema } from "../model/types/filteredSearchSchema";
import { Button, Input } from "@/shared/ui";
import { ProductFiltersResponsive } from "@/features/ProductFilters";

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
                    className="min-w-[200px] w-full border-1 border-primary-900/30 hover:border-primary-900 
                    bg-gradient focus:border-light-purple transition outline-none p-2 text-start 
                    rounded-md text-white focus:outline-none"
                    type="text"
                    placeholder="Введите название устройства..."
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
                <Button
                    variant="ghost"
                    className={clsx("hidden border p-2 bg-gradient rounded-md transition-all duration-300 max-lg:block", {
                        "border-primary-900": showFilters,
                        "border-primary-900/30": !showFilters
                    })}
                    type="button"
                    onClick={() => setShowFilters(!showFilters)}
                >
                    <SlidersHorizontal className="stroke-white" />
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
                        <div className="bg-gradient h-full max-w-[320px] relative shadow-xl">
                            <ProductFiltersResponsive {...filterProps} />
                            <Button
                                variant="default"
                                size="none"
                                className="absolute right-2 top-4"
                                onClick={() => setShowFilters(false)}
                            >
                                <X
                                    className="stroke-white cursor-pointer hover:stroke-gray-400 transition-all
                                    duration-300 max-w-[25px] w-full max-h-[25px] h-full"
                                />
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
