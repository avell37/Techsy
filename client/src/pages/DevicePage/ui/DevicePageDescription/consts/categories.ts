import { IDevice, IDeviceInfo } from "@/shared/types";

export const categories = ({device}: {device: IDevice}) => {
    const info = device.deviceInfo || [];
    
    return [
        {
            "Процессор и память": info.filter(
                (info: IDeviceInfo) =>
                    info.title.toLowerCase().includes("процессор") ||
                    info.title.toLowerCase().includes("память")
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
                    !info.title.toLowerCase().includes("графика")
            )
        }
    ];
}