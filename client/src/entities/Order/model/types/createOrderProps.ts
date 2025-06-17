export interface OrderItemProps {
    id: string,
    name: string,
    price: number,
    img: string,
    quantity: number
}

export interface OrderDataProps {
    items: OrderItemProps[],
    totalPrice: number,
    delivery: string,
}