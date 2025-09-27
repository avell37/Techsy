import { typeSelector } from "@/entities";
import { TypeColumns } from "@/entities/Type/ui/TypeColumns";
import { ADD_TYPE_ROUTE } from "@/shared/config/consts";
import { useAppSelector } from "@/shared/hooks";
import { DataTable } from "@/shared/ui/DataTable/DataTable";
import { StoreCard } from "@/shared/ui/StoreCard/StoreCard";
import { useNavigate } from "react-router-dom";

const TypesPage = () => {

    const types = useAppSelector(typeSelector.types);
    const navigate = useNavigate();

    return (
        <StoreCard
            title={`Типы (${types.length})`}
            subtitle="Все типы вашего магазина"
            buttonLabel="Добавить"
            onClick={() => navigate(ADD_TYPE_ROUTE)}
        >
            <DataTable columns={TypeColumns} data={types} filterKey="name" />
        </StoreCard>
    )
}

export default TypesPage;