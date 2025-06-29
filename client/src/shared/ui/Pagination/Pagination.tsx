import { useActions, useAppSelector } from "@/shared/hooks";
import { favoriteSelector } from "@/entities/Favorites";
import { Button } from "@shared/ui";
import { ArrowLeft } from "@/shared/assets/icons/ArrowLeft";
import { ArrowRight } from "@/shared/assets/icons/ArrowRight";
import clsx from "clsx";

export const Pagination = ({ totalPages }: { totalPages: number }) => {
    const { setCurrentPage } = useActions();
    const currentPage = useAppSelector(favoriteSelector.currentPage);

    const pages: number[] = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    if (totalPages === 0) {
        return null;
    }

    return (
        <div className="border-1 rounded-xl border-primary-300 mt-5 filters-bg-gradient shadow-lg">
            <div className="flex justify-center items-center gap-2">
                {currentPage > 1 ? (
                    <Button
                        className="flex justify-center items-center w-[50px] h-[50px] cursor-pointer hover:bg-primary-500"
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        <ArrowLeft className={`size-4 stroke-white`} />
                    </Button>
                ) : null}
                {pages.map((page) => (
                    <Button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={clsx(`w-[50px] h-[50px] text-white cursor-pointer hover:bg-primary-300 transition-all`, {
                            "border-b-1 border-light-purple": currentPage === page
                        })}
                        text={page}
                    />
                ))}
                {currentPage !== totalPages ? (
                    <Button
                        className="flex justify-center items-center w-[50px] h-[50px] cursor-pointer hover:bg-primary-500"
                        onClick={() => handlePageChange(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        <ArrowRight className={`size-4 stroke-white`} />
                    </Button>
                ) : null}
            </div>
        </div>
    );
};
