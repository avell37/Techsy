interface Props {
    width: string;
    height: string;
    className?: string;
}

export const XMarkIcon = ({ width, height, className }: Props) => {
    return (
        <svg
            width={width}
            height={height}
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
            />
        </svg>
    );
};
