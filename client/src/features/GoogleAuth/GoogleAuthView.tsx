import { Button } from "@/shared/ui";
import { GoogleIcon } from "@/shared/assets";

interface Props {
    login: () => void;
}

export const GoogleAuthView = ({ login }: Props) => {
    return (
        <Button
            type="button"
            onClick={login}
            className="relative flex justify-center items-center pl-4 w-[245px] h-[40px] border-gray-700 border-1 bg-[#111729] text-white rounded-full"
            text="Войти с помощью Google"
        >
            <GoogleIcon className="absolute left-2 bottom-[11px]" />
        </Button>
    );
};
