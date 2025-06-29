export interface DeviceInfoItemSchema {
    item: DeviceInfoSchema,
    onChange: (id: string, key: string, value: string) => void,
    onRemove: (id: string) => void,
}

export interface DeviceInfoSchema {
    id: string,
    title: string,
    description: string,
}