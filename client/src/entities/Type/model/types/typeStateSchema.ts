import { IType } from "@/shared/types/IType";

export interface TypeStateSchema {
    types: IType[],
    loading: boolean,
    error: boolean,
    selectedType: {
        id: string,
        name: string
    }
}