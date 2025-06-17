import { IDevice } from "@/shared/types";

export const countPagination = (
    { devices, currentPage, itemsPerPage }:
        { devices: IDevice[], currentPage: number, itemsPerPage: number }
) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = devices.slice(startIndex, endIndex);
    const totalPages = Math.ceil(devices.length / itemsPerPage)

    return {
        startIndex,
        endIndex,
        currentItems,
        totalPages
    }
}