import { SHOP_ROUTE } from "@/shared/config/consts";
import { Button, Container, Dropdown } from "@/shared/ui";
import { UserMenu } from "@/shared/ui/custom";
import { useHeader } from "../model/hooks/useHeader";
import { Link } from "react-router-dom";

export const Header = () => {
    const { currentUser, userIsAuth, picture, userDropdownItems, handleLogin, } = useHeader();

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
                            className="w-48"
                            trigger={
                                <div>
                                    <UserMenu 
                                        picture={picture}
                                        currentUser={currentUser}
                                    />
                                </div>
                            }
                            items={userDropdownItems}
                        />
                    ) : (
                        <div className="flex justify-center gap-[30px]">
                            <Button
                                className="text-white hover:text-primary-light transition-colors cursor-pointer"
                                onClick={handleLogin}
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
