import { PaginationContent, PaginationItem, PaginationNext, PaginationPrevious, ShadPagination } from "../../external/Pagination/Pagination";
import clsx from "clsx";

interface PaginationProps {
    totalPages: number;
    currentPage: number;
    onChangePage: (page: number) => void;
}

export const Pagination = ({ totalPages, currentPage, onChangePage }: PaginationProps) => {
    if (totalPages === 0) return null;

    const pages: number[] = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    const handlePageChange = (page: number) => {
        onChangePage(page);
    };

    return (
        <ShadPagination className="rounded-xl mt-5 bg-gradient shadow-lg">
            <PaginationContent className="flex justify-center items-center gap-2">
                {currentPage > 1 && (
                    <PaginationItem>
                        <PaginationPrevious
                            className="flex justify-center items-center text-gray-300 
                                cursor-pointer hover:text-white transition-all"
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
                        className="flex justify-center items-center text-gray-300 
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
