export interface OrderItemSchema {
    id: string,
    name: string,
    price: number,
    img: string,
    quantity: number
}

export interface OrderDataSchema {
    items: OrderItemSchema[],
    totalPrice: number,
    delivery: string,
}