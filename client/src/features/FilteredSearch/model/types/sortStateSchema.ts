type SortTypeSchema = 'price-inc' | 'price-dec' | 'rating' | null

export interface SortStateSchema {
    sortType: SortTypeSchema,
    search: string,
}