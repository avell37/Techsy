import { fetchAllBrands, fetchAllDevices, fetchAllTypes } from "@/entities";
import { deleteOneBrand, deleteOneDevice, deleteOneType } from "../api/deviceApi";
import { RootState } from "@/app/providers/store/store";
import { IBrand, IDevice, IType } from "../types";

export const entityConfig = {
    brand: {
        fetch: fetchAllBrands,
        remove: deleteOneBrand,
        selector: (state: RootState): IBrand[] => state.brandReducer.brands
    },
    type: {
        fetch: fetchAllTypes,
        remove: deleteOneType,
        selector: (state: RootState): IType[] => state.typeReducer.types
    },
    device: {
        fetch: fetchAllDevices,
        remove: deleteOneDevice,
        selector: (state: RootState): IDevice[] => state.deviceReducer.devices
    }
}