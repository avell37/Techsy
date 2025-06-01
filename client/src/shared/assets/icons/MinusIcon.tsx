interface Props {
    width: string;
    height: string;
    className?: string;
    onClick?: () => void;
}

export const MinusIcon = ({ width, height, className, onClick }: Props) => {
    return (
        <svg
            width={width}
            height={height}
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            viewBox="0 0 24 24"
            className={className}
            onClick={onClick}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
        </svg>
    );
};
