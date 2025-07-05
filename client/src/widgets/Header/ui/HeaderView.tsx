import { ArrowDown, defaultUser } from "@/shared/assets";
import { Button, Container, Dropdown } from "@/shared/ui";
import { userDropdownItems } from "../lib/userDropdownItems";
import { LOGIN_ROUTE, SHOP_ROUTE } from "@/shared/config/consts";
import { HeaderAuthSchema } from "../model/types/HeaderSchema";

export const HeaderView = ({
    navigate,
    picture,
    userIsAuth,
    userLogout,
}: HeaderAuthSchema) => {
    const handleLogin = () => navigate(LOGIN_ROUTE);
    const handleNavigateToShop = () => navigate(SHOP_ROUTE);
    const profileImage = picture
        ? `${import.meta.env.VITE_API_URL}/uploads/avatars/${picture}`
        : defaultUser;

    return (
        <div className="sticky top-0 w-full bg-black border-b border-primary-500 z-[100]">
            <Container>
                <div className="flex justify-between items-center min-h-[100px]">
                    <Button
                        onClick={handleNavigateToShop}
                        className="flex justify-center text-xl text-purple-500 font-bold cursor-pointer max-sm:text-lg"
                    >
                        techsy
                    </Button>
                    {userIsAuth ? (
                        <div className="flex justify-center gap-[30px]">
                            <Dropdown
                                trigger={
                                    <div className="flex justify-center items-center gap-[5px] cursor-pointer">
                                        <div className="w-[50px] h-[50px] border-2 border-primary-900 rounded-full bg-transparent overflow-hidden max-sm:w-[40px] max-sm:h-[40px]">
                                            <img
                                                className="w-[50px] h-[50px] max-sm:w-[40px] max-sm:h-[40px]"
                                                src={profileImage}
                                            />
                                        </div>
                                        <ArrowDown width="20px" height="20px" className="max-sm:w-[15px] max-sm:h-[15px]" />
                                    </div>
                                }
                                items={userDropdownItems({ navigate, userLogout })}
                                className="right-2"
                            />
                        </div>
                    ) : (
                        <div className="flex justify-center gap-[30px]">
                            <Button
                                onClick={handleLogin}
                                className="text-white hover:text-primary-light transition-colors cursor-pointer"
                            >
                                Войти
                            </Button>
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
};
