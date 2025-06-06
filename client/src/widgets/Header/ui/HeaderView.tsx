import { ArrowDown, defaultUser } from "@/shared/assets";
import { Button, Dropdown } from "@/shared/ui";
import { userDropdownItems } from "../lib/userDropdownItems";
import { LOGIN_ROUTE, SHOP_ROUTE } from "@/shared/config/consts";
import { HeaderAuthSchema } from "../model/types/HeaderSchema";

export const HeaderView = ({
    navigate,
    picture,
    userIsAuth,
    userLogout,
}: HeaderAuthSchema) => {
    return (
        <div className="sticky top-0 flex justify-between pl-20 pr-20 w-full items-center bg-[#0F0F1A] p-4 border-b border-[#5120B8]/30 z-[100] h-[100px]">
            <Button
                onClick={() => navigate(SHOP_ROUTE)}
                className="flex justify-center text-xl text-purple-500 font-bold cursor-pointer"
            >
                techsy
            </Button>
            {userIsAuth ? (
                <div className="flex justify-center gap-[30px]">
                    <Dropdown
                        trigger={
                            picture ? (
                                <div className="flex justify-center items-center gap-[5px] cursor-pointer">
                                    <div className="w-[50px] h-[50px] border-2 border-[#3A177F] rounded-full bg-transparent overflow-hidden">
                                        <img
                                            className="w-[50px] h-[50px]"
                                            src={
                                                picture.startsWith("http")
                                                    ? picture
                                                    : import.meta.env
                                                          .VITE_API_URL +
                                                      "/avatars/" +
                                                      picture
                                            }
                                        />
                                    </div>
                                    <ArrowDown width="20px" height="20px" />
                                </div>
                            ) : (
                                <div className="flex items-center justify-center gap-[5px]">
                                    <div className="w-[50px] h-[50px] border-2 border-[#3A177F] rounded-full bg-transparent overflow-hidden">
                                        <img
                                            className="w-[50px] h-[50px]"
                                            src={defaultUser}
                                        />
                                    </div>
                                    <ArrowDown width="20px" height="20px" />
                                </div>
                            )
                        }
                        items={userDropdownItems({ navigate, userLogout })}
                        className="right-2"
                    />
                </div>
            ) : (
                <div className="flex justify-center gap-[30px]">
                    <Button
                        onClick={() => navigate(LOGIN_ROUTE)}
                        className="text-white hover:text-[#8A4FFF] transition-colors cursor-pointer"
                    >
                        Войти
                    </Button>
                </div>
            )}
        </div>
    );
};
