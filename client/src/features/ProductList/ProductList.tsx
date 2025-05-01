import { Card } from "@/shared/ui";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
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
