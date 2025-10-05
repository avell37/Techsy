import { Container, Dropdown } from "@/shared/ui";
import { getUserDropdownItems } from "../lib/getUserDropdownItems";
import { LOGIN_ROUTE, SHOP_ROUTE } from "@/shared/config/consts";
import { HeaderSchema } from "../model/types/HeaderSchema";
import { UserMenu } from "@/shared/ui/UserMenu/ui/UserMenu";
import { Button } from "@/shared/ui/ui-lib/Button/Button";
import { Link } from "react-router-dom";
import { useAppSelector } from "@/shared/hooks";
import { userSelector } from "@/entities";

export const HeaderView = ({
    currentUser,
    navigate,
    picture,
    userIsAuth,
    userLogout
}: HeaderSchema) => {
    const isLoading = useAppSelector(userSelector.loading);
    const handleLogin = () => navigate(LOGIN_ROUTE);
    const userDropdownItems = getUserDropdownItems(navigate, userLogout)

    return (
        <Container>
            <div className="sticky top-0 rounded-xl bg-gradient border-primary-500 px-6">
                <div className="flex justify-between items-center min-h-[100px] max-[380px]:justify-center max-sm:p-4 max-sm:gap-4 max-sm:flex-wrap">
                    <Link
                        to={SHOP_ROUTE}
                        className="flex justify-center text-xl text-purple-600 font-bold cursor-pointer max-sm:text-lg"
                    >
                        techsy
                    </Link>
                    {userIsAuth ? (
                        <Dropdown
                            trigger={
                                <div>
                                    <UserMenu 
                                        picture={picture}
                                        currentUser={currentUser}
                                    />
                                </div>
                            }
                            items={userDropdownItems}
                            className="w-48"
                        />
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
            </div>
        </Container>
    );
};
