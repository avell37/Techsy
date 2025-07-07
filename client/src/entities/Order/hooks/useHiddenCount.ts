import { IOrder } from "@/shared/types/IOrder";

export const useHiddenCount = (order: IOrder) => {
    const maxVisible = 5;
    const visibleItems = order.OrderItem.slice(0, maxVisible);
    const hiddenCount = order.OrderItem.length - maxVisible;

    return {
        visibleItems,
        hiddenCount
    }
}