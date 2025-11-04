import { RootState } from "@/app/providers/store/store";

export const getTotalPrice = (state: RootState) => {
    return state.basketReducer.basket.reduce((total, item) => {
        return total + item.device.price * item.quantity;
    }, 0);
}