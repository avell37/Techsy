import { IType } from "@/shared/types/IType";

export interface TypeInitialState {
    types: IType[],
    loading: boolean,
    error: boolean,
    selectedType: {
        id: string,
        name: string
    }
}