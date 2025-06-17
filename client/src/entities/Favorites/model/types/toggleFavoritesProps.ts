import { AppDispatch } from "@/app/providers/store/store";
import { IDevice } from "@/shared/types";

export interface toggleFavoritesProps {
    device: IDevice,
    notifySuccess: (message: string) => void,
    notifyError: (message: string) => void,
    dispatch: AppDispatch;
}