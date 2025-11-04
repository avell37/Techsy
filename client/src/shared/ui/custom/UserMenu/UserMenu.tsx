import { Menu } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "../../external/Avatar/Avatar";
import type { IUser } from "@/entities/User";
import { customAvatar } from "@/shared/lib";

interface Props {
    picture: string | undefined;
    currentUser: IUser | null;
}

export const UserMenu = ({picture, currentUser}: Props) => {
    const avatar = customAvatar(currentUser?.username);

    return (
        <div className="flex justify-center items-center gap-10 cursor-pointer p-2 rounded-md hover:bg-main transition-all">
            <div className="flex items-center gap-2">
                <Avatar>
                    {picture ? (
                        <AvatarImage 
                            src={`${import.meta.env.VITE_API_URL}/uploads/avatars/${picture}`} 
                            alt="user image" 
                        />
                    ) : (
                        <AvatarFallback className="text-white">{avatar}</AvatarFallback>
                    )}
                </Avatar>
                {currentUser ? (
                    <div className="text-start text-sm text-gray-300">
                        <p className="">{currentUser.username}</p>
                        <p className="">{currentUser.email}</p>
                    </div>
                ) : null}
            </div>
            <Menu 
                className="stroke-gray-300" 
            />
        </div>
    )
}
