import { IDevice, IDeviceInfo } from "@/shared/types";

export const categories = ({device}: {device: IDevice}) => {
    const info = device.deviceInfo || [];
    
    return [
        {
            "Заводские данные": info.filter(
                (info: IDeviceInfo) =>
                    info.title.toLowerCase().includes("гарантия") || 
                    info.title.toLowerCase().includes("страна")
            )
        },
        {
            "Процессор и память": info.filter(
                (info: IDeviceInfo) =>
                    info.title.toLowerCase().includes("процессор") ||
                    info.title.toLowerCase().includes("память")
            )
        },
        {
            "Внешний вид": info.filter(
                (info: IDeviceInfo) =>
                    info.title.toLowerCase().includes("цвет")
            )
        },
        {
            Камера: info.filter(
                (info: IDeviceInfo) =>
                    info.title.toLowerCase().includes("камера")
            )
        },
        {   
            Накопители: info.filter(
                (info: IDeviceInfo) =>
                    info.title.toLowerCase().includes("накопитель") ||
                    info.title.toLowerCase().includes("диск")
            )
        },
        {   
            Графика: info.filter(
                (info: IDeviceInfo) =>
                    info.title.toLowerCase().includes("видеокарта") ||
                    info.title.toLowerCase().includes("графика")
            )
        },
        {   
            Прочее: info.filter(
                (info: IDeviceInfo) =>
                    !info.title.toLowerCase().includes("процессор") &&
                    !info.title.toLowerCase().includes("память") &&
                    !info.title.toLowerCase().includes("накопитель") &&
                    !info.title.toLowerCase().includes("диск") &&
                    !info.title.toLowerCase().includes("видеокарта") &&
                    !info.title.toLowerCase().includes("графика") &&
                    !info.title.toLowerCase().includes("гарантия") && 
                    !info.title.toLowerCase().includes("страна") &&
                    !info.title.toLowerCase().includes("цвет") &&
                    !info.title.toLowerCase().includes("камера")
            )
        }
    ];
}