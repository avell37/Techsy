import { IDeviceInfo } from '@/shared/types'

interface DevicePageDescriptionItemProps {
    title?: string,
    items: IDeviceInfo[]
}

export const DevicePageDescriptionItem = ({ title, items }: DevicePageDescriptionItemProps) => {
    return (
        <div
            key={title}
            className="card-gradient p-6 rounded-2xl border-1 border-primary-900/20 backdrop-blur-sm"
        >
            <h3 className="text-lg font-semibold text-light-purple mb-4">
                {title}
            </h3>
            <div className="space-y-4">
                {items.map((info) => (
                    <div
                        key={info.id}
                        className="group relative overflow-hidden transition-all duration-300 hover:bg-primary-300/20 rounded-xl p-4"
                    >
                        <div className="relative z-10">
                            <div className="text-light-purple/70 text-sm mb-1">
                                {info.title}
                            </div>
                            <div className="text-white font-medium">
                                {info.description}
                            </div>
                        </div>
                        <div className="absolute inset-0 card-gradient-right opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                ))}
            </div>
        </div>
    )
}
