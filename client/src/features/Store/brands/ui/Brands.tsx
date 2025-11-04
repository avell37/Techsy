import { brandSelector } from "@/entities/Brand";
import { useAppSelector } from "@/shared/hooks";
import { useNavigate } from "react-router-dom";
import { BrandColumns } from "./BrandTable/BrandColumns";
import { ADD_BRAND_ROUTE } from "@/shared/config/consts";
import { StoreLayout } from "@/widgets";

export const Brands = () => {
    const brands = useAppSelector(brandSelector.brands);
    const navigate = useNavigate();

    return (
        <StoreLayout 
            title={`Бренды (${brands.length})`}
            subtitle="Все бренды вашего магазина"
            buttonLabel="Добавить"
            onClick={() => navigate(ADD_BRAND_ROUTE)}
            columns={BrandColumns}
            data={brands}
            filterKey="name"
        />
    )
}
