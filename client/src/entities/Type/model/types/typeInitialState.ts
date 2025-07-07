import { IType } from "@/shared/types/IType";

export interface TypeInitialState {
    types: IType[],
    selectedType: {
        id: string,
        name: string
    },
    loading: boolean,
    error: boolean
}