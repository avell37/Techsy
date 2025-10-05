import { deviceSelector } from '@/entities';
import { DeviceColumns } from '@/entities/Device/ui/DeviceTable/DeviceColumns';
import { ADD_DEVICE_ROUTE } from '@/shared/config/consts';
import { useAppSelector } from '@/shared/hooks';
import { DataTable } from '@/shared/ui/DataTable/DataTable';
import { StoreCard } from '@/shared/ui/StoreCard/StoreCard';
import { useNavigate } from 'react-router-dom';

export const DevicesPage = () => {
    const devices = useAppSelector(deviceSelector.devices);
    const navigate = useNavigate();

    return (
        <StoreCard
            title={`Товары (${devices.length})`}
            subtitle="Все товары вашего магазина"
            buttonLabel="Добавить"
            onClick={() => navigate(ADD_DEVICE_ROUTE)}
        >
            <DataTable columns={DeviceColumns} data={devices} filterKey="name" />
        </StoreCard>
    )
}
