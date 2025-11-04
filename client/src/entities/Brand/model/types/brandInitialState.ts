import type { IBrand } from "./IBrand"

export interface BrandInitialState {
    brands: IBrand[],
    selectedBrand: {
        id: string,
        name: string
    },
    loading: boolean,
    error: boolean
}