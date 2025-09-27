import { useActions, useAppSelector } from "@/shared/hooks";
import { favoriteSelector } from "@/entities/Favorites";
import { PaginationContent, PaginationItem, PaginationNext, PaginationPrevious, ShadPagination } from "./Pagination.ui";
import clsx from "clsx";

export const Pagination = ({ totalPages }: { totalPages: number }) => {
    const { setCurrentPage } = useActions();
    const currentPage = useAppSelector(favoriteSelector.currentPage);

    if (totalPages === 0) return null;

    const pages: number[] = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <ShadPagination className="rounded-xl mt-5 bg-gradient shadow-lg">
            <PaginationContent className="flex justify-center items-center gap-2">
                {currentPage > 1 && (
                    <PaginationItem>
                        <PaginationPrevious
                            className="flex justify-center items-center bg-main text-gray-300 
                                cursor-pointer hover:bg-primary-900 hover:text-white transition-all"
                            onClick={() => handlePageChange(currentPage - 1)}
                        />
                    </PaginationItem>
                )}
                {pages.map((page) => (
                    <PaginationItem
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={clsx(`w-[50px] h-[50px] flex items-center justify-center text-white cursor-pointer hover:bg-primary-300 transition-all`, {
                            "border-b-1 border-light-purple": currentPage === page }
                        )}
                    >
                        {page}
                    </PaginationItem>
                ))}
                {currentPage < totalPages && (
                    <PaginationItem
                        className="flex justify-center items-center bg-main text-gray-300 
                                cursor-pointer rounded-md hover:bg-primary-900 hover:text-white transition-all"
                        onClick={() => handlePageChange(currentPage + 1)}
                    >
                        <PaginationNext />
                    </PaginationItem>
                )}
            </PaginationContent>
        </ShadPagination>
    );
};
