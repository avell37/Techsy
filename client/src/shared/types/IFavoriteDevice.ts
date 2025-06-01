import { IBrand } from "./IBrand";
import { IType } from "./IType";

export interface IFavoriteDevice {
    id: string,
    createdAt: string,
    updatedAt: string,
    name: string,
    price: number,
    rating: 0,
    img: string,
    brandId: string,
    typeId: string,
    basketId?: null,
    Brand: IBrand,
    Type: IType
}