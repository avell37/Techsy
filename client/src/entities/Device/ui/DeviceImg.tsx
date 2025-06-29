interface Props {
    name: string;
    img: string;
    className?: string;
}

export const DeviceImg = ({ name, img, className }: Props) => (
    <img
        className={className}
        src={`${import.meta.env.VITE_API_URL}/${img}`}
        alt={name}
    />
);

