import type { IBrand } from "@/entities/Brand";
import type { IType } from "@/entities/Type";

export interface IDevice {
    id: string,
    name: string,
    description: string,
    storage: number,
    color: string,
    price: number,
    rating: number,
    img: string,
    brandId: string,
    typeId: string,
    createdAt: string,
    updatedAt: string,
    basketId?: string | null,
    Brand?: IBrand,
    Type?: IType,
}