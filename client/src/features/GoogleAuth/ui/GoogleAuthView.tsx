import { Button } from "@/shared/ui";
import { GoogleIcon } from "@/shared/assets";

export const GoogleAuthView = ({ login }: { login: () => void }) => {
    return (
        <Button
            type="button"
            className="relative flex justify-center items-center w-[40px] h-[40px] 
            border-primary-500 border-1 hover:border-primary-900 hover:bg-primary-500
            bg-primary-300 text-white rounded-full cursor-pointer transition-all"
            onClick={login}
        >
            <GoogleIcon />
        </Button>
    );
};
