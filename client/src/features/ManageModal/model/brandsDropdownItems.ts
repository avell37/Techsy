import { useAppSelector } from "@/shared/types/useAppSelector"

export const brandsDropdownItems = () => {
    const brands = useAppSelector((state) => state.brandReducer);


}
