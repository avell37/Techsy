export const Container = ({
    children,
    widthWrapper = true,
}: {
    children: React.ReactNode;
    widthWrapper?: boolean;
}) => {
    if (widthWrapper) {
        return <div className="max-w-[1440px] mx-auto w-full">{children}</div>;
    }
    return <div className="max-w-[1440px] mx-auto">{children}</div>;
};
