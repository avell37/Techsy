import { AppDispatch } from "@/app/providers/store/store"

export interface dropdownFiltersSchema {
    dispatch: AppDispatch, 
    setFilter: (text: string) => void
}