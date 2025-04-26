import { Card } from "@/shared/ui/Card/Card";
import { useAppSelector } from "@/shared/types/useAppSelector";
import { selectFilteredDevices } from "@/entities/Device/model/selectors";

export const ProductList = () => {
    const filteredDevices = useAppSelector(selectFilteredDevices);

    return (
        <div className="flex gap-[50px] flex-wrap max-w-[1200px] mt-[10px]">
            {filteredDevices?.map((device) => (
                <Card key={device.id} device={device} />
            ))}
        </div>
    );
};
