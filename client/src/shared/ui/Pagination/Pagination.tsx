import { useAppDispatch, useAppSelector } from "@/shared/hooks";
import { setCurrentPage } from "@/entities/Favorites";
import { Button } from "@shared/ui";
import { ArrowLeft } from "@/shared/assets/icons/ArrowLeft";
import { ArrowRight } from "@/shared/assets/icons/ArrowRight";

export const Pagination = ({ totalPages }) => {
    const dispatch = useAppDispatch();
    const { currentPage } = useAppSelector((state) => state.favoriteReducer);

    const pages: number[] = [];

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    const handlePageChange = (page: number) => {
        dispatch(setCurrentPage(page));
    };

    if (totalPages === 0) {
        return null;
    }

    return (
        <div className="border-1 rounded-xl border-[#5120B8]/30 mt-5 filters-bg-gradient shadow-lg">
            <div className="flex justify-center items-center gap-2">
                {currentPage > 1 ? (
                    <Button
                        className="flex justify-center items-center w-[50px] h-[50px] cursor-pointer hover:bg-[#1A1238]"
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
                        className={`w-[50px] h-[50px] text-white cursor-pointer hover:bg-[#1A1238] transition-all ${currentPage === page ? "border-b-1 border-[#8A4FFF]" : ""}`}
                        text={page}
                    />
                ))}
                {currentPage !== totalPages ? (
                    <Button
                        className="flex justify-center items-center w-[50px] h-[50px] cursor-pointer hover:bg-[#1A1238]"
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
