interface Props {
    width: string;
    height: string;
    className?: string;
    onClick?: () => void;
}

export const PlusIcon = ({ width, height, className, onClick }: Props) => {
    return (
        <svg
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            fill="#ffffff"
            viewBox="0 0 24 24"
            className={className}
            onClick={onClick}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
            />
        </svg>
    );
};
