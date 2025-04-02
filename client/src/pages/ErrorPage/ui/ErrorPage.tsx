export const ErrorPage = () => {
    return (
        <div className="flex flex-col justify-center items-center h-[100vh] gap-[30px]">
            <a href="/" className="flex justify-center text-xl text-purple-500 font-bold">techsy</a>
            <div className="flex flex-col items-center justify-center gap-[20px]">
                <p className="text-white font-bold text-7xl">404</p>
                <p className="text-white flex flex-col text-center">Эта страница не найдена... 
                    <span>Назад?</span>
                </p>
            </div>
        </div>
    )
}
