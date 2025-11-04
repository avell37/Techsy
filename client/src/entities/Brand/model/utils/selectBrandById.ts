import { RootState } from "@/app/providers/store/store";

export const selectBrandById = (id: string | undefined) => (state: RootState) => 
    state.brandReducer.brands.find(brand => brand.id === id);
