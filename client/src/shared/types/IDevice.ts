import { IBrand } from "./IBrand"
import { IDeviceInfo } from "./IDeviceInfo"
import { IType } from "./IType"

export interface IDevice {
    id: string,
    name: string,
    price: number,
    rating: number,
    img: string,
    brandId: string,
    typeId: string,
    createdAt: string,
    updatedAt: string,
    basketId?: boolean | null,
    deviceInfo?: IDeviceInfo[],
    Brand?: IBrand,
    Type?: IType,
}