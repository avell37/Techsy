import { RootState } from "@/app/providers/store/store";

export const selectTypeById = (id: string | undefined) => (state: RootState) => 
    state.typeReducer.types.find(type => type.id === id);
