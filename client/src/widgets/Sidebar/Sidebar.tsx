export const Sidebar = ({ children }: {children: React.ReactNode}) => {
    return (
        <div className="flex rounded-xl lg:min-h-[750px] mt-5 bg-gradient shadow-lg lg:min-w-[200px] lg:max-w-[250px] w-full">
            <div className="lg:sticky top-30 flex flex-col gap-[10px] mt-[20px] mb-[20px] w-full max-lg:flex-row">
                {children}
            </div>
        </div>
    );
};
