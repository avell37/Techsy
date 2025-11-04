import { deviceSelector } from "@/entities/Device";
import { useAppSelector } from "@/shared/hooks";
import { useNavigate } from "react-router-dom";
import { DeviceColumns } from "./DeviceTable/DeviceColumns";
import { ADD_DEVICE_ROUTE } from "@/shared/config/consts";
import { StoreLayout } from "@/widgets";

export const Devices = () => {
    const devices = useAppSelector(deviceSelector.devices);
    const navigate = useNavigate();

    return (
        <StoreLayout 
            title={`Товары (${devices.length})`}
            subtitle="Все товары вашего магазина"
            buttonLabel="Добавить"
            onClick={() => navigate(ADD_DEVICE_ROUTE)}
            columns={DeviceColumns}
            data={devices}
            filterKey="name"
        />
    )
}
