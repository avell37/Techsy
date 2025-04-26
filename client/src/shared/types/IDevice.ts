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
    basketId?: boolean,
    brand: string,
    type: string
}