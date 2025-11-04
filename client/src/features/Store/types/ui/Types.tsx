import { typeSelector } from "@/entities/Type";
import { ADD_TYPE_ROUTE } from "@/shared/config/consts";
import { useAppSelector } from "@/shared/hooks";
import { useNavigate } from "react-router-dom";
import { TypeColumns } from "./TypeTable/TypeColumns";
import { StoreLayout } from "@/widgets";

export const Types = () => {
    const types = useAppSelector(typeSelector.types);
    const navigate = useNavigate();

    return (
        <StoreLayout 
            title={`Типы (${types.length})`}
            subtitle="Все типы вашего магазина"
            buttonLabel="Добавить"
            onClick={() => navigate(ADD_TYPE_ROUTE)}
            columns={TypeColumns}
            data={types}
            filterKey="name"
        />
    )
}