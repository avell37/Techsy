import { IType } from "@/shared/types/IType";

export interface TypeState {
    types: IType[],
    selectedType: {
        id: string,
        name: string
    },
    loading: string
}