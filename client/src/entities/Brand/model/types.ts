import { IBrand } from "@/shared/types/IBrand";

export interface BrandState {
    brands: IBrand[],
    selectedBrand: {
        id: string,
        name: string
    },
    loading: string
}