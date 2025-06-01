import { Button } from "@/shared/ui";
import { GoogleIcon } from "@/shared/assets";

export const GoogleAuthView = ({ login }: { login: () => void }) => {
    return (
        <Button
            type="button"
            onClick={login}
            className="relative flex justify-center items-center w-[40px] h-[40px] border-gray-700 border-1 bg-[#111729] text-white rounded-full cursor-pointer"
        >
            <GoogleIcon />
        </Button>
    );
};
