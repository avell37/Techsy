import { Card } from "@/shared/ui/Card/Card";
import { useEffect } from "react";
import { useAppDispatch } from "@/shared/types/useAppDispatch";
import { fetchAllDevices } from "@/app/store/reducers/deviceSlice/deviceSlice";
import { useAppSelector } from "@/shared/types/useAppSelector";

export const ProductList: React.FC = () => {
    const dispatch = useAppDispatch();
    const devices = useAppSelector((state) => state.deviceReducer.devices);

    useEffect(() => {
        dispatch(fetchAllDevices());
    }, [dispatch]);

    return (
        <div className="flex gap-[50px] flex-wrap max-w-[1200px] mt-[10px]">
            {devices?.map((device) => (
                <Card key={device.id} device={device} />
            ))}
        </div>
    );
};
