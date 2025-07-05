export const Container = ({
    children,
    className,
    noWidthFull,
}: {
    children: React.ReactNode;
    className?: string;
    noWidthFull?: boolean;
}) => {
    if (noWidthFull) {
        return (
            <div
                className={`max-w-[1440px] mx-auto px-4 ${
                    className ? className : ""
                }`}
            >
                {children}
            </div>
        );
    }
    return (
        <div
            className={`max-w-[1440px] mx-auto w-full px-4 ${
                className ? className : ""
            }`}
        >
            {children}
        </div>
    );
};
