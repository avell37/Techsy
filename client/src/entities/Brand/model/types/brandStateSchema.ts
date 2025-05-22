import { IBrand } from "@/shared/types/IBrand";

export interface BrandStateSchema {
    brands: IBrand[],
    selectedBrand: {
        id: string,
        name: string
    },
    loading: boolean,
    error: boolean
}