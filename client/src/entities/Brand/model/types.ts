import { IBrand } from "@/shared/types/IBrand";

export interface BrandState {
    brands: IBrand[],
    loading: string
}