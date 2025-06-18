import { IShipping } from "@/shared/types";

export const isShippingValid = (shipping: IShipping) => {
    return shipping &&
        typeof shipping === "object" &&
        Object.values(shipping).length > 0 &&
        Object.values(shipping).every(
            (value) => value !== null && value !== undefined && value.toString().trim() !== ""
        );
}