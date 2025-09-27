import { brandSelector } from "@/entities";
import { BrandColumns } from "@/entities/Brand/ui/BrandColumns";
import { ADD_BRAND_ROUTE } from "@/shared/config/consts";
import { useAppSelector } from "@/shared/hooks";
import { DataTable } from "@/shared/ui/DataTable/DataTable";
import { StoreCard } from "@/shared/ui/StoreCard/StoreCard";
import { useNavigate } from "react-router-dom";

const BrandsPage = () => {
    const brands = useAppSelector(brandSelector.brands);
    const navigate = useNavigate();

    return (
        <StoreCard
            title={`Бренды (${brands.length})`}
            subtitle="Все бренды вашего магазина"
            buttonLabel="Добавить"
            onClick={() => navigate(ADD_BRAND_ROUTE)}
        >
            <DataTable columns={BrandColumns} data={brands} filterKey="name" />
        </StoreCard>
    )
}

export default BrandsPage;